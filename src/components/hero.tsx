"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate); //애니메이션 처리 메인 로직
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-heroBg relative h-screen w-full overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-transparent"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-8 text-4xl text-headline sm:text-5xl font-bold tracking-tighter md:text-7xl lg:text-6xl leading-[1.2]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          안녕하세요, <br />
          프론트엔드 개발자
          <br /> <span className="text-highlight">임정준</span>입니다.
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-sm font-medium text-paragraph sm:text-lg break-keep mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          브랜드 정체성과 핵심 가치를 고려하지 않은 인터페이스는{" "}
          <span className="font-semibold">&apos;껍데기&apos;</span>입니다.{" "}
          <br className="hidden sm:block" />
          좋은 UX/UI는 제품의 핵심 가치를 <br className="sm:hidden" />
          사용자가 자연스레 체감하게 만
          <span className="sm:hidden">드는 것이어야 합니다.</span>
          <span className="hidden sm:inline">듭니다.</span> <br />
          React/Next.js를 사용하여 웹을 개발하고 있습니다.
        </motion.p>
        <motion.div
          className="max-w-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="relative flex items-center gap-2 cursor-pointer font-bold bg-button text-buttonText text-sm md:text-base rounded-[3px] tracking-tight py-3 px-6">
            <span className="relative leading-none top-[1px]">
              {/* line-height: 1; (leading-none)을 사용하면 줄 간격이 폰트 크기(예: 14px)와 동일하게 설정됩니다. 하지만 모든 폰트에는 폰트 디자인 자체에 포함된 고유한 상단 및 하단 공간(ascenders and descenders)이 있습니다. 이 공간은 폰트 파일 자체에 내재된 메트릭스로, 텍스트가 줄 안에서 어떻게 정렬될지 결정합니다. line-height: 1;을 적용하더라도, 폰트 디자인 때문에 텍스트의 실제 시각적 바운딩 박스가 line-height로 정의된 1em(여기서는 14px)보다 약간 위로 삐져나올 수 있습니다. 특히 한글 폰트에서 이러한 현상이 더 두드러지게 나타날 수 있습니다. */}
              이력서 다운로드
            </span>
            <Download className="size-4" strokeWidth={3} color="#fffffe" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
