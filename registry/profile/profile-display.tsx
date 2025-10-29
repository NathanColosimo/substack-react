import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { Profile } from "../client/types/profile";
import { ExternalLink } from "lucide-react";

type ProfileDisplayProps = {
  profile: Profile;
};

export function ProfileDisplay(props: ProfileDisplayProps) {
  const profile = props.profile;
  const coverImageURL = profile.theme?.cover_image.url;
  return (
    <Item variant="default">
      {coverImageURL && (
        <ItemHeader>
          <img src={coverImageURL} alt={`${profile.name} cover image`} className="rounded-md"/>
        </ItemHeader>
      )}
      {profile.photo_url && (
        <ItemMedia variant="image">
          <img src={profile.photo_url} alt={profile.name} width={200} />
        </ItemMedia>
      )}
      <ItemContent className="gap-1.5">
        <ItemTitle>{profile.name}</ItemTitle>
        <ItemDescription>{profile.bio}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" asChild>
          <a
            href={`https://substack.com/@${profile.handle}`}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </ItemActions>
    </Item>
  );
}
