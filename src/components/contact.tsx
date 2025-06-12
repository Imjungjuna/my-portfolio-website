"use client";
import Link from "next/link";

export default function ContactCard() {
  return (
    <div className="bg-sectionBg flex flex-col gap-16 items-center justify-center py-20 md:py-24">
      <p className="w-full text-center text-main text-2xl md:text-3xl md:leading-[1.5] font-semibold leading-normal mb-4 md:mb-6">
        감사합니다
        <br />
        누구나, 언제든지, 무엇이든
        <br />
        편하게 연락주세요
      </p>

      <div className="border-heroBg hover:border-highlight border-2 transform transition hover:scale-[1.03] hover:skew-[1deg] bg-heroBg text-main mx-auto grid grid-cols-3 font-medium text-sm md:text-base gap-2 md:gap-3 p-6 md:p-8 rounded-2xl shadow-lg shadow-white-700/[.8] w-fit">
        <p className="font-semibold">전화번호</p>
        <p className="col-span-2 text-secondary">010.4740.3604</p>
        <p className="font-semibold">이메일</p>
        <p className="col-span-2 text-secondary">dalbichi9801@gmail.com</p>
        <p className="font-semibold">Github</p>
        <Link
          href="https://github.com/Imjungjuna"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 underline text-secondary"
        >
          @imjungjuna
        </Link>
      </div>
    </div>
  );
}
