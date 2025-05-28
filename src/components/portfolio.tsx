"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { skills } from "@/lib/skills";
import { competencies } from "@/lib/competency";
import { projects } from "@/lib/projects";
import { stackIcons } from "@/lib/stackIcons";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black/80 text-white p-4 md:p-8 lg:p-12">
      <div className="flex-col max-w-[1340px] mx-auto">
        {/* Profile Section */}
        <div className="space-y-8 hidden">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image
              src="@/public/placeholder.svg"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-mono">임정준</h1>
              <p className="text-gray-400">웹 프로덕트 디자이너/개발자</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              시각적으로 매력적이고 사용자 친화적인 디지털 경험을 만드는 것이 제
              전문 분야입니다. 심미성과 기능성의 조화를 추구하며, 웹 디자인
              분야에서 혁신적인 ux/ui로 아이디어를 현실로 구현합니다.{" "}
            </p>
            <Button variant="outline" className="rounded-full">
              나에 관해서
            </Button>
          </div>
        </div>

        {/* Stack Section */}
        <div className="bg-white rounded-xl justify-center w-full py-8 mt-8 mb-16 md:mt-12 md:mb-24 lg:mb-32">
          <h2 className="text-yellow-500 text-sm md:text-base w-max mx-auto tracking-tight mb-[6px] leading-[1.5] font-semibold">
            기술 스택 및 도구
          </h2>
          <p className="text-2xl text-center text-gray-700 break-keep mb-6 sm:mb-10 leading-[1.4] tracking-tight font-semibold max-w-max mx-auto">
            아래<span className="hidden sm:inline">의</span> 기술을 사용할 수
            있습니다.
          </p>
          <div className="mx-auto flex flex-wrap gap-3 md:gap-4 max-w-96 md:max-w-screen justify-center">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="relative group flex justify-center hover:shadow-md rounded-md hover:scale-[1.05] duration-200"
              >
                <Image
                  src={skill.Icon}
                  alt={`${skill.name} 아이콘`}
                  width={48}
                  height={48}
                  className="size-12"
                />
                <div
                  className="absolute bottom-full mb-2 px-3 py-1.5 text-sm 
                         bg-gray-800 text-white rounded-md shadow-lg
                         invisible opacity-0 group-hover:visible group-hover:opacity-100 
                         transition-all duration-300 whitespace-nowrap"
                >
                  {skill.name}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competency Section */}
        <div className="max-w-full mx-auto pt-16 pb-24 md:pt-20 md:pb-32 lg:pb-40">
          <h2 className="text-yellow-500 text-sm md:text-base w-max mx-auto tracking-tight mb-[6px] leading-[1.5] font-semibold">
            핵심 역량
          </h2>
          <p className="text-2xl text-center text-gray-700 break-keep mb-6 sm:mb-10 leading-[1.4] tracking-tight font-semibold max-w-max mx-auto">
            <span className="hidden md:inline">
              사용자 중심의 철학을 바탕으로,
            </span>
            견고한 기술력 위에 직관적인 경험을 담아냅니다.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {competencies.map((competencies) => (
              <div
                key={competencies.id}
                className="bg-white border-4 border-amber-300 text-black pt-2 pb-8 rounded-md flex-grow-1"
              >
                <h3 className="text-xl font-bold text-red-300 mb-4 p-4 my-2 text-center">
                  {competencies.title}
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {competencies.details.map((detail, index) => (
                    <li
                      className="mb-2 list-disc pl-1 ml-8 pr-4 lg:text-base md:text-sm text-base text-stone-700"
                      key={index}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <section className="max-w-full mx-auto pt-16 pb-24 md:pt-20 md:pb-32 lg:pb-40">
          <h2 className="text-yellow-500 text-sm md:text-base w-max mx-auto tracking-tight mb-[6px] leading-[1.5] font-semibold">
            주요 프로젝트
          </h2>
          <p className="text-2xl text-center text-gray-200 break-keep mb-8 sm:mb-12 leading-[1.4] tracking-tight font-semibold max-w-max mx-auto">
            <span className="hidden md:inline">
              기술적 고민과 해결 과정을 담은,
            </span>
            주요 프로젝트와 세부 사항을 살펴보세요.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                scroll={false}
              >
                <div
                  key={project.id}
                  className="hover:cursor-pointer w-full h-fit bg-background border-none rounded-md md:rounded-lg flex flex-col justify-between gap-6 md:gap-0 overflow-hidden hover:scale-[1.05] duration-200"
                >
                  <div className="w-full aspect-4/3 bg-amber-300 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill={true}
                    />
                  </div>
                  <div className="p-5 md:p-6 ">
                    <h3 className="text-lg md:text-xl text-black font-semibold md:mb-4 no-underline!important">
                      {project.title}
                    </h3>
                    <div className="text-black/60 mb text-sm font-normal mb-4">
                      {project.description.split(",").map((line, index) => (
                        <p
                          className="truncate whitespace-nowrap overflow-hidden"
                          key={index}
                        >
                          {line.trim()}
                        </p>
                      ))}
                    </div>

                    <div className="text-black flex gap-2 items-center">
                      {project.stacks.map((stackName) => {
                        const iconSrc = stackIcons[stackName];
                        return (
                          <Image
                            key={stackName}
                            src={iconSrc}
                            alt={stackName}
                            className="size-6 rounded-xs"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact and Clients Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Section */}
          {/* <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <h2 className="text-2xl font-mono mb-4">Contact</h2>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
              >
                <span className="sr-only">Contact me</span>→
              </Button>
            </section> */}

          {/* Happy Clients Section
            <section className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-4xl font-bold mb-4">100%</h3>
              <p className="text-gray-400">Happy Clients</p>
              <div className="flex -space-x-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg"
                    alt={`Client ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-gray-900"
                  />
                ))}
              </div>
            </section> */}
        </div>
      </div>
    </div>
  );
}
