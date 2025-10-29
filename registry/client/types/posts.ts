import z from "zod";
import { PublicationSchema } from "./profile";

const audioItem = z.object({
  post_id: z.number(),
  voice_id: z.string(),
  audio_url: z.url().nullable(),
  type: z.string(),
  duration: z.number().optional()
})

/**
 * Raw API response shape for posts
 */
export const PostSchema = z.object({
  id: z.number(),
  publication_id: z.number(),
  title: z.string(),
  slug: z.string(),
  post_date: z.string(),
  canonical_url: z.string(),
  type: z.union([
    z.literal("newsletter"),
    z.literal("podcast"),
    z.literal("thread"),
  ]),
  subtitle: z.string().nullable().optional(),
  cover_image: z.string().nullable().optional(),
  description: z.string(),
  truncated_body_text: z.string().nullable().optional(),
  reaction_count: z.number(),
  comment_count: z.number(),
  audio_items: z.array(audioItem).optional()
});

export type Post = z.infer<typeof PostSchema>;

export const PostResponseSchema = z.object({
    post: PostSchema,
    publication: PublicationSchema
})

export const UserPostListSchema = z.object({
    posts: z.array(PostSchema)
});

export const PublicationPostListSchema = z.array(PostSchema);