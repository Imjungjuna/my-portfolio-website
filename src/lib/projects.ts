import ComitFrontend from "@/assets/project/comit_frontend.png";
import CAMS from "@/assets/project/cams.png";
import Game from "@/assets/project/game.png";
import SKKUFestival from "@/assets/project/skku-festival.png";
import type { StaticImageData } from "next/image"; // 이 부분을 추가하세요.

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: StaticImageData;
  type: "Personal" | "Team" | "Featured";
  stacks: string[];
  githubUrl?: string;
  deployUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "교내 동아리 홍보 사이트",
    date: "2025.02 ~ 2025.04",
    description:
      "홍보부스 시 사용할 홍보 사이트 제작., 네트워킹 및 외부 단체와의 교류에도 활용",
    image: ComitFrontend,
    type: "Personal",
    stacks: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "#",
    deployUrl: "#",
  },
  {
    id: 2,
    title: "코딩동아리 관리시스템",
    date: "2024.06 ~ 2025.05",
    description:
      "스터디 커뮤니티 활동관리시스템 제작., 스터디 일정 관리 등의 기능 포함",
    image: CAMS,
    type: "Featured",
    stacks: ["TypeScript", "Next.js", "Tailwind CSS", "Spring Boot"],
    githubUrl: "#",
    deployUrl: "#",
  },
  {
    id: 3,
    title: "디앱 리듬게임",
    date: "2025.04 ~",
    description:
      "블록체인 기술을 접목한 리듬게임 프로젝트., 게임엔진 개발 & 프론트엔드 담당",
    image: Game,
    type: "Personal",
    stacks: [
      "TypeScript",
      "React",
      "HTML5",
      "Godot Engine",
      "Solidity",
      "Supabase",
    ],
    githubUrl: "#",
    deployUrl: "#",
  },
  {
    id: 4,
    title: "성균관대학교 축제 웹사이트",
    date: "2025.05 ~",
    description:
      "축제 정보 일원화를 위한 웹사이트 제작., 모바일용 ux 최적화와 seo 향상",
    image: SKKUFestival,
    type: "Personal",
    stacks: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "#",
    deployUrl: "#",
  },
];
