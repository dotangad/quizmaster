import React, { useState } from "react";
import data from "~/data/data.json";
import useKeyPress from "~/lib/useKeyPress";
import { LoaderFunction, redirect, useLoaderData } from "remix";

export function meta() {
  return { title: "Quizmaster | Exun 2021-22" };
}

export default function Index() {
  useKeyPress("ArrowLeft", () => {
    window.location.assign(`/`);
  });

  useKeyPress("ArrowRight", () => {
    window.location.assign(`/`);
  });

  return (
    <div className="bg-exun-dark text-white w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-y-8 p-10 overflow-y-auto">
      <img src="/logo.png" alt="Exun Clan" className="h-40 w-auto" />
      <div className="font-extrabold text-6xl">Fin.</div>
      <div className="font-bold text-4xl">Thank you for playing</div>
    </div>
  );
}
