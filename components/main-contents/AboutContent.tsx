"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import BusinessCard from "@/components/business-card/base"
import CopyButton from "@/components/ui/CopyButton";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SiQiita, SiWantedly } from "react-icons/si";
import Circle from "@/components/CircleIcon";

export default function AboutContent() {
  const [content, setContent] = useState("")
  const links = [
    { href: "https://github.com/S6U5", icon: <Github size={28} />, bg: "bg-gray-900 text-white" },
    { href: "https://x.com/EngiAspirantX", icon: <Twitter size={26} />, bg: "bg-sky-500 text-white" },
    { href: "https://www.linkedin.com/in/%E7%9C%9F%E5%90%BE-%E6%B5%A6%E9%87%8E-62a46b389/", icon: <Linkedin size={26} />, bg: "bg-blue-700 text-white" },
    { href: "https://qiita.com/S6U5", icon: <SiQiita size={26} />, bg: "bg-green-500 text-white" },
    { href: "https://www.wantedly.com/id/shingo_urano", icon: <SiWantedly size={26} />, bg: "bg-[#00A4BB] text-white" },
  ];

  useEffect(() => {
    // ✅ public/contents/about.md を読み込む
    fetch("/contents/about-me.md")
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Markdown読み込み失敗:", err))
  }, [])

  return (
    <>
      <BusinessCard
        name="Shingo Urano"
        title="SOC Analyst / SE"
        company="PFU (A RICOH Company)"
        description="Analyzing cyber threats and incidents to protect corporate information assets."
        image="/images/my-icon-bear.png"
        website="https://shingolab.com"
      />
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
      <div className="relative">
        {/* 右上のコピー */}
        <CopyButton
          text={content}
          label="Copy MD"
          className="absolute right-3 top-3"
        />

        {/* 表示はHTML（prose） */}
        <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 mt-4 prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}