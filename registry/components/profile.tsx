import { profileForHandle } from "@/lib/profile"
import ProfileDisplay from "@/components/profile-display";

type ProfileProps = {
    handle: string
}

export default async function Profile(props: ProfileProps) {
    const profile = await profileForHandle(props.handle);
    return <ProfileDisplay profile={profile}></ProfileDisplay>
}