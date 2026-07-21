"use client";

import React, { useState } from "react";
import { Info, Key, ExternalLink, Settings, Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface GenericToolLayoutProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  requiresApi?: boolean;
  apiLink?: string;
  apiName?: string;
  children: React.ReactNode;
}

export default function GenericToolLayout({
  title,
  description,
  icon = <Sparkles className="w-5 h-5" />,
  requiresApi = false,
  apiLink = "#",
  apiName = "API Key",
  children,
}: GenericToolLayoutProps) {
  const [apiKey, setApiKey] = useState("");
  const [showSettings, setShowSettings] = useState(requiresApi);

  React.useEffect(() => {
    if (requiresApi && apiName) {
      const savedKey = localStorage.getItem(`api_key_${apiName}`);
      if (savedKey) setApiKey(savedKey);
    }
  }, [requiresApi, apiName]);

  const handleKeyChange = (val: string) => {
    setApiKey(val);
    if (requiresApi && apiName) {
      localStorage.setItem(`api_key_${apiName}`, val);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
              {icon}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              {title}
            </h1>
          </div>
          <p className="text-slate-500 max-w-2xl text-sm md:text-base">
            {description}
          </p>
        </div>
        
        {requiresApi && (
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              showSettings 
                ? "bg-slate-800 text-white" 
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <Settings className="w-4 h-4" />
            Cấu hình API
          </button>
        )}
      </div>

      {/* API Settings Panel (if required) */}
      {requiresApi && showSettings && (
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Key className="w-4 h-4 text-amber-500" />
            <h3 className="font-semibold text-slate-800">Cấu hình {apiName}</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => handleKeyChange(e.target.value)}
                placeholder={`Nhập ${apiName} của bạn...`}
                className="w-full pl-4 pr-10 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group relative">
                <Info className="w-4 h-4 cursor-pointer" />
                <div className="absolute bottom-full right-0 mb-2 w-64 bg-slate-800 text-white text-xs p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                  Khóa API của bạn sẽ chỉ được lưu trữ cục bộ trên trình duyệt (Local Storage) để đảm bảo an toàn.
                </div>
              </div>
            </div>
            <a 
              href={apiLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
            >
              Lấy API <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
