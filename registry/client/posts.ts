import { UserPostListSchema, UserPostList, Post, PostSchema, PostResponseSchema, PublicationPostList, PublicationPostListSchema } from "./types/posts";
import { z } from "zod";

export async function userPostsForId(id: number, opts?: {
    offset?: number,
    limit?: number
}): Promise<UserPostList> {
    const offset = opts?.offset ? `&offset=${opts?.offset}` : "";
    const limit = opts?.limit ? `&limit=${opts.limit}` : "";
    const response = await fetch(`https://substack.com/api/v1/profile/posts?profile_user_id=${id}${offset}${limit}`);
    const data = await response.json();
    return UserPostListSchema.parse(data);
}

export async function postForId(id: number): Promise<Post> {
    const response = await fetch(`https://substack.com/api/v1/posts/by-id/${id}`);
    const data = await response.json();
    console.log(data);
    return PostResponseSchema.parse(data).post;
}

export async function publicationPostsForURL(url: string, opts?: {
    sort?: "new" | "top",
    offset?: number,
    limit?: number
}): Promise<PublicationPostList> {
    const urlParsed = z.url().safeParse(url);
    if (!urlParsed.success) {
        throw new Error("Invalid URL");
    }

    const sort = opts?.sort ? `${opts?.sort}` : "new";
    const offset = opts?.offset ? `&offset=${opts?.offset}` : "";
    const limit = opts?.limit ? `&limit=${opts.limit}` : "";

    if (opts?.limit && (opts?.limit > 50 || opts?.limit < 1)) {
        throw new Error("Limit must be between 1 and 50");
    }
    const response = await fetch(`${urlParsed.data}/api/v1/archive?sort=${sort}${offset}${limit}`);
    const data = await response.json();
    console.log(data);
    return PublicationPostListSchema.parse(data);
}

const res = await publicationPostsForURL("https://letters.thedankoe.com", { sort: "top", offset: 1, limit: 1})
console.log(res.length)