import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z
      .enum(["getting-started", "components", "hooks", "guides"])
      .optional(),
    componentType: z
      .enum([
        "layout",
        "forms",
        "navigation",
        "data-display",
        "feedback",
        "overlays",
      ])
      .optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  docs,
};
