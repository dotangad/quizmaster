import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import useKeyPress from "~/lib/useKeyPress";

export function loader({ request }) {
  return {
    redirectTo: new URL(request.url).searchParams.get("redirectTo") ?? "/",
  };
}

export default function () {
  const { redirectTo } = useLoaderData();

  useKeyPress("ArrowRight", () => {
    window.location.assign(redirectTo);
  });

  return (
    <div className="text-exun w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-y-10 p-10">
      <div className="flex justify-between items-center w-full">
        <img src="/logo.png" alt="Exun Clan" className="h-12 w-auto" />
        <div className="font-extrabold text-xl">Junior Quiz Finals</div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-6xl text-exun font-extrabold">Safety Slide</div>
      </div>
    </div>
  );
}
