import React, { useState } from "react";
import data from "~/data/data.json";
import useKeyPress from "~/lib/useKeyPress";
import { LoaderFunction, redirect, useLoaderData } from "remix";
import Media from "~/components/Media";

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
  const [media, setMedia] = useState<boolean>(false);

  useKeyPress("m", () => {
    question.media && setMedia(true);
  });

  useKeyPress("q", () => {
    question.media && setMedia(false);
  });

  return (
    <div className="bg-exun-dark text-white w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-y-12 p-10 overflow-y-auto">
      <div className="font-extrabold text-6xl">{question.qno}</div>
      {media ? (
        <>
          <div className="flex-1 flex items-center">
            <Media
              media={question.media}
              mediaType={question.mediaType}
              className="h-[50vh] w-auto"
            />
          </div>

          <div className="text-sm font-bold text-right w-full">
            Press <code>q</code> to see question
          </div>
        </>
      ) : (
        <>
          <div
            className="text-4xl px-20 leading-[150%]"
            dangerouslySetInnerHTML={{ __html: question.text }}
          />
          {question.media && (
            <div className="text-sm font-bold text-right w-full">
              Press <code>m</code> to see media
            </div>
          )}
        </>
      )}
      <div className="w-full flex items-center justify-center">
        <a
          href={`/${question.qno}/answer`}
          className="bg-white text-exun rounded px-8 py-4 text-md uppercase font-bold shadow-sm"
        >
          View Answer
        </a>
      </div>
    </div>
  );
}
