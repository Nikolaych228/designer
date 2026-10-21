import type { ReactNode } from "react";
import type { ProjectSlug } from "@/entities/project";
import { Button } from "@/shared/ui/button";

type ArrowPosition = "left" | "right" | "both";

interface ProjectNavigationProps {
  slug: ProjectSlug;
  children: ReactNode;
  arrow?: ArrowPosition | false;
  className?: string;
}

export function ProjectNavigation({ 
  slug,
  children,
  arrow = false,
  className,
}: ProjectNavigationProps) {
  return (
    <Button
      // Убрали /designer, добавили слеш в конце
      href={`/projects/${slug}/`} 
      arrow={arrow}
      className={className}
    >
      {children}
    </Button>
  );
}