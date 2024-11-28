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


export  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Collect form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    // Create fields object for Contentful
    const fields = {
      name: {
        'en-US': name,
      },
      email: {
        'en-US': email,
      },
      message: {
        'en-US': message,
      },
    };
  
    try {
      // Create a new entry in Contentful
      await createEntry('contact', fields);
  
      // Show success toast
      toast.success('Your message has been sent!');
    } catch (error) {
      // Show error toast
      toast.error('Failed to send your message. Please try again later.');
    }
  };