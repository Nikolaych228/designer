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
        return <TentaCase/>;
    /*
    Потом просто добавим:


    case "excursions":
      return <ExcursionsCase />;
    */

    default:
      notFound();
  }
}