"use client";

import BusinessCard from "@/components/business-card/base";


import { Github, Linkedin, Twitter } from "lucide-react";
import { SiQiita, SiWantedly } from "react-icons/si";
import Circle from "@/components/CircleIcon";




export default function MyCardPage() {
  const links = [
    { href: "https://github.com/S6U5", icon: <Github size={28} />, bg: "bg-gray-900 text-white" },
    { href: "https://x.com/EngiAspirantX", icon: <Twitter size={26} />, bg: "bg-sky-500 text-white" },
    { href: "https://www.linkedin.com/in/%E7%9C%9F%E5%90%BE-%E6%B5%A6%E9%87%8E-62a46b389/", icon: <Linkedin size={26} />, bg: "bg-blue-700 text-white" },
    { href: "https://qiita.com/S6U5", icon: <SiQiita size={26} />, bg: "bg-green-500 text-white" },
    { href: "https://www.wantedly.com/id/shingo_urano", icon: <SiWantedly size={26} />, bg: "bg-[#00A4BB] text-white" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-sky-50 p-6">
      {/* ✅ 名刺カード */}
      <BusinessCard
        name="Shingo Urano"
        title="SOC Analyst / SE"
        company="PFU (A RICOH Company)"
        description="Analyzing cyber threats and incidents to protect corporate information assets."
        image="/images/my-icon-bear.png"
        // email="shingo@example.com"
        website="https://shingolab.com"
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