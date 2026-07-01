import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPapers(): Promise<CollectionEntry<'papers'>[]> {
  try {
    return await getCollection('papers');
  } catch {
    return [];
  }
}
