import React from 'react';
import EventPost from './EventPost';
import Headline from '@components/Headline';

const EventsPage = ({ eventsData }) => {
  const now = new Date();

  const categorizedEvents = {
    'Current events': [],
    'Upcoming events': [],
    'Past events': [],
  };

  eventsData.forEach((event) => {
    const start = new Date(event.startDate);
    const end = event.endDate ? new Date(event.endDate) : start;

    if (end < now) {
      categorizedEvents['Past events'].push(event);
    } else if (start > now) {
      categorizedEvents['Upcoming events'].push(event);
    } else {
      categorizedEvents['Current events'].push(event);
    }
  });

  return (
    <div className="flex flex-col w-full justify-center pt-8">
      {Object.entries(categorizedEvents).map(([categoryName, eventsArray]) => (
        <section key={categoryName} className="mb-12 w-full">
          <div className="flex w-full justify-center">
            <div className="flex flex-col w-full max-w-2xl sm:px-0 xs:px-4">
              <Headline>{categoryName}</Headline>
              <div className="pt-4 w-full">
                {eventsArray.length > 0 ? (
                  eventsArray.map((event) => (
                    <EventPost key={event._id} eventData={event} />
                  ))
                ) : (
                  <p>No events.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default EventsPage;
