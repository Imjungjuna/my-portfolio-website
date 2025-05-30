import ComitFrontend from "@/assets/project/comit_frontend.png";
import CAMS from "@/assets/project/cams.png";
import Game from "@/assets/project/game.png";
import SKKUFestival from "@/assets/project/skku-festival.png";
import type { StaticImageData } from "next/image"; // 이 부분을 추가하세요.

export interface Project {
  id: number;
  title: string;
  longTitle?: string; // 선택적 속성으로 변경
  date: string;
  description: string;
  image: StaticImageData;
  member: string;
  stacks: string[];
  githubUrl: string;
  deployUrls: { [key: string]: string };
  details: { [key: string]: string[] };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "교내 동아리 홍보 사이트",
    longTitle: "코딩동아리 신규모집 홍보용, 정적 웹사이트 개발",
    date: "2025.02 ~ 2025.03",
    description:
      "홍보부스 시 사용할 홍보 사이트 제작., 네트워킹 및 외부 단체와의 교류에도 활용",
    image: ComitFrontend,
    member: "1명",
    stacks: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/skku-comit/comit.main-frontend.git",
    deployUrls: { "코밋 홈페이지": "https://comit-main-frontend.vercel.app/" },
    details: {
      "반응형 사용자 인터페이스 및 핵심 레이아웃 개발": [
        "페이지별 레이아웃에 재사용 가능한 UI 요소 만들어 명확한 컴포넌트 기반 아키텍처로 애플리케이션 구조화",
        "유틸리티 우선 스타일링 Tailwind CSS를 활용하여 빠르게 반응형 인터페이스 개발, 간편한 유지 보수 및 사용자 정의 화면 크기 및 테마 속성 구성",
        "인터랙티브 드롭다운 컴포넌트 구현",
      ],
      "동적 콘텐츠 및 인터랙티브 기능 구현": [
        "Framer Motion을 사용하여 페이지 전환, 리스트 아이템 표시 및 스크롤 트리거 숫자 카운팅 애니메이션과 같은 사용자 상호 작용 및 애니메이션 제작",
        "TechMarquee와 같은 사용자 정의 UI 컴포넌트 정의, 지속적인 스크롤 효과를 통해 기술 스택 섹션을 동적으로 전시",
      ],
      "코드 품질, 최적화 및 도구 설정": [
        "애플리케이션을 TypeScript로 개발하여 코드 품질과 유지보수성 보장, 컴포넌트와 데이터 구조 전반에 걸쳐 강력한 통일성 보장",
        "일관된 코드 스타일 적용, 가독성 향상, 개발 초기 단계에서 잠재적 오류 포착을 위해 ESLint 및 Prettier 설정 및 구성",
        "모의 데이터를 별도 디렉토리 내에 구성하여 UI 컴포넌트와 데이터 소스 간의 명확한 분리",
      ],
    },
  },
  {
    id: 2,
    title: "코딩동아리 관리시스템",
    longTitle: "대학교 코딩동아리 활동관리,웹 프론트엔드 개발",
    date: "2024.06 ~ 2025.05",
    description:
      "스터디 커뮤니티 활동관리시스템 제작., 스터디 일정 관리 등의 기능 포함",
    image: CAMS,
    member: "5명 (FE 2, BE 2, INFRA 1)",
    stacks: ["TypeScript", "Next.js", "Tailwind CSS", "Spring Boot"],
    githubUrl: "https://github.com/skku-comit/comit-website.git",
    deployUrls: {
      "목업 버전": "https://comit-ams-git-main-jungjuns-projects.vercel.app/",
      "상용 링크": "https://comit-cams.vercel.app/",
    },
    details: {
      "스터디 플랫폼 개발": [
        "스터디 목록 조회, 개설, 상세 정보 확인 및 스터디 별 세부 페이지 개발",
        "Zod, React Hook Form 활용한 회원가입 페이지 구성",
        "Nextjs의 서버 액션 활용하여 라이브러리 없이 로그인 세션 관리",
      ],

      "UI 일관성 및 반응형 디자인": [
        "Tailwind CSS 및 shadcn/ui 기반 UI 컴포넌트 활용",
        "공통 레이아웃 컴포넌트 개발 및 HeightPopulatedDiv를 사용한 푸터의 동적 높이 관리",
        "Framer Motion을 활용한 애니메이션 효과 적용",
      ],
      "코드 품질 및 협업 환경": [
        "ESLint, Prettier를 통한 코드 스타일 및 품질 관리",
        "GitHub 이슈 및 PR 템플릿을 통한 협업 프로세스 표준화",
        "타입 안정성을 위한 TypeScript 기반 프로젝트 구성 및 절대 경로 별칭(@/*) 설정",
      ],
    },
  },
  {
    id: 3,
    title: "디앱 리듬게임",
    longTitle: "Godot4 게임 엔진을 활용한, 웹 리듬게임 제작",
    date: "2025.04 ~",
    description:
      "블록체인 기술을 접목한 리듬게임 프로젝트., 게임엔진 개발 & 프론트엔드 담당",
    image: Game,
    member: "3명 (FE 1, BE 1, PM 1)",
    stacks: [
      "TypeScript",
      "React",
      "HTML5",
      "Godot Engine",
      "Solidity",
      "Supabase",
    ],
    githubUrl: "https://github.com/web3-rhythm-game/nextjs-godot4.git",
    deployUrls: {
      "플레이 링크": "https://naver.com",
    },
    details: {
      "Godot 게임 엔진 연동": [
        "Godot 엔진 웹 빌드 파일 사용하여 Next.js 환경에 Godot 게임 빌드 통합",
        "iframe 대신 script 태그 동적 로딩 및 Engine 클래스 직접 실행 방식을 통해 Godot 엔진 인스턴스 관리",
        "Godot 엔진 로딩 상태 관리 및 UI 피드백, 컴포넌트 마운트/언마운트 시 Godot 엔진 스크립트 로드 및 정리 로직 작성",
      ],

      "Next.js와 Godot 엔진 간의 양방향 통신 인터페이스 구축": [
        "Next.js → Godot: window.getSongDataForGodot 함수를 window 객체에 노출시켜 Godot 스크립트에서 호출, 게임에 필요한 곡 정보 전달",
        "Godot → Next.js: window.handleGameResults 함수를 window 객체에 노출시켜 Godot 게임 결과를 JSON 문자열 형태로 Next.js에 전달받아 처리",
        "Web3 연동 및 백엔드 작업은 백엔드 개발자 분이 담당",
      ],
      "Godot 엔진 기반 핵심 게임 로직 및 시스템 개발": [
        "GDScript(언어)를 활용하여 동적 레벨 에디터, 타이밍 기반 스코어 및 콤보 핵심 게임 로직 구현",
        "노트 낙하 및 물리 제어, UI 요소 및 점수 표시, 게임 이벤트 중앙 관리",
      ],
    },
  },
  {
    id: 4,
    title: "성균관대학교 축제 사이트",
    longTitle: "성균관대학교 축제 웹사이트, SEO 최적화",
    date: "2025.05 ~",
    description:
      "축제 정보 일원화를 위한 웹사이트 제작., 모바일용 ux 최적화와 seo 향상",
    image: SKKUFestival,
    member: "1명",
    stacks: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Imjungjuna/skku-festival.git",
    deployUrls: {
      "웹사이트 링크": "https://daum.net",
    },
    details: {
      "UI 시스템 구축 및 주요 컴포넌트 개발": [
        "Tailwind CSS 활용, Shadcn/ui 기반 UI 라이브러리 도입",
        "clsx 및 tailwind-merge 유틸리티 함수 활용, 동적이고 조건부적인 스타일 클래스 효율적 적용",
        "모바일 ux 고려",
      ],

      "애플리케이션 레이아웃 및 테마 관리": [
        "next-themes 라이브러리 이용해 라이트/다크 모드 테마 기능 구현",
        "tailwind.config.ts 파일을 통한 프로젝트 맞춤형 디자인 토큰(색상, 여백, 글꼴, 애니메이션 등) 정의 및 전역적 스타일 일관성 확보",
      ],
      "검색 엔진 최적화 (SEO) 기반 구축": [
        "서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 기능 활용",
        "metadata 객체를 통해 웹사이트 전역 메타 태그 설정 및 관리",
        "동적 사이트맵 생성, robots.txt 최적화, 구조화된 데이터 마크업 활용",
      ],
    },
  },
];
