"use client";
import Link from "next/link";

export default function ContactCard() {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-24">
      <p className="w-full text-center text-2xl md:text-3xl md:leading-[1.5] font-semibold leading-normal mb-4 md:mb-6">
        감사합니다
        <br />
        누구나, 언제든지, 무엇이든
        <br />
        편하게 연락주세요
      </p>

      <div className="bg-gray-600 mx-auto grid grid-cols-3 text-sm md:text-base gap-2 md:gap-3 p-6 md:p-8 rounded-2xl shadow-lg shadow-slate-700/[.8] w-fit">
        <p className="font-semibold">전화번호</p>
        <p className="col-span-2">010.4740.3604</p>
        <p className="font-semibold">이메일</p>
        <p className="col-span-2">dalbichi9801@gmail.com</p>
        <Link
          href="https://github.com/Imjungjuna"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          Github
        </Link>
        <p className="col-span-2 underline">@imjungjuna</p>
      </div>
    </div>
  );
}
