export async function POST({ request }) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    const APP_ID = import.meta.env.ICONTACT_APPID;
    const USERNAME = import.meta.env.ICONTACT_USERNAME;
    const PASSWORD = import.meta.env.ICONTACT_PASSWORD;
    const CLIENT_FOLDER_ID = import.meta.env.ICONTACT_CLIENTFOLDERID;
    const ACCOUNT_ID = import.meta.env.ICONTACT_ACCOUNTID;
    const LIST_ID = import.meta.env.ICONTACT_LISTID;

    const payload = [
      {
        email,
        firstName,
        lastName,
      },
    ];

    const sendUserDataToIC = await fetch(
      `https://app.icontact.com/icp/a/${ACCOUNT_ID}/c/${CLIENT_FOLDER_ID}/contacts/`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'API-Version': '2.2',
          'API-AppId': APP_ID,
          'API-Username': USERNAME,
          'API-Password': PASSWORD,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await sendUserDataToIC.json();

    if (sendUserDataToIC.ok) {
      const contactId = data.contacts[0].contactId;

      const listPayload = [
        {
          contactId: contactId,
          listId: LIST_ID,
          status: 'normal',
        },
      ];

      const addUserToList = await fetch(
        `https://app.icontact.com/icp/a/${ACCOUNT_ID}/c/${CLIENT_FOLDER_ID}/subscriptions/`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'API-Version': '2.2',
            'API-AppId': APP_ID,
            'API-Username': USERNAME,
            'API-Password': PASSWORD,
          },
          body: JSON.stringify(listPayload),
        }
      );

      const listData = await addUserToList.json();

      if (!addUserToList.ok) {
        return new Response(JSON.stringify({ error: listData }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ success: true, listData }), {
        status: 200,
      });
    }

    if (!sendUserDataToIC.ok) {
      return new Response(JSON.stringify({ error: data }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
