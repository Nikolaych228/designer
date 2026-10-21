import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import {
  getProjectBySlug,
} from "@/entities/project";

import {
  WorkWaveCase,
} from "@/widgets/workwave-case";
import { TentaCase } from "@/widgets/tenta-case/ui/TentaCase";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. ДОБАВЛЯЕМ ЭТУ ФУНКЦИЮ
// Она говорит Next.js: "При сборке сгенерируй страницы только для этих слагов"
export async function generateStaticParams() {
  return [
    { slug: "workwave" },
    { slug: "tenta" },
  ];
}

// 2. ДОБАВЛЯЕМ ЭТУ КОНСТАНТУ (рекомендуется)
// Если пользователь введет несуществующий slug, Next.js сразу отдаст 404, 
// а не будет пытаться сгенерировать страницу "на лету" (что запрещено при статическом экспорте)
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project =
    getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — UX/UI Case`,
    description:
      project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project =
    getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  switch (project.slug) {
    case "workwave":
      return <WorkWaveCase />;

    case "tenta":
      return <TentaCase />;

    default:
      notFound();
  }
}