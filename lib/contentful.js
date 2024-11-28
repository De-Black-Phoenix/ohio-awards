import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  
});

export const fetchEntries = async () => {
  const entries = await client.getEntries();
  return entries.items;
};

// Function to create a new entry
export const createEntry = async (contentType, fields) => {
  try {
    const entry = await client.createEntry(contentType, {
      fields,
    });
    await entry.publish(); // Optionally publish the entry
    return entry;
  } catch (error) {
    console.error('Error creating entry:', error);
    throw error;
  }
};

export default client;

