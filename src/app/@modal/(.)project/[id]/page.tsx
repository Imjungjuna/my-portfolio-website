import { projects } from "@/lib/projects";
import Image from "next/image";
import { stackIcons } from "@/lib/stackIcons";
import { Modal } from "@/components/ui/modal";
import Link from "next/link";
import { splitText } from "@/lib/utils";

export default async function ProjectModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramInString = await params;

  const projectId = parseInt(paramInString.id, 10);
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    console.log("프로젝트를 찾을 수 없습니다.");
    return (
      <Modal>
        <div className="p-8 bg-white rounded-lg max-w-4xl w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project not found
          </h2>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <div className="bg-white rounded-md size-full p-6 md:p-8 overflow-y-auto">
        <div className="w-full flex flex-col gap-3 md:gap-6">
          <p className="mt-[2px] text-xl md:text-2xl font-semibold leading-normal break-keep mb-4">
            {splitText(project.longTitle || project.title)}
          </p>
          <div className="flex gap-6 flex-wrap">
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm font-medium text-foreground/50">
                프로젝트 설명{" "}
              </p>
              <p className="text-sm font-semibold text-foreground/80">
                {splitText(project.description)}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground/50">
                기술 스택
              </p>
              <div className="flex gap-2">
                {project.stacks.map((stackName) => {
                  const iconSrc = stackIcons[stackName];
                  return (
                    <Image
                      key={stackName}
                      src={iconSrc}
                      alt={stackName}
                      className="size-6 rounded-sm"
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground/50">기간</p>
              <p className="text-sm font-semibold text-foreground/80">
                {project.date}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground/50">인원</p>
              <p className="text-sm font-semibold text-foreground/80">
                {project.member}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm font-medium text-foreground/50">
                관련 링크
              </p>
              <div className="flex gap-2">
                {Object.entries(project.deployUrls).map(([name, url]) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm font-semibold text-foreground/80 hover:opacity-70"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] min-h-[1px] bg-foreground/10 my-10 md:my-12"></div>
        <div className="text-sm md:text-base flex flex-col gap-3">
          <p className="font-semibold text-lg">세부 정보</p>
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            {Object.entries(project.details).map(
              ([title, descriptions], index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-sm md:text-base tracking-tight font-normal mb-3 break-keep">
                    {index + 1}. {title}
                  </h3>
                  <ul className="space-y-1.5">
                    {descriptions.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-foreground/80 font-normal tracking-tight flex text-sm md:text-base break-keep"
                      >
                        <span className="mr-4 md:mr-6 pl-2 md:pl-4">•</span>{" "}
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
