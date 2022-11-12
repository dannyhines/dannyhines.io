import { BlogContent } from '@/types/Post';

export function sortDateFn<T extends BlogContent>(contentA: T, contentB: T) {
  return (
    new Date(contentB.lastUpdated ?? contentB.publishedAt).valueOf() -
    new Date(contentA.lastUpdated ?? contentA.publishedAt).valueOf()
  );
}

export function sortByDate<T extends BlogContent>(contents: Array<T>) {
  return contents.sort(sortDateFn);
}
