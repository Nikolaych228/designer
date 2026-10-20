"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LAYERS = [
  {
    id: 0,
    label: "Roles",
  },
  {
    id: 1,
    label: "States",
  },
  {
    id: 2,
    label: "Dependencies",
  },
] as const;

const OWNERSHIP =
  "/images/benefits/ownership";

const UPDATE =
  "/images/benefits/update";

/* =========================================================
   BENEFITS
========================================================= */

export function Benefits() {
  return (
    <section className="my-25 flex flex-col items-center w-full lg:px-[120px] 
                [@media(min-height:850px)]:lg:px-[284px]">
      <div className="max-w-[720px]">
          <p className="text-[48px] text-center font-semibold leading-[58px] text-gray-900 ">
            Работаю не с экранами, а со связями между ними
          </p>
        </div>
      <div
        className="
          mx-auto
          grid
          w-full
          mt-6
          max-w-[1344px]
          grid-cols-2
          gap-4
        "
      >
        <SystemBenefitCard />

        <LogicBenefitCard />

        <OwnershipBenefitCard />

        <UpdateBenefitCard />
      </div>
    </section>
  );
}

/* =========================================================
   CARD 1
========================================================= */

function SystemBenefitCard() {
  const [hoveredLayer, setHoveredLayer] =
    useState<number | null>(null);

  const activeLayer =
    hoveredLayer ?? 0;

  const isExpanded =
    hoveredLayer !== null;

  return (
    <article
      className="
        relative
        h-[528px]
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-[#E8EAF2]
        bg-white
      "
    >
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[350px]
          overflow-hidden
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(87,99,190,0.13) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        {/* CIRCLE */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[52px]
            h-[266px]
            w-[266px]
            -translate-x-1/2
            rounded-full
            border
            border-dashed
            border-[#AAB2FF]
          "
        />

        {/* ONE SYSTEM */}

        <div
          className="
            pointer-events-none
            absolute
            left-[calc(50%-145px)]
            top-[57px]
            z-50
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            border
            border-[#ECEEF5]
            bg-white
            px-4
            py-[9px]
            text-[14px]
            font-medium
            leading-none
            text-[#212967]
            shadow-[0_3px_12px_rgba(23,27,43,0.09)]
          "
        >
          One system
        </div>

        {/* STACK */}

        <div
          className="
            absolute
            left-1/2
            top-[106px]
            h-[190px]
            w-[160px]
            -translate-x-1/2
          "
          onMouseLeave={() =>
            setHoveredLayer(null)
          }
        >
          {/* DEPENDENCIES */}

          <div
            className="
              absolute
              left-0
              z-10
              h-[93px]
              w-[160px]
              transition-[top]
              duration-400
              ease-[cubic-bezier(0.16,1,0.3,1)]
            "
            style={{
              top: isExpanded
                ? "78px"
                : "58px",
            }}
          >
            <Layer
              active={activeLayer === 2}
              onEnter={() =>
                setHoveredLayer(2)
              }
            />
          </div>

          {/* STATES */}

          <div
            className="
              absolute
              left-0
              z-20
              h-[93px]
              w-[160px]
              transition-[top]
              duration-400
              ease-[cubic-bezier(0.16,1,0.3,1)]
            "
            style={{
              top: isExpanded
                ? "39px"
                : "29px",
            }}
          >
            <Layer
              active={activeLayer === 1}
              onEnter={() =>
                setHoveredLayer(1)
              }
            />
          </div>

          {/* ROLES */}

          <div
            className="
              absolute
              left-0
              top-0
              z-30
              h-[93px]
              w-[160px]
            "
          >
            <Layer
              active={activeLayer === 0}
              onEnter={() =>
                setHoveredLayer(0)
              }
            />
          </div>
        </div>

        {/* LABELS */}

        <LayerLabel
          label="Roles"
          active={activeLayer === 0}
          className="
            left-[calc(50%+150px)]
            top-[181px]
          "
        />

        <LayerLabel
          label="States"
          active={activeLayer === 1}
          className="
            left-[calc(50%+145px)]
            top-[220px]
          "
        />

        <LayerLabel
          label="Dependencies"
          active={activeLayer === 2}
          className="
            left-[calc(50%+117px)]
            top-[258px]
          "
        />

        {/* GLOW */}

        <div
          className={`
            pointer-events-none
            absolute
            left-1/2
            top-[120px]
            h-[140px]
            w-[220px]
            -translate-x-1/2
            rounded-full
            bg-[#5364FF]/12
            blur-[58px]
            transition-opacity
            duration-400

            ${
              hoveredLayer !== null
                ? "opacity-100"
                : "opacity-60"
            }
          `}
        />
      </div>

      {/* TEXT */}

      <div
        className="
          absolute
          bottom-[24px]
          left-[24px]
          right-[24px]
        "
      >
        <h3
          className="
            text-[24px]
            font-semibold
            leading-[32px]
            text-[#171B2B]
          "
        >
          Не теряюсь в сложной вложенности
        </h3>

        <p
          className="
            mt-2
            max-w-[610px]
            text-[16px]
            leading-[24px]
            text-[#7F8495]
          "
        >
          В Tenta работала с объектами, секциями,
          оборудованием, датчиками и критическими
          состояниями. Перестраивала не отдельный
          экран, а связи между уровнями системы
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   CARD 2 — 3D LOGIC
========================================================= */

function LogicBenefitCard() {
  const sceneRef =
    useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>,
  ) => {
    const scene =
      sceneRef.current;

    if (!scene) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const normalizedX =
      ((event.clientX - bounds.left) /
        bounds.width -
        0.5) *
      2;

    const normalizedY =
      ((event.clientY - bounds.top) /
        bounds.height -
        0.5) *
      2;

    gsap.to(scene, {
      rotationY:
        normalizedX * 5,

      rotationX:
        normalizedY * -4,

      x:
        normalizedX * 3,

      y:
        normalizedY * 2,

      duration: 0.65,
      ease: "power3.out",
      overwrite: "auto",
    });

    const elements =
      scene.querySelectorAll<HTMLElement>(
        "[data-depth]",
      );

    elements.forEach(
      (element) => {
        const depth =
          Number(
            element.dataset.depth,
          ) || 0;

        gsap.to(element, {
          x:
            normalizedX *
            depth,

          y:
            normalizedY *
            depth *
            0.55,

          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    );
  };

  const handleMouseLeave = () => {
    const scene =
      sceneRef.current;

    if (!scene) {
      return;
    }

    gsap.to(scene, {
      rotationX: 0,
      rotationY: 0,
      x: 0,
      y: 0,

      duration: 0.9,
      ease: "power3.out",
      overwrite: "auto",
    });

    const elements =
      scene.querySelectorAll<HTMLElement>(
        "[data-depth]",
      );

    elements.forEach(
      (element) => {
        gsap.to(element, {
          x: 0,
          y: 0,

          duration: 0.9,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    );
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        h-[528px]
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-[#E8EAF2]
        bg-white
      "
    >
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[350px]
          overflow-hidden
        "
        style={{
          perspective:
            "1100px",

          backgroundImage:
            "radial-gradient(circle, rgba(87,99,190,0.13) 1px, transparent 1px)",

          backgroundSize:
            "18px 18px",
        }}
      >
        {/* GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[100px]
            h-[190px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[#6670FF]/8
            blur-[70px]
          "
        />

        {/* 3D SCENE */}

        <div
          ref={sceneRef}
          className="
            absolute
            left-1/2
            top-[38px]
            h-[285px]
            w-[520px]
            -translate-x-1/2
          "
          style={{
            transformStyle:
              "preserve-3d",
          }}
        >
          {/* BACKGROUND CIRCLE */}

          <div
            data-depth="1"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
            "
            style={{
              transform:
                "translateZ(-55px)",
            }}
          >
            <svg
              viewBox="0 0 520 285"
              fill="none"
              className="
                h-full
                w-full
                overflow-visible
              "
            >
              <circle
                cx="260"
                cy="142"
                r="120"
                stroke="#A7AEF6"
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity="0.75"
              />
            </svg>
          </div>

          {/* CONNECTIONS */}

          <div
            data-depth="4"
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
            "
            style={{
              transform:
                "translateZ(20px)",
              transformStyle:
                "preserve-3d",
            }}
          >
            <svg
              viewBox="0 0 520 285"
              fill="none"
              className="
                h-full
                w-full
                overflow-visible
              "
            >
              <path
                d="M260 68 V92"
                stroke="#98A0EC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M260 165 V179"
                stroke="#98A0EC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="
                  M260 179
                  H154
                  Q143 179 143 190
                  V203
                "
                stroke="#98A0EC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="
                  M260 179
                  H366
                  Q377 179 377 190
                  V203
                "
                stroke="#98A0EC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* INITIAL BRIEF */}

          <div
            data-depth="3"
            className="
              absolute
              left-[140px]
              top-0
              z-30
              w-[245px]
            "
            style={{
              transform:
                "translateZ(55px)",
            }}
          >
            <Image
              src="/images/benefits/Group 6820.png"
              alt="Initial brief"
              width={490}
              height={140}
              unoptimized
              draggable={false}
              className="
                h-auto
                w-full
                select-none
              "
            />
          </div>

          {/* PRODUCT LOGIC */}

          <div
            data-depth="6"
            className="
              absolute
              left-[112px]
              top-[87px]
              z-40
              w-[292px]
            "
            style={{
              transform:
                "translateZ(90px)",
            }}
          >
            <Image
              src="/images/benefits/Group 6822.png"
              alt="Product logic"
              width={584}
              height={158}
              unoptimized
              draggable={false}
              className="
                h-auto
                w-full
                select-none
              "
            />
          </div>

          {/* CORE FLOWS */}

          <div
            data-depth="9"
            className="
              absolute
              left-[38px]
              top-[190px]
              z-30
              w-[215px]
            "
            style={{
              transform:
                "translateZ(55px)",
            }}
          >
            <Image
              src="/images/benefits/Group 6823.png"
              alt="Core flows"
              width={431}
              height={171}
              unoptimized
              draggable={false}
              className="
                h-auto
                w-full
                select-none
              "
            />
          </div>

          {/* EDGE CASES */}

          <div
            data-depth="9"
            className="
              absolute
              right-[38px]
              top-[190px]
              z-30
              w-[215px]
            "
            style={{
              transform:
                "translateZ(55px)",
            }}
          >
            <Image
              src="/images/benefits/Group 6824.png"
              alt="Edge cases"
              width={431}
              height={171}
              unoptimized
              draggable={false}
              className="
                h-auto
                w-full
                select-none
              "
            />
          </div>
        </div>
      </div>

      {/* TEXT */}

      <div
        className="
          absolute
          bottom-[23px]
          left-[24px]
          right-[24px]
        "
      >
        <h3
          className="
            text-[24px]
            font-semibold
            leading-[32px]
            text-[#171B2B]
          "
        >
          Замечаю то, чего нет в ТЗ
        </h3>

        <p
          className="
            mt-2
            max-w-[610px]
            text-[16px]
            leading-[24px]
            text-[#7F8495]
          "
        >
          В WorkWave исходных десяти ключевых экранов
          оказалось недостаточно для реального сценария.
          Достроила состояния и промежуточные шаги до
          системы примерно из 60 экранов и состояний
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   CARD 3 — END-TO-END OWNERSHIP
========================================================= */

function OwnershipBenefitCard() {
  const cardRef =
    useRef<HTMLElement>(null);

  const sceneRef =
    useRef<HTMLDivElement>(null);

  const documentRef =
    useRef<HTMLDivElement>(null);

  const magnifierRef =
    useRef<HTMLDivElement>(null);

  const requirementsRef =
    useRef<HTMLDivElement>(null);

  const constraintsRef =
    useRef<HTMLDivElement>(null);

  const ownershipRef =
    useRef<HTMLDivElement>(null);

  const circleRef =
    useRef<HTMLDivElement>(null);

  const connectorRef =
    useRef<HTMLDivElement>(null);

  /* =======================================================
     APPEAR
  ======================================================= */

  useEffect(() => {
    const card =
      cardRef.current;

    if (!card) {
      return;
    }

    const ctx =
      gsap.context(() => {
        const tl =
          gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          });

        tl.fromTo(
          circleRef.current,
          {
            autoAlpha: 0,
            scale: 0.75,
            rotation: -12,
          },
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power3.out",
          },
        )

          .fromTo(
            documentRef.current,
            {
              autoAlpha: 0,
              y: 30,
              scale: 0.94,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.65",
          )

          .fromTo(
            requirementsRef.current,
            {
              autoAlpha: 0,
              x: -45,
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.45",
          )

          .fromTo(
            constraintsRef.current,
            {
              autoAlpha: 0,
              x: 45,
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "<",
          )

          .fromTo(
            connectorRef.current,
            {
              autoAlpha: 0,
              scaleX: 0,
            },
            {
              autoAlpha: 1,
              scaleX: 1,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.35",
          )

          .fromTo(
            magnifierRef.current,
            {
              autoAlpha: 0,
              scale: 0.65,
              rotation: -12,
            },
            {
              autoAlpha: 1,
              scale: 1,
              rotation: 0,
              duration: 0.65,
              ease: "back.out(1.6)",
            },
            "-=0.25",
          )

          .fromTo(
            ownershipRef.current,
            {
              autoAlpha: 0,
              y: 24,
              scale: 0.94,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.25",
          );
      }, card);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =======================================================
     MOUSE 3D
  ======================================================= */

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>,
  ) => {
    const card =
      cardRef.current;

    const scene =
      sceneRef.current;

    if (!card || !scene) {
      return;
    }

    const bounds =
      card.getBoundingClientRect();

    const normalizedX =
      ((event.clientX - bounds.left) /
        bounds.width -
        0.5) *
      2;

    const normalizedY =
      ((event.clientY - bounds.top) /
        bounds.height -
        0.5) *
      2;

    /* WHOLE SCENE */

    gsap.to(scene, {
      rotationY:
        normalizedX * 4.5,

      rotationX:
        normalizedY * -3.5,

      duration: 0.7,
      ease: "power3.out",
      overwrite: "auto",
    });

    /* DOCUMENT */

    gsap.to(
      documentRef.current,
      {
        x:
          normalizedX * 3,

        y:
          normalizedY * 2,

        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      },
    );

    /* REQUIREMENTS */

    gsap.to(
      requirementsRef.current,
      {
        x:
          normalizedX * 9,

        y:
          normalizedY * 5,

        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      },
    );

    /* CONSTRAINTS */

    gsap.to(
      constraintsRef.current,
      {
        x:
          normalizedX * 11,

        y:
          normalizedY * 6,

        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      },
    );

    /* OWNERSHIP */

    gsap.to(
      ownershipRef.current,
      {
        x:
          normalizedX * 6,

        y:
          normalizedY * 3,

        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      },
    );

    /* CIRCLE */

    gsap.to(
      circleRef.current,
      {
        x:
          normalizedX * -3,

        y:
          normalizedY * -2,

        rotation:
          normalizedX * 2,

        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      },
    );

    /* CONNECTOR */

    gsap.to(
      connectorRef.current,
      {
        x:
          normalizedX * 5,

        y:
          normalizedY * 2,

        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      },
    );

    /* MAGNIFIER —
       движется сильнее остальных */

    gsap.to(
      magnifierRef.current,
      {
        x:
          normalizedX * 22,

        y:
          normalizedY * 16,

        rotation:
          normalizedX * 2,

        duration: 0.55,
        ease: "power3.out",
        overwrite: "auto",
      },
    );

    /* LINE REACTION */

    const lines =
      scene.querySelectorAll<HTMLElement>(
        "[data-document-line]",
      );

    const focusY =
      (normalizedY + 1) / 2;

    lines.forEach(
      (line, index) => {
        const lineY =
          index /
          Math.max(
            lines.length - 1,
            1,
          );

        const distance =
          Math.abs(
            lineY - focusY,
          );

        const strength =
          Math.max(
            0,
            1 - distance * 4,
          );

        gsap.to(line, {
          scaleX:
            1 +
            strength * 0.035,

          opacity:
            0.72 +
            strength * 0.28,

          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
    );
  };

  /* =======================================================
     RESET
  ======================================================= */

  const handleMouseLeave = () => {
    const scene =
      sceneRef.current;

    if (!scene) {
      return;
    }

    gsap.to(scene, {
      rotationX: 0,
      rotationY: 0,

      duration: 0.9,
      ease: "power3.out",
      overwrite: "auto",
    });

    [
      documentRef.current,
      requirementsRef.current,
      constraintsRef.current,
      ownershipRef.current,
      circleRef.current,
      connectorRef.current,
    ].forEach((element) => {
      if (!element) {
        return;
      }

      gsap.to(element, {
        x: 0,
        y: 0,
        rotation: 0,

        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      });
    });

    gsap.to(
      magnifierRef.current,
      {
        x: 0,
        y: 0,
        rotation: 0,

        duration: 1,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto",
      },
    );

    scene
      .querySelectorAll<HTMLElement>(
        "[data-document-line]",
      )
      .forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          opacity: 1,

          duration: 0.5,
          ease: "power2.out",
        });
      });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        h-[528px]
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-[#E8EAF2]
        bg-white
      "
    >
      {/* ===================================================
          VISUAL AREA
      =================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[350px]
          overflow-hidden
        "
        style={{
          perspective:
            "1100px",

          backgroundImage:
            "radial-gradient(circle, rgba(87,99,190,0.13) 1px, transparent 1px)",

          backgroundSize:
            "18px 18px",
        }}
      >
        {/* LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[105px]
            h-[180px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-[#6670FF]/8
            blur-[70px]
          "
        />

        {/* =================================================
            SCENE
        ================================================= */}

        <div
          ref={sceneRef}
          className="
            absolute
            left-1/2
            top-[25px]
            h-[305px]
            w-[520px]
            -translate-x-1/2
          "
          style={{
            transformStyle:
              "preserve-3d",
          }}
        >
          {/* ===============================================
              CIRCLE — BACK
          =============================================== */}

          <div
            ref={circleRef}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[12px]
              z-0
              h-[270px]
              w-[270px]
              -translate-x-1/2
            "
            style={{
              transform:
                "translateZ(-55px)",
            }}
          >
            <svg
              viewBox="0 0 270 270"
              fill="none"
              className="
                h-full
                w-full
              "
            >
              <circle
                cx="135"
                cy="135"
                r="132"
                stroke="#9FA8FF"
                strokeWidth="1.2"
                strokeDasharray="3 4"
              />
            </svg>
          </div>

          {/* ===============================================
              TOP CONNECTION
          =============================================== */}

          <div
            ref={connectorRef}
            className="
              pointer-events-none
              absolute
              left-[125px]
              top-[63px]
              z-10
              h-px
              w-[270px]
              origin-center
              bg-[#BFC5FF]
            "
            style={{
              transform:
                "translateZ(15px)",
            }}
          />

          {/* ===============================================
              DOCUMENT
          =============================================== */}

          <div
            ref={documentRef}
            className="
              absolute
              left-[260px]
              top-[57px]
              z-20
              h-[201px]
              w-[179px]
              -translate-x-1/2
            "
            style={{
              transform:
                "translateZ(35px)",
            }}
          >
            {/* document body */}

            <Image
              src={`${OWNERSHIP}/Rectangle 452.svg`}
              alt=""
              width={179}
              height={221}
              unoptimized
              draggable={false}
              className="
                absolute
                inset-0
                h-full
                w-full
                select-none
              "
            />

            {/* document lines */}

            <DocumentLine
              file="Rectangle 453.svg"
              top={35}
              left={25}
              width={52}
            />

            <DocumentLine
              file="Rectangle 455.svg"
              top={48}
              left={25}
              width={119}
            />

            <DocumentLine
              file="Rectangle 457.svg"
              top={67}
              left={25}
              width={128}
            />

            <DocumentLine
              file="Rectangle 454.svg"
              top={84}
              left={25}
              width={19}
            />

            <DocumentLine
              file="Rectangle 456.svg"
              top={84}
              left={55}
              width={70}
            />

            <DocumentLine
              file="Rectangle 459.svg"
              top={104}
              left={25}
              width={111}
            />

            <DocumentLine
              file="Rectangle 460.svg"
              top={122}
              left={25}
              width={130}
            />

            <DocumentLine
              file="Rectangle 461.svg"
              top={140}
              left={25}
              width={130}
            />

            <DocumentLine
              file="Rectangle 462.svg"
              top={158}
              left={25}
              width={102}
            />

            <DocumentLine
              file="Rectangle 458.svg"
              top={176}
              left={25}
              width={91}
            />

            <DocumentLine
              file="Rectangle 463.svg"
              top={194}
              left={25}
              width={63}
            />
          </div>

          {/* ===============================================
              REQUIREMENTS
          =============================================== */}

          <div
            ref={requirementsRef}
            className="
              absolute
              left-[70px]
              top-[41px]
              z-40
              rounded-full
              border
              border-[#ECEEF5]
              bg-white
              px-[22px]
              py-[12px]
              text-[16px]
              font-medium
              leading-none
              text-[#212967]
              shadow-[0_5px_16px_rgba(23,27,43,0.12)]
            "
            style={{
              transform:
                "translateZ(65px)",
            }}
          >
            Requirements
          </div>

          {/* ===============================================
              CONSTRAINTS
          =============================================== */}

          <div
            ref={constraintsRef}
            className="
              absolute
              right-[64px]
              top-[49px]
              z-40
              rounded-full
              border
              border-[#ECEEF5]
              bg-white
              px-[22px]
              py-[12px]
              text-[16px]
              font-medium
              leading-none
              text-[#212967]
              shadow-[0_5px_16px_rgba(23,27,43,0.12)]
            "
            style={{
              transform:
                "translateZ(75px)",
            }}
          >
            Constraints
          </div>

          {/* ===============================================
              MAGNIFIER
          =============================================== */}

          <div
            ref={magnifierRef}
            className="
              pointer-events-none
              absolute
              left-[221px]
              top-[118px]
              z-50
              h-[83px]
              w-[83px]
            "
            style={{
              transform:
                "translateZ(95px)",
            }}
          >
            <Image
              src={`${OWNERSHIP}/Vector.svg`}
              alt=""
              width={83}
              height={84}
              unoptimized
              draggable={false}
              className="
                h-full
                w-full
                select-none
              "
            />
          </div>

          {/* ===============================================
              END-TO-END
          =============================================== */}

          <div
            ref={ownershipRef}
            className="
              absolute
              bottom-[1px]
              left-1/2
              z-40
              -translate-x-1/2
              whitespace-nowrap
              rounded-full
              bg-[#29317A]
              px-[26px]
              py-[13px]
              text-[16px]
              font-medium
              leading-none
              text-[#F2F3FF]
              shadow-[0_7px_18px_rgba(33,41,103,0.22)]
            "
            style={{
              transform:
                "translateZ(55px)",
            }}
          >
            End-to-end ownership
          </div>
        </div>
      </div>

      {/* ===================================================
          TEXT
      =================================================== */}

      <div
        className="
          absolute
          bottom-[24px]
          left-[24px]
          right-[24px]
        "
      >
        <h3
          className="
            text-[24px]
            font-semibold
            leading-[32px]
            text-[#171B2B]
          "
        >
          Не передаю проблему дальше по цепочке
        </h3>

        <p
          className="
            mt-2
            max-w-[610px]
            text-[16px]
            leading-[24px]
            text-[#7F8495]
          "
        >
          На проектах была единственным дизайнером:
          сама разбирала вводные, проектировала сценарии,
          принимала UI-решения и готовила их к реализации
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   CARD 4 — SYSTEM UPDATE
========================================================= */

function UpdateBenefitCard() {
  const cardRef =
    useRef<HTMLElement>(null);

  const sceneRef =
    useRef<HTMLDivElement>(null);

  const nodeRef =
    useRef<HTMLDivElement>(null);

  const refreshRef =
    useRef<HTMLDivElement>(null);

  const contextRef =
    useRef<HTMLDivElement>(null);

  const scenariosRef =
    useRef<HTMLDivElement>(null);

  const updatedRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const scene = sceneRef.current;

    if (!card || !scene) {
      return;
    }

    const ctx = gsap.context(() => {
      const network =
        scene.querySelector<HTMLElement>(
          "[data-update-network]",
        );

      const runners =
        Array.from(
          scene.querySelectorAll<SVGPathElement>(
            "[data-flow-runner]",
          ),
        );

      const entrance =
        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            once: true,
          },
        });

      entrance
        .fromTo(
          network,
          {
            autoAlpha: 0,
            scale: 0.94,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
        )
        .fromTo(
          nodeRef.current,
          {
            autoAlpha: 0,
            scale: 0.72,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        )
        .fromTo(
          contextRef.current,
          {
            autoAlpha: 0,
            x: -26,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.28",
        )
        .fromTo(
          scenariosRef.current,
          {
            autoAlpha: 0,
            x: 26,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "<",
        )
        .fromTo(
          updatedRef.current,
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.18",
        );

      /* ===================================================
         MOVING DASHES

         Это не отдельные div, а повторение ТОЧНО того же
         path, что и у фоновой схемы. Поэтому светлые
         черточки всегда идут строго по линиям, включая
         вертикальные участки и повороты.
      =================================================== */

      runners.forEach((runner, index) => {
        const distance =
          index === 0 ? -122 : 178;

        const duration =
          index === 0 ? 2.35 : 3.15;

        gsap.to(runner, {
          strokeDashoffset: distance,
          duration,
          repeat: -1,
          ease: "none",
        });
      });

      /* ===================================================
         CENTRAL REFRESH LOOP
      =================================================== */

      const refreshLoop =
        gsap.timeline({
          repeat: -1,
          repeatDelay: 1.1,
          delay: 1.1,
        });

      refreshLoop
        .to(refreshRef.current, {
          rotation: 180,
          duration: 0.65,
          ease: "power2.inOut",
        })
        .to(refreshRef.current, {
          rotation: 360,
          duration: 0.65,
          ease: "power2.inOut",
        });
    }, card);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="
        relative
        h-[528px]
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-[#E8EAF2]
        bg-white
      "
    >
      {/* ===================================================
          VISUAL AREA
      =================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[350px]
          overflow-hidden
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(87,99,190,0.13) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        {/* SOFT LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[95px]
            h-[190px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[#6670FF]/7
            blur-[70px]
          "
        />

        {/* =================================================
            SCENE

            Ширина сцены почти равна карточке, поэтому
            подписи больше не съезжают к центру.
        ================================================= */}

        <div
          ref={sceneRef}
          className="
            absolute
            left-1/2
            top-[4px]
            h-[336px]
            w-[620px]
            -translate-x-1/2
          "
        >
          {/* ===============================================
              NETWORK + MOVING DASHES
          =============================================== */}

          <div
            data-update-network
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[14px]
              z-0
              h-[350px]
              w-[360px]
              -translate-x-1/2
            "
          >
            <svg
              viewBox="0 0 287 279"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
                h-full
                w-full
                overflow-visible
              "
            >
              {/* STATIC NETWORK */}

              <path
                d="M46.1115 9.76043V61.6276H105.516V141.425H142.754M142.754 141.425V2.66699M142.754 141.425H2.66663M142.754 141.425V181.323M142.754 141.425H174.23M283.729 141.425H174.23M142.754 181.323H61.1842V240.728H9.75966M142.754 181.323H181.766V226.098H241.614V276.193M275.749 45.6689H227.427V103.743H174.23V141.425"
                stroke="#EDEFFE"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />

              {/* ENDPOINTS */}

              <circle
                cx="46.1115"
                cy="9.76043"
                r="2.7"
                fill="#EDEFFE"
              />

              <circle
                cx="142.754"
                cy="2.66699"
                r="2.7"
                fill="#EDEFFE"
              />

              <circle
                cx="2.66663"
                cy="141.425"
                r="2.7"
                fill="#EDEFFE"
              />

              <circle
                cx="283.729"
                cy="141.425"
                r="2.7"
                fill="#EDEFFE"
              />

              <circle
                cx="9.75966"
                cy="240.728"
                r="2.7"
                fill="#EDEFFE"
              />

              <circle
                cx="241.614"
                cy="276.193"
                r="2.7"
                fill="#EDEFFE"
              />

              <circle
                cx="275.749"
                cy="45.6689"
                r="2.7"
                fill="#EDEFFE"
              />

              {/* MOVING DASHES — LAYER 1 */}

              <path
                data-flow-runner
                d="M46.1115 9.76043V61.6276H105.516V141.425H142.754M142.754 141.425V2.66699M142.754 141.425H2.66663M142.754 141.425V181.323M142.754 141.425H174.23M283.729 141.425H174.23M142.754 181.323H61.1842V240.728H9.75966M142.754 181.323H181.766V226.098H241.614V276.193M275.749 45.6689H227.427V103.743H174.23V141.425"
                stroke="#6674E8"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeDasharray="12 110"
                strokeDashoffset="0"
                vectorEffect="non-scaling-stroke"
              />

              {/* MOVING DASHES — LAYER 2 */}

              <path
                data-flow-runner
                d="M46.1115 9.76043V61.6276H105.516V141.425H142.754M142.754 141.425V2.66699M142.754 141.425H2.66663M142.754 141.425V181.323M142.754 141.425H174.23M283.729 141.425H174.23M142.754 181.323H61.1842V240.728H9.75966M142.754 181.323H181.766V226.098H241.614V276.193M275.749 45.6689H227.427V103.743H174.23V141.425"
                stroke="#5364D9"
                strokeWidth="1.45"
                strokeLinecap="round"
                strokeDasharray="7 171"
                strokeDashoffset="70"
                opacity="0.9"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* ===============================================
              CENTRAL NODE
          =============================================== */}

          <div
            ref={nodeRef}
            className="
              absolute
              left-1/2
              top-[128px]
              z-30
              h-[122px]
              w-[122px]
              -translate-x-1/2
              origin-center
            "
          >
            <Image
              src={`${UPDATE}/Group 6825.svg`}
              alt=""
              width={122}
              height={122}
              unoptimized
              draggable={false}
              className="
                absolute
                inset-0
                h-full
                w-full
                select-none
              "
            />

            <Image
              src={`${UPDATE}/Rectangle 453.svg`}
              alt=""
              width={51}
              height={51}
              unoptimized
              draggable={false}
              className="
                absolute
                left-1/2
                top-1/2
                h-[51px]
                w-[51px]
                -translate-x-1/2
                -translate-y-1/2
                select-none
              "
            />

            <div
              ref={refreshRef}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-10
                h-[28px]
                w-[28px]
                -translate-x-1/2
                -translate-y-1/2
                origin-center
              "
            >
              <Image
                src={`${UPDATE}/refresh-circular.svg`}
                alt=""
                width={28}
                height={28}
                unoptimized
                draggable={false}
                className="
                  h-full
                  w-full
                  select-none
                "
              />
            </div>
          </div>

          {/* ===============================================
              1M CONTEXT
          =============================================== */}

          <div
            ref={contextRef}
            className="
              absolute
              left-[95px]
              top-[76px]
              z-40
              whitespace-nowrap
              rounded-full
              border
              border-[#ECEEF5]
              bg-white
              px-[20px]
              py-[11px]
              text-[16px]
              font-medium
              leading-none
              text-[#212967]
              shadow-[0_5px_16px_rgba(23,27,43,0.12)]
            "
          >
            1M context
          </div>

          {/* ===============================================
              NEW SCENARIOS
          =============================================== */}

          <div
            ref={scenariosRef}
            className="
              absolute
              right-[72px]
              top-[108px]
              z-40
              whitespace-nowrap
              rounded-full
              border
              border-[#ECEEF5]
              bg-white
              px-[20px]
              py-[11px]
              text-[16px]
              font-medium
              leading-none
              text-[#212967]
              shadow-[0_5px_16px_rgba(23,27,43,0.12)]
            "
          >
            New scenarios
          </div>

          {/* ===============================================
              SYSTEM UPDATED
          =============================================== */}

          <div
            ref={updatedRef}
            className="
              absolute
              left-1/2
              top-[277px]
              z-40
              flex
              -translate-x-1/2
              items-center
              gap-[12px]
              whitespace-nowrap
              rounded-full
              border
              border-[#ECEEF5]
              bg-white
              px-[20px]
              py-[11px]
              text-[16px]
              font-medium
              leading-none
              text-[#212967]
              shadow-[0_5px_16px_rgba(23,27,43,0.12)]
            "
          >
            <span>
              System updated
            </span>

            <span
              className="
                flex
                h-[22px]
                w-[22px]
                items-center
                justify-center
                rounded-full
                bg-[#EEF0FF]
              "
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
              >
                <path
                  d="M1 4.3L4.15 7.4L11 1"
                  stroke="#A7AFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* ===================================================
          TEXT
      =================================================== */}

      <div
        className="
          absolute
          bottom-[24px]
          left-[24px]
          right-[24px]
        "
      >
        <h3
          className="
            text-[24px]
            font-semibold
            leading-[32px]
            text-[#171B2B]
          "
        >
          Умею входить в продукт
        </h3>

        <p
          className="
            mt-2
            max-w-[610px]
            text-[16px]
            leading-[24px]
            text-[#7F8495]
          "
        >
          В проектах работала не с чистого листа:
          разбиралась в существующей логике, ограничениях
          и накопившихся проблемах и развивала продукт
          поверх них
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   DOCUMENT LINE
========================================================= */

interface DocumentLineProps {
  file: string;
  top: number;
  left: number;
  width: number;
}

function DocumentLine({
  file,
  top,
  left,
  width,
}: DocumentLineProps) {
  return (
    <div
      data-document-line
      className="
        absolute
        origin-left
      "
      style={{
        top,
        left,
        width,
      }}
    >
      <Image
        src={`${OWNERSHIP}/${file}`}
        alt=""
        width={width}
        height={5}
        unoptimized
        draggable={false}
        className="
          h-auto
          w-full
          select-none
        "
      />
    </div>
  );
}

/* =========================================================
   LAYER
========================================================= */

interface LayerProps {
  active: boolean;
  onEnter: () => void;
}

function Layer({
  active,
  onEnter,
}: LayerProps) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      className={`
        block
        h-full
        w-full
        cursor-pointer
        border-0
        bg-transparent
        p-0
        outline-none

        transition-[transform,filter]
        duration-400
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          active
            ? `
              scale-[1.025]
              drop-shadow-[0_12px_16px_rgba(33,41,103,0.20)]
            `
            : `
              scale-100
              drop-shadow-[0_3px_5px_rgba(40,50,120,0.04)]
            `
        }
      `}
    >
      <svg
        width="160"
        height="93"
        viewBox="0 0 160 93"
        fill="none"
        className="
          h-full
          w-full
          overflow-visible
        "
      >
        <path
          d="
            M0 40.4412
            L78.9566 78.9568
            L159.839 40.4412
            L78.9566 0
            L0 40.4412Z
          "
          className="
            transition-colors
            duration-400
          "
          fill={
            active
              ? "#212967"
              : "#EDEFFE"
          }
        />

        <path
          d="
            M159.839 40.4412
            L78.9566 78.9568
            V92.6673
            L159.839 52.6968
            V40.4412Z
          "
          className="
            transition-colors
            duration-400
          "
          fill={
            active
              ? "#2B3587"
              : "#AEB6FB"
          }
        />

        <path
          d="
            M78.9566 78.9568
            L0 40.4412
            V52.6968
            L78.9566 92.6673
            V78.9568Z
          "
          className="
            transition-colors
            duration-400
          "
          fill={
            active
              ? "#4353D4"
              : "#C8CEFC"
          }
        />
      </svg>
    </button>
  );
}

/* =========================================================
   LABEL
========================================================= */

interface LayerLabelProps {
  label: string;
  active: boolean;
  className?: string;
}

function LayerLabel({
  label,
  active,
  className = "",
}: LayerLabelProps) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        z-50
        -translate-x-1/2
        whitespace-nowrap
        rounded-full
        border
        px-4
        py-[9px]
        text-[14px]
        font-medium
        leading-none

        transition-[background-color,border-color,color,box-shadow]
        duration-300
        ease-out

        ${
          active
            ? `
              border-[#252E78]
              bg-[#252E78]
              text-white
              shadow-[0_6px_16px_rgba(33,41,103,0.18)]
            `
            : `
              border-[#ECEEF5]
              bg-white
              text-[#596071]
              shadow-[0_3px_12px_rgba(23,27,43,0.09)]
            `
        }

        ${className}
      `}
    >
      {label}
    </div>
  );
}