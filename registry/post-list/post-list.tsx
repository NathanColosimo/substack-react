import client from "@/registry/client/client";
import { FullPost, Profile } from "substack-api";
import PostCardDisplay from "../post-card/post-card-display";
import { ItemGroup, ItemSeparator } from "@/components/ui/item";
import React from "react";

type PostListProps = {
  profileId?: number;
  profileSlug?: string;
};

export default async function PostList(props: PostListProps) {
  let profile: Profile;
  if (props.profileId) {
    profile = await client.profileForId(props.profileId);
    console.log(profile);
  } else if (props.profileSlug) {
    profile = await client.profileForSlug(props.profileSlug);
    console.log(profile);
  } else {
    return null;
  }

  const postList = profile.posts();
  const fullPostPromises: Promise<FullPost>[] = [];
  for await (const post of postList) {
    fullPostPromises.push(post.fullPost());
  }

  const fullPosts = await Promise.all(fullPostPromises);
  console.log(fullPosts);

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup>
        {fullPosts.map((fullPost, index) => {
          return (
            <React.Fragment key={fullPost.id}>
              <PostCardDisplay post={fullPost} />
              {index !== fullPosts.length - 1 && <ItemSeparator className="my-4" />}
            </React.Fragment>
          );
        })}
      </ItemGroup>
    </div>
  );
}
