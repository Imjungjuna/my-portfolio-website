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
    <div className="min-h-screen bg-heroBg overflow-x-hidden w-full text-main px-5 md:px-8 lg:px-10 relative">
      <div className="flex-col max-w-[1340px] mx-auto">
        {/* Profile Section */}
        <div className="space-y-8 hidden ">
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
        <div className="bg-sectionBg/50 transition transform border-heroBg hover:border-highlight border-2 rounded-xl justify-center w-full py-8 mt-8 mb-16 md:mt-12 md:mb-24 lg:mb-32">
          <h2 className="text-tertiary text-sm md:text-base w-max mx-auto tracking-tight mb-[6px] leading-[1.5] font-semibold">
            기술 스택 및 도구
          </h2>
          <p className="text-2xl text-center text-main break-keep mb-6 sm:mb-10 leading-[32px] font-semibold">
            아래의 기술을 사용할 수 있습니다.
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
          <h2 className="text-tertiary text-sm md:text-base w-max mx-auto tracking-tight mb-[6px] leading-[1.5] font-semibold">
            핵심 역량
          </h2>
          <p className="text-2xl text-center text-main break-keep mb-6 sm:mb-10 leading-[1.4] tracking-tight font-semibold max-w-max mx-auto">
            <span className="hidden md:inline">
              사용자 중심의 철학을 바탕으로,
            </span>
            견고한 기술력 위에 직관적인 경험을 담아냅니다.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {competencies.map((competencies) => (
              <div
                key={competencies.id}
                className="transition transform hover:scale-[1.03] hover:shadow-2xl hover:skew-1 bg-sectionBg border-heroBg border-2 hover:border-highlight pt-2 pb-8 rounded-md flex-grow-1"
              >
                <h3 className="text-xl font-bold text-main mb-4 p-4 my-2 text-center">
                  {competencies.title}
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {competencies.details.map((detail, index) => (
                    <li
                      className="mb-2 list-disc pl-1 ml-8 pr-4 font-medium lg:text-base md:text-sm text-base text-secondary"
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
          <h2 className="text-tertiary text-sm md:text-base w-max mx-auto tracking-tight mb-[6px] leading-[1.5] font-semibold">
            주요 프로젝트
          </h2>
          <p className="text-2xl text-center text-main break-keep mb-8 sm:mb-12 leading-[1.4] tracking-tight font-semibold max-w-max mx-auto">
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
                  className="border-heroBg hover:border-highlight border-2 hover:skew-1 hover:cursor-pointer transform transition w-full h-fit bg-sectionBg rounded-md md:rounded-lg flex flex-col justify-between gap-6 md:gap-0 overflow-hidden hover:scale-[1.03] duration-300"
                >
                  <div className="hidden sm:block w-full aspect-4/3 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill={true}
                    />
                  </div>
                  <div className="p-5 md:p-6 ">
                    <h3 className="text-lg md:text-xl text-main font-semibold md:mb-4 no-underline!important">
                      {project.title}
                    </h3>
                    <div className="text-secondary font-medium mb text-sm mb-4">
                      {project.description.split(",").map((line, index) => (
                        <p
                          className="truncate whitespace-nowrap overflow-hidden"
                          key={index}
                        >
                          {line.trim()}
                        </p>
                      ))}
                    </div>

                    <div className="text-main flex gap-2 items-center">
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
      </div>
    </div>
  );
}
