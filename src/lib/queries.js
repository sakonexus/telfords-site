import { sanity } from './sanityClient';

const bannerQuery = `*[_type == "siteBanner" && active == true][0]{
  title,
  message,
  image{
    asset->{
      url
    }
  },
  backgroundColor,
  textColor,
  buttonText,
  buttonUrl,
  startDate,
  endDate
}`;

export async function getSiteBanner() {
  try {
    const banner = await sanity.fetch(bannerQuery);
    return banner;
  } catch (err) {
    console.error('Error fetching site banner:', err);
    return null;
  }
}
