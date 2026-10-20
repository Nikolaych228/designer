"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

interface WorkWaveHandoffVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

// Вспомогательная функция для определения MIME-типа по расширению
const getVideoType = (url: string) => {
  const extension = url.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'mov':
      return 'video/quicktime';
    case 'webm':
      return 'video/webm';
    case 'ogg':
      return 'video/ogg';
    case 'mp4':
    default:
      return 'video/mp4';
  }
};

export function WorkWaveHandoffVideo({
  src,
  poster,
  className = "",
}: WorkWaveHandoffVideoProps) {
  const videoRef =
    useRef<HTMLVideoElement>(null);

  const shouldPlayRef =
    useRef(false);

  const [shouldLoad, setShouldLoad] =
    useState(false);

  const videoType = getVideoType(src);

  /* Загружаем видео только при приближении к viewport */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: "300px 0px",
          threshold: 0,
        },
      );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* Запускаем только когда видео реально видно */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          const shouldPlay =
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.45;

          shouldPlayRef.current =
            shouldPlay;

          if (shouldPlay) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        {
          threshold: [
            0,
            0.25,
            0.45,
            0.75,
            1,
          ],
        },
      );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  const handleCanPlay = () => {
    const video = videoRef.current;

    if (
      !video ||
      !shouldPlayRef.current
    ) {
      return;
    }

    video.play().catch(() => {});
  };

  return (
    <div
      className={`
        overflow-hidden
        rounded-[24px]
        bg-[#fff]
        ${className}
      `}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="none"
        poster={poster}
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        onCanPlay={handleCanPlay}
        className="
            pointer-events-none
            block
            h-full
            w-full
            select-none
        "
        >
        {shouldLoad && (
            <source
            src={src}
            type={videoType}
            />
        )}
      </video>
    </div>
  );
}