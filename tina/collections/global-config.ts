import type { Collection } from "tinacms";
import IconComponent from "../components/IconComponent";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "seo",
      label: "SEO",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Site title for SEO",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Site description for SEO",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "footer",
      label: "Footer",
      type: "object",
      fields: [
        {
          name: "siteOwner",
          label: "Your Name, Company Name (Used in the footer)",
          required: true,
          type: "string",
          ui: {
            defaultValue: "Your name here",
          },
        },
        {
          name: "content",
          label: "Footer Content",
          required: true,
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "certificateContent",
          label: "WBE Certificate Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "certificateImage",
          label: "WBE Certificate Image",
        },
        {
          type: "string",
          name: "email",
          label: "Email",
        },
        {
          type: "string",
          name: "phone",
          label: "Phone",
        },
      ],
    },
    {
      name: "nav",
      label: "Site Navigation Menu",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title of Nav Item",
          type: "string",
          required: true,
        },
        {
          name: "link",
          label: "Path of the Nav Item",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "contactLinks",
      label: "Contact Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "icon",
          label: "Icon",
          type: "string",
          ui: {
            //@ts-ignore
            component: IconComponent,
          },
        },
      ],
    },
    {
      name: "customCSS",
      label: "Custom CSS",
      type: "string",
      ui: {
        component: "textarea",
      },
    },

    // Add other config fields here...
  ],
};
