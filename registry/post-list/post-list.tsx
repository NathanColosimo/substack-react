import PostCardDisplay from "../post-card/post-card-display";
import { ItemGroup, ItemSeparator } from "@/components/ui/item";
import React from "react";
import { SubstackProfile } from "../client/types/profile";
import { profileForHandle } from "../client/profile";
import { userPostsForId } from "../client/posts";

type PostListProps = {
  profileHandle: string;
};

export default async function PostList(props: PostListProps) {
  const profile = await profileForHandle(props.profileHandle);

  const postList = await userPostsForId(profile.id, { limit: 10 });

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup>
        {postList.posts.map((post, index) => {
          return (
            <React.Fragment key={post.id}>
              <PostCardDisplay post={post} />
              {index !== postList.posts.length - 1 && <ItemSeparator className="my-4" />}
            </React.Fragment>
          );
        })}
      </ItemGroup>
    </div>
  );
}
