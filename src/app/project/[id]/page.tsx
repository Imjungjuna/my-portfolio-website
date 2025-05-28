import { projects } from "@/lib/projects";
import Image from "next/image";
import { stackIcons } from "@/lib/stackIcons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const paramInString = await params.id;
  const projectId = parseInt(paramInString, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    // 적절한 'Not Found' UI를 보여주는 것이 좋습니다.
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {project.title}시발
          </h1>
          <div className="flex gap-3 mb-8">
            {project.stacks.map((stackName) => {
              const iconSrc = stackIcons[stackName];
              return (
                <Image
                  key={stackName}
                  src={iconSrc}
                  alt={stackName}
                  className="size-10 rounded"
                />
              );
            })}
          </div>
          <div className="prose lg:prose-xl max-w-none text-gray-800">
            {project.description.split(",").map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/#projects">
              {" "}
              {/* 포트폴리오의 프로젝트 섹션으로 돌아가기 */}
              <Button variant="outline">포트폴리오로 돌아가기</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
