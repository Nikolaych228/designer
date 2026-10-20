export type ProjectSlug =
  | "workwave"
  | "tenta"
  | "excursions";

export interface Project {
  slug: ProjectSlug;
  title: string;
  description: string;
}