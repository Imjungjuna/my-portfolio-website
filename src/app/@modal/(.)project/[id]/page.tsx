import { projects } from "@/lib/projects";
import Image from "next/image";
import { stackIcons } from "@/lib/stackIcons";
import { Modal } from "@/components/ui/modal";

export default async function ProjectModal({
  params,
}: {
  params: { id: string };
}) {
  const paramInString = await params;

  const projectId = parseInt(paramInString.id, 10);
  const project = projects.find((p) => p.id === projectId);
  console.log("십라");
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
  console.log("프로젝트를 찾");

  return (
    <Modal>
      <div className="p-8 bg-white rounded-lg max-w-4xl w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {project.title}
        </h2>
        <div className="flex gap-2 mb-6">
          {project.stacks.map((stackName) => {
            const iconSrc = stackIcons[stackName];
            return (
              <Image
                key={stackName}
                src={iconSrc}
                alt={stackName}
                className="size-8 rounded-sm"
              />
            );
          })}
        </div>
        <div className="text-gray-700 space-y-2">
          {project.description.split(",").map((line, index) => (
            <p key={index}>{line.trim()}</p>
          ))}
        </div>
      </div>
    </Modal>
  );
}
