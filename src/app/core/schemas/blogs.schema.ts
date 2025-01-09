import { z } from 'zod';

// Schema for a single blog entry on the overview page.
// For the overview, certain attributes are simplified (for example the comments field is just the number of comments and not the comments themselves).
export const BlogOverviewEntrySchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  comments: z.number(),
  likes: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  headerImageUrl: z.string().optional(),
});

// Schema for the overview page.
// Contains blog entries and pagination data
export const BlogOverviewPageSchema = z.object({
  data: z.array(BlogOverviewEntrySchema),
  maxPageSize: z.number(),
  pageIndex: z.number(),
  pageSize: z.number(),
  totalCound: z.number(),
});

// Infer TS Types from zod schema
export type BlogOverviewPage = z.infer<typeof BlogOverviewPageSchema>;
export type BlogOverviewEntry = z.infer<typeof BlogOverviewEntrySchema>;
