import { profileForHandle } from "../client/profile"
import { ProfileDisplay } from "./profile-display";

type ProfileProps = {
    handle: string
}

export async function Profile(props: ProfileProps) {
    const profile = await profileForHandle(props.handle);
    return <ProfileDisplay profile={profile}></ProfileDisplay>
}