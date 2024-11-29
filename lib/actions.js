import client from './contentful'
import {toast} from 'sonner'

/**
 * Fetch the About Page details.
 */
export const fetchAboutPage = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'website', // Content type ID
        limit: 1, // Assuming only one "About Page" entry exists
      });
  
      if (entries.items.length > 0) {
        const aboutPage = entries.items[0].fields;

        const team = (aboutPage.theTeam || []).map((member) => ({
            name: member.fields.title,
            position: member.fields.description,
            imageUrl: "https:" + member.fields.file.url, // Access the file URL
          }));
        return {
          missionStatement: aboutPage.missionStatement,
          visionStatement: aboutPage.visionStatement,
          theTeam: team
        };
      } else {
        console.log('No About Page found.');
        return null;
      }
    } catch (error) {
      console.log('Error fetching About Page:', error);
      return null;
    }
  };



  export const fetchGalleryPage = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'gallery', // Specify the content type
      });
  
      if (entries.items.length > 0) {
        const mergedData = entries.items.reduce(
          (acc, item) => {
            const fields = item.fields;
  
            // Check if yearlyGallery exists and is an array
            if (fields.yearlyGallery && Array.isArray(fields.yearlyGallery)) {
              fields.yearlyGallery.forEach((asset) => {
                const tag = asset.fields.title || 'Unknown Year';
                if (!acc.tags.includes(tag)) {
                  acc.tags.push(tag);
                }
              });
            }
  
            // Check if awardees exists and is an array
            if (fields.awardees && Array.isArray(fields.awardees)) {
              fields.awardees.forEach((asset) => {
                const awardee = {
                  title: asset.fields.title || '',
                  url: 'https:' + asset.fields.file.url,
                };
                // Check if this awardee already exists by matching the title
                if (!acc.awardees.some((a) => a.title === awardee.title && a.url === awardee.url)) {
                  acc.awardees.push(awardee);
                }
              });
            }
  
            // Check if performances exists and is an array
            if (fields.performances && Array.isArray(fields.performances)) {
              fields.performances.forEach((asset) => {
                const performance = {
                  title: asset.fields.title || '',
                  url: 'https:' + asset.fields.file.url,
                };
                // Check if this performance already exists by matching the title
                if (!acc.performances.some((p) => p.title === performance.title && p.url === performance.url)) {
                  acc.performances.push(performance);
                }
              });
            }
  
            // Check if gallery exists and is an array
            if (fields.yearlyGallery && Array.isArray(fields.yearlyGallery)) {
              fields.yearlyGallery.forEach((asset) => {
                const galleryImage = {
                  title: asset.fields.title || '',
                  url: 'https:' + asset.fields.file.url,
                };
                // Check if this gallery image already exists by matching the title
                if (!acc.gallery.some((g) => g.title === galleryImage.title && g.url === galleryImage.url)) {
                  acc.gallery.push(galleryImage);
                }
              });
            }
  
            return acc;
          },
          {
            tags: [],
            awardees: [],
            performances: [],
            gallery: [],
          }
        );
  
        return mergedData;
      } else {
        console.log('No gallery entries found.');
        return {
          tags: [],
          awardees: [],
          performances: [],
          gallery: [],
        };
      }
    } catch (error) {
      console.error('Error fetching gallery page data:', error);
      return {
        tags: [],
        awardees: [],
        performances: [],
        gallery: [],
      };
    }
  };


  export const fetchMissionStatement = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'website', // Replace with your content type ID
        limit: 1, // Assuming one entry exists
      });
  
      if (entries.items.length > 0) {
        const aboutPage = entries.items[0].fields;
  
        // Return only the mission statement
        return { missionStatement: aboutPage.missionStatement || '' };
      } else {
        console.log('No About Page found.');
        return { missionStatement: '' };
      }
    } catch (error) {
      console.log('Error fetching mission statement:', error);
      return { missionStatement: '' };
    }
  };

  export const fetchGalleryPageForHome = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'gallery', // Specify the content type
      });
  
      if (entries.items.length > 0) {
        const mergedData = entries.items.reduce(
          (acc, item) => {
            const fields = item.fields;
  
            // Check if yearlyGallery exists and is an array
            if (fields.yearlyGallery && Array.isArray(fields.yearlyGallery)) {
              fields.yearlyGallery.forEach((asset) => {
                const tag = asset.fields.title || 'Unknown Year';
                if (!acc.tags.includes(tag)) {
                  acc.tags.push(tag);
                }
              });
            }
  
            // Check if awardees exists and is an array
            if (fields.awardees && Array.isArray(fields.awardees)) {
              fields.awardees.forEach((asset) => {
                const awardee = {
                  title: asset.fields.title || '',
                  url: 'https:' + asset.fields.file.url,
                };
                if (
                  !acc.awardees.some(
                    (a) => a.title === awardee.title && a.url === awardee.url
                  )
                ) {
                  acc.awardees.push(awardee);
                }
              });
            }
  
            // Check if performances exists and is an array
            if (fields.performances && Array.isArray(fields.performances)) {
              fields.performances.forEach((asset) => {
                const performance = {
                  title: asset.fields.title || '',
                  url: 'https:' + asset.fields.file.url,
                };
                if (
                  !acc.performances.some(
                    (p) => p.title === performance.title && p.url === performance.url
                  )
                ) {
                  acc.performances.push(performance);
                }
              });
            }
  
            // Check if gallery exists and is an array
            if (fields.yearlyGallery && Array.isArray(fields.yearlyGallery)) {
              fields.yearlyGallery.forEach((asset) => {
                const galleryImage = {
                  title: asset.fields.title || '',
                  url: 'https:' + asset.fields.file.url,
                };
                if (
                  !acc.gallery.some(
                    (g) => g.title === galleryImage.title && g.url === galleryImage.url
                  )
                ) {
                  acc.gallery.push(galleryImage);
                }
              });
            }
  
            return acc;
          },
          {
            tags: [],
            awardees: [],
            performances: [],
            gallery: [],
          }
        );
  
        // Limit the arrays to a maximum of 3 items each
        return {
          tags: mergedData.tags.slice(0, 3),
          awardees: mergedData.awardees.slice(0, 3),
          performances: mergedData.performances.slice(0, 3),
          gallery: mergedData.gallery.slice(0, 5),
        };
      } else {
        console.log('No gallery entries found.');
        return {
          tags: [],
          awardees: [],
          performances: [],
          gallery: [],
        };
      }
    } catch (error) {
      console.error('Error fetching gallery page data:', error);
      return {
        tags: [],
        awardees: [],
        performances: [],
        gallery: [],
      };
    }
  };
  

  export const fetchEventTimelines = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'eventTImeline', // Replace with your event timeline content type ID
        order: '-fields.date', // Order by date (descending)
      });
  
      if (entries.items.length > 0) {
        return entries.items.map((item) => ({
          date: item.fields.date,
          title: item.fields.title,
          description: item.fields.description,
        }));
      } else {
        console.log('No event timelines found.');
        return [];
      }
    } catch (error) {
      console.error('Error fetching event timelines:', error);
      return [];
    }
  };



  export const fetchExpectations = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'expectation', // Replace with your expectation content type ID
      });
  
      if (entries.items.length > 0) {
        return entries.items.map((item) => ({
          expectation: item.fields.expectation,
        }));
      } else {
        console.log('No expectations found.');
        return [];
      }
    } catch (error) {
      console.error('Error fetching expectations:', error);
      return [];
    }
  };


  export const fetchKeyActivities = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'keyActivities', // Replace with your key activities content type ID
      });
  
      if (entries.items.length > 0) {
        return entries.items.map((item) => ({
          activity: item.fields.activity,
        }));
      } else {
        console.log('No key activities found.');
        return [];
      }
    } catch (error) {
      console.error('Error fetching key activities:', error);
      return [];
    }
  };