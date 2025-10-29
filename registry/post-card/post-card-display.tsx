import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemMedia,
  ItemActions,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { Post } from "../client/types/posts";
import { ExternalLink } from "lucide-react";

type PostCardDisplayProps = {
  post: Post;
};

export default function PostCardDisplay(props: PostCardDisplayProps) {
  const post = props.post;
  return (
    <Item variant="default">
      {post.cover_image && (
        <ItemMedia variant="image">
          <img src={post.cover_image} alt={post.title} width={200} />
        </ItemMedia>
      )}
      <ItemContent className="gap-1.5">
        <ItemTitle>{props.post.title}</ItemTitle>
        <ItemDescription>{props.post.subtitle}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" asChild>
          <a href={post.canonical_url} target="_blank" rel="noreferrer">
            <ExternalLink className="w-4 h-4" />
            </a>
        </Button>
      </ItemActions>
    </Item>
  );
}
