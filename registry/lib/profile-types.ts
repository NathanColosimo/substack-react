import { z } from "zod";

const Author = z.object({
  id: z.number(),
  name: z.string(),
  handle: z.string(),
  previous_name: z.string().nullable(),
  photo_url: z.string().nullable().optional(),
  bio: z.string().nullable(),
});

const UserLink = z.object({
  id: z.number().optional(),
  value: z.string(),
  url: z.url(),
  type: z.string().nullable(),
  label: z.string().nullable(),
});

export const PublicationSchema = z.object({
  id: z.number(),
  subdomain: z.string(),
  custom_domain: z.preprocess((val) => {
    if (typeof val === "string") {
      if (val.startsWith("http")) {
        return val;
      } else {
        return`https://${val}/`;
      }
    }
    return val;
    },
    z.url()
  ).nullish(),
  name: z.string(),
  logo_url: z.string().nullish(),
  author_id: z.number(),
});

export const PublicationWithAuthorSchema = PublicationSchema.extend({
  author: Author,
});

const PublicationUser = z.object({
  id: z.number(),
  user_id: z.number(),
  publication_id: z.number(),
  role: z.string(),
  public: z.boolean(),
  is_primary: z.boolean(),
  publication: PublicationWithAuthorSchema,
});

const leaderboardRanking = z.object({
    category_name: z.string(),
    category_id: z.number(),
    rank: z.number(),
    ranking: z.string(),
    publication_id: z.number(),
});

const coverImage = z.object({
  url: z.url(),
  width: z.number(),
  height: z.number(),
});

const theme = z.object({
  cover_image: coverImage,
})

export const ProfileSchema = z.object({
  publicationUsers: z.array(PublicationUser),
  userLinks: z.array(UserLink),
  primaryPublication: PublicationSchema,
  subscriberCount: z.string(),
  subscriberCountNumber: z.number(),
  leaderboardRanking: leaderboardRanking.optional(),
  subdomainUrl: z.url().nullable(),
  theme: theme.optional(),
}).extend(
  Author.shape,
);

export type Profile = z.infer<typeof ProfileSchema>;