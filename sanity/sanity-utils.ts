import { createClient, groq } from "next-sanity";
import { Tesla } from "@/types/Tesla";

export async function getTeslas(): Promise<Tesla[]> {
  const client = createClient({
    projectId: "jyvylvgo",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-08-26",
  });

  return client.fetch(
    groq`*[_type == "tesla"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  );
}
