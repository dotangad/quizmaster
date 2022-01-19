import React, { useEffect, useState } from "react";
import { LoaderFunction, useLoaderData } from "remix";

import data from "~/data/data";

export function meta() {
  return { title: "Quizmaster | Exun 2021-22" };
}

export const loader: LoaderFunction = () => {
  const questions = data.map((x) => ({ qno: x.qno }));

  return { questions: questions ?? [] };
};

export default function Index() {
  const { questions } = useLoaderData();
  const [visits, setVisits] = useState<Number[]>();

  useEffect(() => {
    const raw = window.localStorage.getItem("visits");
    console.log(raw);
    setVisits(JSON.parse(raw) ?? []);
  }, []);

  const visit = (qno: Number) => {
    setVisits((v) => {
      const nv = Array.from(new Set([...v, qno]).values());
      nv.sort();
      window.localStorage.setItem("visits", JSON.stringify(nv));
      return nv;
    });
  };

  const unvisit = (qno: Number) => {
    setVisits((v) => {
      const nv = v.filter((x) => x != qno);
      nv.sort();
      window.localStorage.setItem("visits", JSON.stringify(nv));
      return nv;
    });
  };

  return (
    <div className="text-exun w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-y-10 p-10">
      <div className="flex justify-between items-center w-full">
        <img src="/logo.png" alt="Exun Clan" className="h-12 w-auto" />
        <div
          className="bg-exun text-white rounded shadow-sm px-8 py-4 text-md uppercase font-bold cursor-pointer"
          onClick={() => {
            window.localStorage.setItem("visits", "[]");
            setVisits([]);
          }}
        >
          Reset
        </div>
        <div className="font-extrabold text-xl">Junior Quiz Finals</div>
      </div>
      <div className="flex-1 w-full grid grid-cols-6 gap-10 px-20">
        {questions.map(({ qno }, i) => (
          <div
            className={`text-white shadow-sm rounded flex items-center justify-center py-8 cursor-pointer transition ${
              (visits ?? []).includes(Number(qno))
                ? "bg-gray-400"
                : "bg-exun hover:shadow-lg hover:scale-110"
            }`}
            key={i}
            onClick={(e) =>
              (visits ?? []).includes(qno) ? unvisit(qno) : visit(qno)
            }
          >
            <span className="font-extrabold text-6xl">{qno}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
