import Image from "next/image";
import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ArrowPosition = "left" | "right" | "both";

// Общие пропсы для обоих вариантов
type BaseProps = {
  children: ReactNode;
  arrow?: ArrowPosition | false;
  disabled?: boolean;
  className?: string;
};

// Пропсы, когда это кнопка
type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

// Пропсы, когда это ссылка
type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

// Объединяем их
type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  arrow = false,
  className,
  disabled,
  type = "button",
  href,
  ...props
}: ButtonProps) {
  const styles = cn(
    `
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-full
      bg-[#4E61F6]
      px-8
      py-4
      text-[18px]
      leading-[24px]
      text-white
      transition-[background-color,box-shadow,transform]
      duration-200
      ease-out

      hover:bg-[#3745AF]

      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[#5B47F5]
      focus-visible:ring-offset-2

      active:scale-[0.98]
      active:bg-[#2B3587]

      disabled:pointer-events-none
      disabled:bg-[#E6E7EB]
      disabled:text-[#A8ABB3]
      disabled:shadow-none
    `,
    disabled &&
      `
        pointer-events-none
        bg-[#E6E7EB]
        text-[#A8ABB3]
        shadow-none
      `,
    className,
  );

  const content = (
    <>
      {(arrow === "left" || arrow === "both") && (
        <Image
          src="/icons/arrow-left.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
        />
      )}

      <span>{children}</span>

      {(arrow === "right" || arrow === "both") && (
        <Image
          src="/icons/arrow-tr.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type as "button" | "submit" | "reset"}
      disabled={disabled}
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}