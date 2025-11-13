import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'a50rlj7d', // e.g. "abcd1234"
  dataset: 'production', // or your dataset name
  apiVersion: '2025-11-11', // use today’s date for safety
  useCdn: true, // enables caching for public content
});
