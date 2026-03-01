"use client";

import React, { useEffect } from "react";
import { CountUp } from "@/app/components/countup";

export default function Page() {
  useEffect(() => {
  const html = document.documentElement;

  const prevSnap = html.style.scrollSnapType;
  const prevBehavior = html.style.scrollBehavior;

  html.style.scrollSnapType = "y proximity"; // ✅ not mandatory
  html.style.scrollBehavior = "smooth";

  return () => {
    html.style.scrollSnapType = prevSnap;
    html.style.scrollBehavior = prevBehavior;
  };
}, []);

  return (
    <main>
        <section className="min-h-screen snap-start flex flex-col items-center justify-center">
            <p className="mb-3 text-[300px] font-bold tracking-tighter text-center">
            <CountUp to={313} durationMs={3000} />
            </p>
            <p className="mb-5 text-5xl font-medium tracking-tighter text-center">
            Applications sent
            </p>
        </section>

        <section className="min-h-screen snap-start flex flex-col items-center justify-center">
            <p className="text-[200px] font-medium tracking-tighter leading-none text-center">
                <CountUp to={97} durationMs={5000} className="text-blue-500"/>
            </p>
            <p className="mt-4 text-5xl font-medium tracking-tighter text-center">
                Companies heard back from
            </p>
        </section>

        <section className="min-h-screen snap-start flex flex-col items-center justify-center">
            <p className="mb-10 text-[200px] font-medium tracking-tighter text-center">
            <CountUp to={91} durationMs={5000} className="text-red-500"/> 
            </p>
            <p className="mb-10 text-5xl font-medium tracking-tighter text-center">
                Rejections
            </p>    
        </section>

        <section className="min-h-screen snap-start flex flex-col items-center justify-center">
            <p className="mb-10 text-[200px] font-medium tracking-tighter text-center">
            <CountUp to={6} durationMs={5000} className="text-yellow-500"/>
            </p>
            <p className="mb-10 text-5xl font-medium tracking-tighter text-center">
                Interviews
            </p>    
        </section>

        <section className="min-h-screen snap-start flex flex-col items-center justify-center">
            <p className="mb-10 text-[200px] font-medium tracking-tighter text-center">
            <CountUp to={0} durationMs={5000} className="text-green-500"/>
            </p>
            <p className="mb-10 text-5xl font-medium tracking-tighter text-center">
                Offers
            </p>
        </section>
    </main>
  );
}