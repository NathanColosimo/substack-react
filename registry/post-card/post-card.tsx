import client from "@/registry/client/client";
import PostCardDisplay from "./post-card-display";

type PostCardProps = {
  postId: number;
};

export default async function PostCard(props: PostCardProps) {
  const post = await client.postForId(props.postId);
  return <PostCardDisplay post={post} />;
}
