"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex-col gap-8 max-w-[1290px] mx-auto">
        <div className="space-y-8 hidden">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg"
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

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Stack Section */}
          <section className="bg-blue-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Stack</h2>
              <Button variant="ghost" size="icon" className="text-white">
                <span className="sr-only">View all tools</span>→
              </Button>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 bg-white rounded-xl" />
              ))}
            </div>
          </section>
          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Projects</h2>
              <Button variant="ghost" size="icon">
                <span className="sr-only">View all projects</span>→
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/placeholder.svg"
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Contact and Clients Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Section */}
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <h2 className="text-2xl font-mono mb-4">Contact</h2>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
              >
                <span className="sr-only">Contact me</span>→
              </Button>
            </section>

            {/* Happy Clients Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-4xl font-bold mb-4">100%</h3>
              <p className="text-gray-400">Happy Clients</p>
              <div className="flex -space-x-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg"
                    alt={`Client ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-gray-900"
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
