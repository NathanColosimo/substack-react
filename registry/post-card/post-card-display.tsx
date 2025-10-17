import { FullPost } from "substack-api";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemMedia,
  ItemActions,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";

type PostCardDisplayProps = {
  post: FullPost;
};

export default function PostCardDisplay(props: PostCardDisplayProps) {
  const post = props.post;
  console.log(post);
  return (
    <Item variant="default">
      {post.coverImage && (
        <ItemMedia variant="image">
          <img src={post.coverImage} alt={post.title} width={200} />
        </ItemMedia>
      )}
      <ItemContent className="gap-1.5">
        <ItemTitle>{props.post.title}</ItemTitle>
        <ItemDescription>{props.post.subtitle}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline">Action</Button>
      </ItemActions>
    </Item>
  );
}
