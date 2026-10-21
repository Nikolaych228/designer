"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn, imgPath } from "@/lib/utils"; // 👈 Добавили imgPath
import { ProjectNavigation } from "@/features/project-navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECT_1 = "/images/projects/project-01";
const PROJECT_2 = "/images/projects/project-02";

const INJECTED_STYLES = `
  .projects-cinematic-bg {
    background:
      radial-gradient(
        circle at 10% 50%,
        rgba(83, 64, 220, 0.42) 0%,
        rgba(53, 39, 145, 0.28) 28%,
        rgba(15, 13, 42, 0) 63%
      ),
      linear-gradient(
        90deg,
        #17133F 0%,
        #11102B 42%,
        #080917 100%
      );
  }

  .projects-main-card {
    transform-style: preserve-3d;
    will-change: transform, width, height, border-radius;
  }

  .project-scene {
    will-change: transform, opacity, filter;
  }

  .project-mockup-stage {
    transform-style: preserve-3d;
    perspective: 1400px;
  }

  .project-device-stage {
    transform-style: preserve-3d;
    will-change: transform;
  }

  .project-piece {
    user-select: none;
    pointer-events: none;
    will-change: transform, opacity, filter;
  }

  .projects-glow-line {
    background: #6862FF;
    box-shadow:
      0 0 8px rgba(104, 98, 255, 0.9),
      0 0 20px rgba(104, 98, 255, 0.45);
  }
`;

interface ProjectsCinematicShowcaseProps
  extends React.HTMLAttributes<HTMLElement> {}

/* =========================================================
   CASE 1
========================================================= */

function Case1() {
  return (
    <div data-copy className="relative z-40 w-full max-w-[820px] min-w-0">
      <div className="mb-4 xl:mb-6 flex flex-wrap gap-2">
        <div className="rounded-full bg-[#161C46] px-3 xl:px-4 py-1.5 xl:py-2">
          <p className="text-[12px] xl:text-[14px] text-[#A2A4B6]">
            Кейс №1
          </p>
        </div>
        <div className="rounded-full bg-[#181E4C] px-3 py-1.5 xl:py-2 text-[12px] xl:text-[14px] text-[#A3A5B7]">
          <p>Industrial software</p>
        </div>
        <div className="rounded-full bg-[#181E4C] px-3 py-1.5 xl:py-2 text-[12px] xl:text-[14px] text-[#A3A5B7]">
          <p>Legacy redesign</p>
        </div>
      </div>

      <p className="text-[24px] leading-[30px] xl:text-[32px] xl:leading-[38px] font-semibold text-white">
        Критические состояния подняла<br className="hidden xl:block"/>с уровня датчика до уровня объекта
      </p>

      <p className="mt-3 xl:mt-4 max-w-[664px] text-[14px] xl:text-[16px] text-[#BABDCD]">
        Перестроила структуру промышленного мониторинга. Проблема стала видна до перехода в конкретное оборудование
      </p>

      <ProjectNavigation
        slug="tenta"
        arrow="right"
        className="mt-6"
      >
        Смотреть кейс
      </ProjectNavigation>
    </div>
  );
}

/* =========================================================
   CASE 2
========================================================= */

function Case2() {
  return (
    <div data-copy className="relative z-40 w-full max-w-[820px] min-w-0">
      <div className="mb-4 xl:mb-6 flex flex-wrap gap-2">
        <div className="rounded-full bg-[#161C46] px-3 xl:px-4 py-1.5 xl:py-2">
          <p className="text-[12px] xl:text-[14px] text-[#A2A4B6]">
            Кейс №2
          </p>
        </div>
        <div className="rounded-full bg-[#181E4C] px-3 py-1.5 xl:py-2 text-[12px] xl:text-[14px] text-[#A3A5B7]">
          <p>B2C + B2B</p>
        </div>
        <div className="rounded-full bg-[#181E4C] px-3 py-1.5 xl:py-2 text-[12px] xl:text-[14px] text-[#A3A5B7]">
          <p>Released MVP</p>
        </div>
        <div className="rounded-full bg-[#181E4C] px-3 py-1.5 xl:py-2 text-[12px] xl:text-[14px] text-[#A3A5B7]">
          <p>2 roles</p>
        </div>
      </div>

      <p className="text-[24px] leading-[30px] xl:text-[32px] xl:leading-[38px] font-semibold text-white">
        Из десяти ключевых экранов собрала
        <br />
        MVP для двух ролей
      </p>

      <p className="mt-3 xl:mt-4 max-w-[664px] text-[14px] xl:text-[16px] text-[#BABDCD]">
        Достроила недостающие сценарии и состояния. Около 60 экранов и состояний. MVP дошёл до RuStore
      </p>

      <ProjectNavigation
        slug="workwave"
        arrow="right"
        className="mt-6"
      >
        Смотреть кейс
      </ProjectNavigation>
    </div>
  );
}

/* =========================================================
   PROJECT 1
========================================================= */

