"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  category?: "content" | "index" | "image" | "other";
}

export default function ToolCard({
  title,
  description,
  href,
  icon,
  badge,
  category = "content",
}: ToolCardProps) {
  const getCategoryStyles = () => {
    switch (category) {
      case "content":
        return {
          iconBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
          borderHover: "hover:border-blue-200 hover:shadow-blue-500/5",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-100",
        };
      case "index":
        return {
          iconBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
          borderHover: "hover:border-emerald-200 hover:shadow-emerald-500/5",
          badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
        };
      case "image":
        return {
          iconBg: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
          borderHover: "hover:border-purple-200 hover:shadow-purple-500/5",
          badgeBg: "bg-purple-50 text-purple-700 border-purple-100",
        };
      case "other":
      default:
        return {
          iconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
          borderHover: "hover:border-amber-200 hover:shadow-amber-500/5",
          badgeBg: "bg-amber-50 text-amber-700 border-amber-100",
        };
    }
  };

  const styles = getCategoryStyles();

  return (
    <Link
      href={href}
      className="group relative flex flex-col p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
    >
      <div className="flex items-start justify-between gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
        >
          {icon}
        </div>

        {/* Badge */}
        {badge && (
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20"
          >
            {badge}
          </span>
        )}
      </div>

      <div className="mt-5 flex-1">
        <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center gap-1.5">
          {title}
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 border border-transparent rounded-2xl pointer-events-none transition-colors group-hover:border-primary/20" />
    </Link>
  );
}
