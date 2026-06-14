"use client";

import React from "react";
import { Card, Button } from "@heroui/react";
import { ShieldKeyhole, ArrowLeft, House, PersonWorker } from "@gravity-ui/icons";
import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <main className="w-full min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-16 px-4 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* 🌌 Background Decorative Mesh / Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full mx-auto relative z-10 animate-fade-in">
        <Card className="w-full bg-zinc-900/40 border border-zinc-800/80 p-8 sm:p-10 rounded-[24px] backdrop-blur-xl text-center shadow-2xl flex flex-col items-center">
          
          {/* 🚨 Animated Security Shield Cross Badge */}
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 relative">
            <ShieldKeyhole size={30} />
            <span className="absolute inset-0 rounded-full border border-amber-500/30 animate-ping opacity-20 scale-105" />
          </div>

          {/* Error Headers */}
          <div className="space-y-2 mb-6">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Error 403: Forbidden
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-2">
              Action Prohibited
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mx-auto">
              Your account identity does not possess the administrative privileges required to read this resource zone.
            </p>
          </div>

          <hr className="w-full border-zinc-800/60 mb-6" />

          {/* Help Center Info Box */}
          <div className="w-full text-left bg-zinc-950/40 border border-zinc-800/40 rounded-xl p-4 space-y-2 mb-8">
            <p className="text-xs text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-medium">Why am I seeing this?</span> This secure control perimeter is strictly restricted to platform admins. Ordinary candidate or recruiter dashboard sessions cannot execute logic triggers here.
            </p>
          </div>

          {/* 🛠️ Action Routing Controls (Fixed Next.js 16 Button-Link Layout Sync) */}
          <div className="flex flex-col gap-3 w-full">
            <Link href="/dashboard" className="w-full">
              <Button
                color="primary"
                className="w-full h-11 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-semibold tracking-wide transition-all shadow-lg shadow-purple-500/10 flex items-center justify-center gap-2"
              >
                <PersonWorker size={16} />
                Return to My Dashboard
              </Button>
            </Link>
            
            <div className="grid grid-cols-2 gap-3 w-full">
              <Button
                as="a"
                href="javascript:history.back()"
                variant="bordered"
                className="w-full h-11 border-zinc-800 text-zinc-300 hover:bg-zinc-800/60 hover:text-white rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5"
              >
                <ArrowLeft size={14} />
                Go Back
              </Button>
              
              <Link href="/" className="w-full">
                <Button
                  variant="bordered"
                  className="w-full h-11 border-zinc-800 text-zinc-300 hover:bg-zinc-800/60 hover:text-white rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                >
                  <House size={14} />
                  Home
                </Button>
              </Link>
            </div>
          </div>

        </Card>
      </div>
    </main>
  );
}