function ProjectOneMockup() {
  return (
    <div
      data-mockup
      className="project-mockup-stage relative w-full max-w-[480px] xl:max-w-[680px] 2xl:max-w-[784px] aspect-[784/820] mx-auto lg:ml-auto lg:mr-0 min-w-0"
    >
      <div
        data-device-stage
        className="project-device-stage absolute inset-0"
      >
        <div className="absolute inset-0 origin-top translate-y-[8.5%]">
          <Image
            data-phone
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_1}/phone1.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={672}
            height={868}
            priority
            draggable={false}
            className="project-piece absolute left-[0%] top-[-4.8%] z-10 h-auto w-[93.11%]"
          />
          <Image
            data-floating-piece
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_1}/topBlock.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={310}
            height={159}
            priority
            draggable={false}
            className="project-piece absolute left-[3.82%] top-[4.8%] z-30 h-auto w-[48.46%]"
          />
          <Image
            data-floating-piece
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_1}/botBlock.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={326}
            height={355}
            priority
            draggable={false}
            className="project-piece absolute right-[0%] top-[40.2%] z-40 h-auto w-[41.58%]"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT 2
========================================================= */

function ProjectTwoMockup() {
  return (
    <div
      data-mockup
      className="project-mockup-stage relative w-full max-w-[480px] xl:max-w-[680px] 2xl:max-w-[784px] aspect-[784/820] mx-auto lg:ml-auto lg:mr-0 min-w-0"
    >
      <div
        data-device-stage
        className="project-device-stage absolute inset-0"
      >
        <div className="absolute inset-0 origin-top translate-y-[8.5%]">
          <Image
            data-phone
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_2}/phone2.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={672}
            height={868}
            draggable={false}
            className="project-piece absolute left-[0%] top-[-4.8%] z-10 h-auto w-[93.11%]"
          />
          <Image
            data-floating-piece
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_2}/top.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={389}
            height={203}
            draggable={false}
            className="project-piece absolute left-[15.31%] top-[6.1%] z-30 h-auto w-[52.3%]"
          />
          <Image
            data-floating-piece
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_2}/bot3.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={389}
            height={218}
            draggable={false}
            className="project-piece absolute right-[0%] top-[48.1%] z-20 h-auto w-[52.93%]"
          />
          <Image
            data-floating-piece
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_2}/bot2.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={389}
            height={218}
            draggable={false}
            className="project-piece absolute right-[1.78%] top-[52.6%] z-30 h-auto w-[52.93%]"
          />
          <Image
            data-floating-piece
            data-piece
            unoptimized
            src={imgPath(`${PROJECT_2}/bot1.png`)} // 👈 ИСПРАВЛЕНО
            alt=""
            width={389}
            height={218}
            draggable={false}
            className="project-piece absolute right-[3.05%] top-[57.1%] z-40 h-auto w-[52.93%]"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export function ProjectsScrollShowcase({
  className,
  ...props
}: ProjectsCinematicShowcaseProps) {
  const containerRef = useRef<HTMLElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  /* =======================================================
     СЛУШАТЕЛЬ СОБЫТИЯ ДЛЯ КНОПКИ "ПЕРЕЙТИ К КЕЙСАМ"
  ======================================================= */
  useEffect(() => {
    const handleScrollToProjects = () => {
      const st = ScrollTrigger.getById("projects-trigger");
      if (st) {
        const targetY = st.labelToScroll("case1Ready");
        if (targetY !== undefined) {
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("scrollToProjects", handleScrollToProjects);
    return () => window.removeEventListener("scrollToProjects", handleScrollToProjects);
  }, []);

  /* =======================================================
     MOUSE TILT
  ======================================================= */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        const scenes = Array.from(container.querySelectorAll<HTMLElement>("[data-project-scene]"));
        const visibleScene = scenes.find((scene) => {
          const styles = window.getComputedStyle(scene);
          return styles.visibility !== "hidden" && Number(styles.opacity) > 0.5;
        });
        const visibleStage = visibleScene?.querySelector<HTMLElement>("[data-device-stage]");
        if (!visibleStage) return;

        gsap.to(visibleStage, {
          rotationY: x * 3,
          rotationX: -y * 3,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  /* =======================================================
     CINEMATIC SCROLL
  ======================================================= */

  useEffect(() => {
    const container = containerRef.current;
    const mainCard = mainCardRef.current;
    if (!container || !mainCard) return;

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>("[data-project-scene]");
      const scene1 = scenes[0];
      const scene2 = scenes[1];
      if (!scene1 || !scene2) return;

      gsap.set(mainCard, {
        y: 180,
        width: "84%",
        height: "82vh",
        borderRadius: "36px",
        autoAlpha: 1,
      });
      gsap.set(scene1, { autoAlpha: 1 });
      gsap.set(scene2, { autoAlpha: 0 });
      gsap.set(scene1.querySelector("[data-copy]"), { autoAlpha: 0, x: -60 });
      gsap.set(scene1.querySelector("[data-mockup]"), {
        autoAlpha: 0, y: 280, z: -550, scale: 0.62, rotationX: 45, rotationY: -25,
      });
      gsap.set(scene1.querySelectorAll("[data-floating-piece]"), { autoAlpha: 0, y: 55, scale: 0.82 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=4000",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "projects-trigger",
        },
      });

      scrollTl.to(mainCard, { y: 0, duration: 1.5, ease: "power3.inOut" }, 0);
      scrollTl.to(mainCard, { width: "100%", height: "100vh", borderRadius: "0px", duration: 1.7, ease: "power3.inOut" });

      scrollTl.fromTo(scene1.querySelector("[data-mockup]"),
        { y: 300, z: -550, rotationX: 48, rotationY: -30, scale: 0.58, autoAlpha: 0, filter: "blur(18px)" },
        { y: 0, z: 0, rotationX: 0, rotationY: 0, scale: 1, autoAlpha: 1, filter: "blur(0px)", duration: 2.6, ease: "power2.out" }
      );
      scrollTl.fromTo(scene1.querySelectorAll("[data-floating-piece]"),
        { y: 70, z: -120, scale: 0.7, autoAlpha: 0, filter: "blur(10px)" },
        { y: 0, z: 0, scale: 1, autoAlpha: 1, filter: "blur(0px)", duration: 1.5, stagger: 0.18, ease: "back.out(1.25)" },
        "-=1.6"
      );
      scrollTl.fromTo(scene1.querySelector("[data-copy]"),
        { x: -65, autoAlpha: 0, filter: "blur(8px)" },
        { x: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" },
        "-=1.15"
      );
      
      scrollTl.addLabel("case1Ready");

      scrollTl.to({}, { duration: 1.2 });

      scrollTl
        .to(scene1.querySelector("[data-copy]"), { x: -60, autoAlpha: 0, duration: 1, ease: "power3.inOut" })
        .to(scene1.querySelector("[data-mockup]"), { y: -90, z: -260, scale: 0.88, rotationX: -10, autoAlpha: 0, filter: "blur(12px)", duration: 1.3, ease: "power3.in" }, "<")
        .set(scene1, { autoAlpha: 0 })
        .set(scene2, { autoAlpha: 1 });

      scrollTl
        .fromTo(scene2.querySelector("[data-mockup]"),
          { y: 280, z: -500, rotationX: 40, rotationY: -20, scale: 0.66, autoAlpha: 0, filter: "blur(14px)" },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, scale: 1, autoAlpha: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }
        )
        .fromTo(scene2.querySelectorAll("[data-floating-piece]"),
          { y: 55, scale: 0.78, autoAlpha: 0 },
          { y: 0, scale: 1, autoAlpha: 1, stagger: 0.12, duration: 1.2, ease: "back.out(1.2)" },
          "-=1.4"
        )
        .fromTo(scene2.querySelector("[data-copy]"),
          { x: -60, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" },
          "-=1"
        );
      scrollTl.to({}, { duration: 1.2 });

      scrollTl.to(scene2.querySelector("[data-copy]"), { x: -45, y: -45, autoAlpha: 0, filter: "blur(8px)", duration: 1, ease: "power3.in" });
      scrollTl.to(scene2.querySelectorAll("[data-floating-piece]"), { y: -80, z: -120, scale: 0.72, autoAlpha: 0, filter: "blur(10px)", duration: 1.1, stagger: { each: 0.08, from: "end" }, ease: "power3.in" }, "-=0.65");
      scrollTl.to(scene2.querySelector("[data-mockup]"), { y: -220, z: -500, rotationX: -26, rotationY: -18, scale: 0.62, autoAlpha: 0, filter: "blur(18px)", duration: 1.4, ease: "power3.in" }, "-=0.65");
      scrollTl.set(scene2, { autoAlpha: 0 });

      scrollTl.to(mainCard, { width: "84%", height: "82vh", borderRadius: "36px", duration: 1.5, ease: "power3.inOut" });
      scrollTl.to(mainCard, { y: -160, duration: 1, ease: "power3.inOut" });
    }, container);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(`relative h-screen w-full overflow-hidden bg-white`, className)}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />

      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1500px" }}>
        <div ref={mainCardRef} className="projects-main-card projects-cinematic-bg relative overflow-hidden">
          <div className="projects-glow-line pointer-events-none absolute left-0 top-0 z-50 h-px w-full" />
          <div className="projects-glow-line pointer-events-none absolute bottom-0 left-0 z-50 h-px w-full" />

          {/* PROJECT 1 */}
          <div data-project-scene className="project-scene absolute inset-0">
            <div className="
              mx-auto grid h-full w-full max-w-[1600px]
              grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.4fr]
              items-center px-6 lg:px-12 xl:px-16 gap-8 xl:gap-16 min-w-0
            ">
              <Case1 />
              <ProjectOneMockup />
            </div>
          </div>

          {/* PROJECT 2 */}
          <div data-project-scene className="project-scene absolute inset-0 opacity-0">
            <div className="
              mx-auto grid h-full w-full max-w-[1600px]
              grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.4fr]
              items-center px-6 lg:px-12 xl:px-16 gap-8 xl:gap-16 min-w-0
            ">
              <Case2 />
              <ProjectTwoMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}