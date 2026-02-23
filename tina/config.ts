import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          // This allows the client to click a document and see the visual preview
          router: () => "/", 
        },
        fields: [
          { 
            type: "string", 
            name: "heroTitle", 
            label: "Hero Title",
            ui: { description: "The large welcoming text over the main image." }
          },
          { 
            type: "string", 
            name: "heroSubtitle", 
            label: "Hero Subtitle",
            ui: { description: "The smaller, atmospheric text beneath the main title." }
          },
          { 
            type: "image", 
            name: "heroImage", 
            label: "Hero Background Image" 
          },
          { 
            type: "string", 
            name: "aboutTitle", 
            label: "About Section Title" 
          },
          { 
            type: "string", 
            name: "aboutText", 
            label: "About Section Text", 
            ui: { component: "textarea", description: "The main story and ethos of the lodge." } 
          },
          { 
            type: "image", 
            name: "aboutImage", 
            label: "About Section Image" 
          },
          {
            type: "object",
            list: true,
            name: "retreats",
            label: "Ways to Gather (Retreat Options)",
            ui: {
              description: "Add, remove, or edit the different types of stays you offer.",
              // This makes the CMS list show the actual retreat title instead of 'Item 1', 'Item 2'
              itemProps: (item) => {
                return { label: item?.title || "New Retreat Option" };
              },
            },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
            ],
          },
          { 
            type: "image", 
            name: "gallery", 
            label: "Atmosphere Gallery", 
            list: true,
            ui: { description: "Upload the atmospheric photos here. They will automatically arrange into the masonry layout." }
          },
          { 
            type: "string", 
            name: "contactEmail", 
            label: "Contact Email",
            ui: { description: "The email address where reservation inquiries will be sent." }
          },
        ],
      },
    ],
  },
});