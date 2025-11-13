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
  buttonColor,
  buttonTextColor,
  buttonText,
  buttonUrl,
  startDate,
  endDate,
  active
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

export async function getAllEvents() {
  const query = `*[_type == "event"] | order(startDate asc){
    _id,
    title,
    "slug": slug.current,
    startDate,
    endDate,
    description,
    "imageUrl": image.asset->url
  }`;

  const events = await sanity.fetch(query);
  return events;
}
