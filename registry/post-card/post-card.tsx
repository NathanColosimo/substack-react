import PostCardDisplay from "./post-card-display";
import { postForId } from "../client/posts";

type PostCardProps = {
  postId: number;
};

export default async function PostCard(props: PostCardProps) {
  const post = await postForId(props.postId);
  return <PostCardDisplay post={post} />;
}
