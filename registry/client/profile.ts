import { SubstackProfileSchema } from "./types/profile";

export async function profileForHandle(handle: string) {
  const response = await fetch(`https://substack.com/api/v1/user/${handle}/public_profile`);
  const data = await response.json();
  return SubstackProfileSchema.parse(data);
}