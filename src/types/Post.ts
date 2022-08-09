import { ReadTimeResults } from 'reading-time';

export type BlogContent = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  title: string;
  description: string;
  headerImg: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  category?: string;
};

export type ContentType = 'blog' | 'snippets' | 'projects';

export type PickContent<T extends ContentType> = T extends 'blog'
  ? BlogContent
  : T extends 'snippets'
  ? SnippetContent
  : ProjectContent;

export type InjectedMeta = { views?: number; likes?: number };

export type BlogType = {
  code: string;
  meta: BlogContent;
};

export type SnippetContent = {
  slug: string;
  title: string;
  readingTime: ReadTimeResults;
  description: string;
  tags: string;
};

export type SnippetType = {
  code: string;
  meta: SnippetContent;
};

export type ProjectContent = {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  techs: string;
  headerImg: string;
  link?: string;
  github?: string;
  youtube?: string;
  wordCount: number;
  readingTime: ReadTimeResults;
  tags: string;
  blog?: string;
};

export type ProjectType = {
  code: string;
  meta: ProjectContent;
};

export type ContentWithTags = BlogContent | SnippetContent;
export type ContentWithDate = BlogContent | ProjectContent;
export type Content = ProjectContent | BlogContent | SnippetContent;
