"use client";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useEffect } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    console.log("모달 열림, 스크롤 잠금!");
    document.body.style.overflow = "hidden";

    return () => {
      console.log("모달 닫힘, 스크롤 해제!");
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="bg-black/30 inset-0 fixed z-5"
      onClick={() => router.back()}
    >
      <div
        className="w-[min(95vw,480px)] sm:w-120 h-120 md:w-180 md:h-160 fixed inset-0 z-10 m-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 m-8 bg-transparent hover:cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <X className="size-8 text-black opacity-45 hover:opacity-80" />
        </button>
        {children}
      </div>
    </div>
  );
}
