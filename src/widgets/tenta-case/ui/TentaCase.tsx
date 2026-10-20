"use client";
import {
  CaseLineSidebar,
} from "@/features/project-navigation";
import { FinalCtaCase } from "@/widgets/final-cta";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { TentaHero } from "./section/TentaHero";
import { TentaAboutCompany } from "./section/TentaAboutCompany";
import { TentaContext } from "./section/TentaContext";
import { TentaTask } from "./section/TentaTask";
import { TentaFeedBack } from "./section/TentaFeedback";
import { TentaBeforeAfter } from "./section/TentaBefore-after";
import { TentaArchitecture } from "./section/TentaArchitecture";
import { TentaScenarios } from "./section/TentaScenarios";
import { TentaDecision } from "./section/TentaDecision";
import { TentaTerminal } from "./section/TentaTerminal";
import { TentaResult } from "./section/TentaResult";
import { TentaOutsideInterface } from "./section/TentaOutsideInterface";
import { TentaNextCase } from "./section/TentaNextCase";
import { TentaUnpleasant } from "./section/TentaUnpleasant";
import { Header } from "@/widgets/header";

const navigationItems = [
  {
    id: "about",
    label: "О компании",
  },
  {
    id: "context",
    label: "Контекст",
  },
  {
    id: "task",
    label: "Задача",
  },
  {
    id: "feedback",
    label: "Фидбек",
  },
  {
    id: "before/after",
    label: "До/после",
  },
  {
    id: "architecture",
    label: "Архитектура",
  },
  {
    id: "scenarios",
    label: "Сценарии",
  },
  {
    id: "decision",
    label: "Решение",
  },
  {
    id: "unpleasant",
    label: "Непринятая концепция",
  },
  {
    id: "terminal",
    label: "Терминал",
  },
  {
    id: "result",
    label: "Результат",
  },
  {
    id: "outsideInterface",
    label: "Вне интерфейса",
  },
];

export function TentaCase() {
  return (
    <>
      <CaseLineSidebar
        items={navigationItems}
        startId="case-sidebar-start" 
      />

      <main className="">
        <Header/>
        <TentaHero/>
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
          <TentaAboutCompany id="about"/>  
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <TentaContext id="context"/>  
        </AnimationOnScroll>
        
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <TentaTask id="task"/>  
        </AnimationOnScroll>
        <div className="bg-[#EDEFFE]">
            <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce
            >
                <TentaFeedBack id="feedback"/>  
            </AnimationOnScroll>
            <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce
            >
                <TentaBeforeAfter id="before/after"/>  
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <TentaArchitecture id="architecture"/>  
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <TentaScenarios id="scenarios"/>  
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <TentaDecision id="decision"/>  
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce
        >
          <TentaUnpleasant id="unpleasant"/>  
        </AnimationOnScroll>

        <AnimationOnScroll
            animateIn="animate__slideInUp"
            animateOnce
        >
            <TentaTerminal id="terminal"/>  
        </AnimationOnScroll>
        
        <div className="bg-[#EDEFFE]">
            <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce
            >
                <TentaResult id="result"/>  
            </AnimationOnScroll>
        </div>
        
        <AnimationOnScroll
            animateIn="animate__slideInUp"
            animateOnce
        >
            <TentaOutsideInterface id="outsideInterface"/>  
        </AnimationOnScroll>
        
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