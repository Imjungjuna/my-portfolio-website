import Image from "next/image";
import profilePic from "../assets/about/profile.jpg";

export default function About() {
  return (
    <div className="w-full items-center px-5 md:px-8 lg:px-10 relative max-w-[1300px] mx-auto pt-16 pb-24 md:pb-32">
      <div className="relative flex items-stretch gap-6 md:gap-10 lg:gap-28 flex-col md:flex-row pt-16">
        {/* Profile Image */}
        <div className="flex">
          <div className="w-[min(80vw,26rem)] mx-auto md:w-[22rem] aspect-2/3 relative">
            <Image
              src={profilePic}
              alt="Frontend Developer Profile"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 px-6 md:px-0 py-30 flex flex-col items-start justify-start">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-gray-300 text-lg leading-[2] break-keep">
            프론트엔드의 핵심은 “인터페이스, 인터렉션, 최적화”로 요약된다고
            믿습니다. <br />
            서비스 정체성을 고려하지 않은 인터페이스는 ’껍데기’일 뿐이고, 깊이가
            부족한 인터렉션은 UX를 악화하고 결국 사용자 감소로 이어질 것입니다.{" "}
            <br />
            그렇기에 웹을 단순 매개체가 아닌 서비스 본연의 가치와 교감하는
            경험으로 만들어내고자 합니다. 데이터 기반의 UI/UX 개선과 더불어
            서비스의 본질을 사로잡은 UI/UX를 구현하겠습니다. 나아가 AEO, RAG,
            MCP 등 AI 패러다임에 대한 깊은 이해를 토대로 AI 기술의 잠재력을
            서비스에 융합할 수 있도록 매진하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
