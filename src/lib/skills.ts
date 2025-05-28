import type { StaticImageData } from "next/image";
import { stackIcons } from "./stackIcons";

const mySkillNames = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Next.js",
  "Godot Engine",
  "Solidity",
];

export interface Skill {
  id: number;
  name: string;
  Icon: StaticImageData;
}

export const skills: Skill[] = mySkillNames.map((skillName, index) => ({
  id: index + 1,
  name: skillName,
  Icon: stackIcons[skillName],
}));
