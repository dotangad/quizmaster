import React, { useState } from "react";
import data from "~/data/data.json";
import useKeyPress from "~/lib/useKeyPress";
import { LoaderFunction, redirect, useLoaderData } from "remix";

export function meta() {
  return { title: "Quizmaster | Exun 2021-22" };
}

export const loader: LoaderFunction = ({ params }) => {
  const { qno } = params;
  if (qno === "0") return redirect("/");

  const question = data.find((q) => q.qno == qno);

  if (!question) {
    return redirect(`/fin`);
  }

  return { question };
};

export default function Index() {
  const { question } = useLoaderData();

  useKeyPress("ArrowRight", () => {
    window.location.assign(`/`);
  });

  return (
    <div className="bg-exun-dark text-white w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-y-10 p-10 overflow-y-auto">
      <div className="font-extrabold text-6xl">{question.qno}</div>
      <div
        className="text-4xl px-20"
        dangerouslySetInnerHTML={{ __html: question.answer.text }}
      />
      {question.answer.media && (
        <div className="flex-1 flex items-center">
          <img
            src={question.answer.media}
            alt="media"
            className="h-[65vmin] w-auto"
          />
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <a
          href={`/`}
          className="bg-white text-exun rounded px-8 py-4 text-md uppercase font-bold shadow-sm"
        >
          Back to Grid
        </a>
      </div>
    </div>
  );
}
