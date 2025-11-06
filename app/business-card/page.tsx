"use client";

import BusinessCard from "@/components/business-card/base";


import { Github, Linkedin, Twitter } from "lucide-react";
import { SiQiita, SiWantedly } from "react-icons/si";
import Circle from "@/components/CircleIcon";




export default function MyCardPage() {
  const links = [
    { href: "https://github.com/S6U5", icon: <Github size={28} />, bg: "bg-gray-900 text-white" },
    { href: "https://x.com/your_id", icon: <Twitter size={26} />, bg: "bg-sky-500 text-white" },
    { href: "https://www.linkedin.com/in/your_id", icon: <Linkedin size={26} />, bg: "bg-blue-700 text-white" },
    { href: "https://qiita.com/your_id", icon: <SiQiita size={26} />, bg: "bg-green-500 text-white" },
    { href: "https://www.wantedly.com/id/your_id", icon: <SiWantedly size={26} />, bg: "bg-[#00A4BB] text-white" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-sky-50 p-6">
      {/* ✅ 名刺カード */}
      <BusinessCard
        name="Shingo Urano"
        title="SOC Analyst / Developer"
        company="PFU (A RICOH Company)"
        description="Creating secure and creative systems. Focused on backend, Docker, and modern web stacks."
        image="/images/profile.jpg"
        email="shingo@example.com"
        website="https://github.com/S6U5"
      />

      {/* ✅ カード下に改行（margin-topで余白） */}
      <div className="mt-8 flex flex-wrap gap-5 justify-center">
        {links.map((link) => (
          <Circle
            key={link.href}
            href={link.href}
            size={70}
            bgColor={link.bg}
            borderColor="border-transparent"
          >
            {link.icon}
          </Circle>
        ))}
      </div>
    </main>
  );
}