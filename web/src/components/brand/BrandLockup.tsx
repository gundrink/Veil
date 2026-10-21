import Image from "next/image";

import { APP_LOGO_SRC, APP_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  markClassName?: string;
  showWord?: boolean;
  priority?: boolean;
};

export function BrandLockup({
  className,
  markClassName,
  showWord = true,
  priority = false,
}: BrandLockupProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={APP_LOGO_SRC}
        alt={showWord ? "" : APP_NAME}
        width={36}
        height={36}
        className={cn("h-9 w-9 object-cover", markClassName)}
        priority={priority}
      />
      {showWord ? (
        <span className="text-[1.15rem] font-semibold tracking-[-0.05em] text-[var(--brand-ink-deep)]">{APP_NAME}</span>
      ) : null}
    </span>
  );
}
