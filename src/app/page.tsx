"use client";
// React
import { useState } from "react";

// Custom Components
import ThreadTab from "../components/ThreadTab";
import UserTab from "../components/UserTab";
import CommunityTab from "../components/CommunityTab";
import CommunitySelector from "../components/CommunitySelector";
import GeneratorTabs from "../components/GeneratorTabs";

export default function Home() {
  const [communityName, setCommunityName] = useState<string>("support");

  return (
    <main className="flex flex-col w-full place-items-center p-10">
      <div className="w-full md:w-3/4 lg:w-1/2 align-center bg-gray-100 rounded-2xl shadow-xl border border-gray-400">
        <header className="text-center m-5">
          <h1 className="text-2xl">Beehaw Mod Gen</h1>
          <em className="text-sm font-light">Moderation Text Generator</em>
        </header>

        <CommunitySelector
          communityName={communityName}
          onCommunityNameChange={setCommunityName}
        />

        <GeneratorTabs
          defaultValue="threadTab"
          rows={[
            {
              value: "threadTab",
              name: "Threads",
              content: <ThreadTab communityName="{communityName}" />,
            },
            {
              value: "userTab",
              name: "Users",
              content: <UserTab communityName="{communityName}" />,
            },
            {
              value: "communityTab",
              name: "Communities",
              content: <CommunityTab communityName="{communityName}" />,
            },
          ]}
        />
      </div>
      <footer className="mt-10 mb-5 text-xs text-gray-500 flex gap-3">
        <div>version 0.1</div>
        <div>|</div>
        <div>
          created with <span className="not-italic">❤️</span> by gil
        </div>
      </footer>
    </main>
  );
}
