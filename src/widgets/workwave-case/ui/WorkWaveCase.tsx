"use client";
import {
  CaseLineSidebar,
} from "@/features/project-navigation";
import { WorkWaveHero } from "./sections/WorkWaveHero";
import { WorkWaveAboutCompany } from "./sections/WorkWaveAboutCompany";
import { WorkWaveTask } from "./sections/WorkWaveTask";
import { WorkWaveEmployer } from "./sections/WorkWaveEmployer";
import { WorkWaveProblem } from "./sections/WorkWaveProblem";
import { WorkWaveRoles } from "./sections/WorkWaveRoles";
import { WorkWaveGeosearch } from "./sections/WorkWaveGeosearch";
import { WorkWaveIneternship } from "./sections/WorkWaveInternship";
import { WorkWaveStates } from "./sections/WorkWaveStates";
import { WorkEdgeCases } from "./sections/WorkWaveEdgeCases";
import { WorkWaveHandoff } from "./sections/WorkWaveHandoff";
import { WorkWaveResult } from "./sections/WorkWaveResult";
import { WorkWaveNextCase } from "./sections/WorkWaveNextCase";
import { FinalCtaCase } from "@/widgets/final-cta";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Header } from "@/widgets/header";

const navigationItems = [
  {
    id: "about",
    label: "О компании",
  },
  {
    id: "task",
    label: "Задача",
  },
  {
    id: "team",
    label: "Команда",
  },
  {
    id: "problem",
    label: "Проблема",
  },
  {
    id: "roles",
    label: "Две роли",
  },
  {
    id: "geosearch",
    label: "Геопоиск",
  },
  {
    id: "internships",
    label: "Стажировки",
  },
  {
    id: "states",
    label: "Состояния",
  },
  {
    id: "edge-cases",
    label: "Edge cases",
  },
  {
    id: "handoff",
    label: "Handoff",
  },
  {
    id: "result",
    label: "Результат",
  },
];

export function WorkWaveCase() {
  return (
    <>
      <CaseLineSidebar
        items={navigationItems}
        startId="case-sidebar-start"
      />

      <main className="">
        <Header/>
        <WorkWaveHero/>
        <div
          id="case-sidebar-start"
          className="h-px"
          aria-hidden="true"
        />

        {/* ============================================
            ОТСЮДА SIDEBAR ПОЯВЛЯЕТСЯ
        ============================================ */}
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkWaveAboutCompany id="about"/>  
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >  
          <WorkWaveTask id="task"/>
        </AnimationOnScroll>
        
        <div className="bg-[#EDEFFE]">
          <AnimationOnScroll
            animateIn="animate__slideInUp"
            animateOnce
          >
            <WorkWaveEmployer id="team"/>
          </AnimationOnScroll>
        </div>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkWaveProblem id="problem"/>
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkWaveRoles id="roles"/>
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkWaveGeosearch id="geosearch"/>
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkWaveIneternship id="internships"/>
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkWaveStates id="states"/> 
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkEdgeCases id="edge-cases"/>
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <WorkWaveHandoff id="handoff"/>
        </AnimationOnScroll>
        
        <div className="bg-[#EDEFFE]">
          <AnimationOnScroll
            animateIn="animate__slideInUp"
            animateOnce
          >
            <WorkWaveResult id="result"/>
          </AnimationOnScroll>
        </div>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        > 
          <FinalCtaCase/>
        </AnimationOnScroll>
      </main>
    </>
  );
}