"use client";

import { useIsMobile } from "@/lib/useIsMobile";
import { About } from "@/widgets/about";
import { Approach } from "@/widgets/approach";
import { Benefits } from "@/widgets/benefits";
import { FinalCta } from "@/widgets/final-cta";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { MobileStub } from "@/widgets/mobile-stub";
import { MoreProjects } from "@/widgets/more-projects";
import { Process } from "@/widgets/process";
import { ProjectSection } from "@/widgets/project-section";

export default function HomePage() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileStub />;
  }
  return (
    <main>
      <Header/>
      <Hero/>
      <Approach/>
      <ProjectSection/>
      <MoreProjects/>
      <Process/>
      <Benefits/>
      <About/>
      <FinalCta/>
    </main>
  );
}