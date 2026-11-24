import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "aiojzq85",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: false,
});
export async function sanityFetch({ query }: { query: string }) {
  const data = await client.fetch(query)
  return { data }
}