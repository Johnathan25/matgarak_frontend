// website-builder/templates/templateRegistry.js
import { template1 } from "./template2/index";
import { template2 } from "./template1/index";
import { template3 } from "./template3_clothes/index";
import { template4 } from "./template3_book/index";
import { template5 } from "./template3_electronics/index";

import { template6 } from "./template3_medical/index";
import { template7 } from "./template3_sports/index";
import { template8} from "./template3_food/index";
import { template9} from "./template3_car/index";
import { template10} from "./template3_watches/index";
import { template11} from "./template3_perfume/index";









export const TEMPLATES = {
  1: template1,
  2: template2,
  3: template3,
  4: template4,
  5: template5,
  6: template6,
  7: template7,
  8: template8,
  9: template9,
  10: template10,
  11:template11,








};

export const getTemplate = (id) => TEMPLATES[Number(id)] || null;

export const getAllTemplates = () => Object.values(TEMPLATES);

export const buildSettingsFromTemplate = (templateID) => {
  const template = getTemplate(templateID);
  if (!template) throw new Error(`Template not found: ${templateID}`);

  return {
    templateID: template.id,

    website: {
      title: "",
      description: "",
      favicon: { url: "", publicId: "" },
      logo: { url: "", publicId: "" },
      image: { url: "", publicId: "" },
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        whatsapp: "",
        tiktok: "",
      },
    },

    theme: structuredClone(template.theme),

    pages: [
      {
        id: "home",
        name: "الرئيسية",
        slug: "",
        pageType: "home",
        order: 0,
        visible: true,
        sections: structuredClone(template.sections),
      },
    ],

    status: "draft",
  };
};