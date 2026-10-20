import type {
  Project,
  ProjectSlug,
} from "./types";

export const projects: Record<
  ProjectSlug,
  Project
> = {
  workwave: {
    slug: "workwave",
    title: "WorkWave",
    description:
      "UX/UI-кейс мобильного продукта для соискателей и работодателей",
  },

  tenta: {
    slug: "tenta",
    title: "Tenta",
    description:
      "UX/UI-кейс сложной системы мониторинга",
  },

  excursions: {
    slug: "excursions",
    title: "Excursions",
    description:
      "UX/UI-кейс мобильного приложения для городских маршрутов",
  },
};

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects[
    slug as ProjectSlug
  ];
}