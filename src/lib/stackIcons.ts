import type { StaticImageData } from "next/image";

import HTML5Icon from "@/assets/stack/HTML5.svg";
import CSS3Icon from "@/assets/stack/CSS3.svg";
import JavaScriptIcon from "@/assets/stack/JavaScript.svg";
import ReactIcon from "@/assets/stack/React.svg";
import TypeScriptIcon from "@/assets/stack/TypeScript.svg";
import NextjsIcon from "@/assets/stack/Nextjs.svg";
import TailwindCSSIcon from "@/assets/stack/TailwindCSS.svg";
import Godot4Icon from "@/assets/stack/GodotEngine.svg";
import SolidityIcon from "@/assets/stack/Solidity.svg";
import SpringBootIcon from "@/assets/stack/SpringBoot.svg";
import Supabase from "@/assets/stack/Supabase.svg";

export const stackIcons: { [key: string]: StaticImageData } = {
  HTML5: HTML5Icon,
  CSS3: CSS3Icon,
  JavaScript: JavaScriptIcon,
  React: ReactIcon,
  TypeScript: TypeScriptIcon,
  "Next.js": NextjsIcon,
  "Tailwind CSS": TailwindCSSIcon,
  "Godot Engine": Godot4Icon,
  Solidity: SolidityIcon,
  "Spring Boot": SpringBootIcon,
  Supabase: Supabase,
};
