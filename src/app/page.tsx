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
    <main className="flex flex-col w-full place-items-center p-1 sm:p-4">
      <div className="w-full lg:w-3/4 xl:w-2/3 align-center bg-gray-100 rounded-2xl shadow-xl border border-gray-400">
        <header className="text-center m-4">
          <h1>Beehaw Mod Gen</h1>
          <em className="text-2xl font-extralight">
            Moderation Text Generator
          </em>
          <CommunitySelector
            communityName={communityName}
            onCommunityNameChange={setCommunityName}
          />
        </header>

        {/* TODO Use @radix-ui/react-label to replace form labels*/}

        <GeneratorTabs
          defaultValue="threadTab"
          rows={[
            {
              value: "threadTab",
              name: "Threads",
              content: <ThreadTab communityName={communityName} />,
            },
            {
              value: "userTab",
              name: "Users",
              content: <UserTab communityName={communityName} />,
            },
            {
              value: "communityTab",
              name: "Communities",
              content: <CommunityTab communityName={communityName} />,
            },
          ]}
        />
      </div>
      <footer className="mt-8 mb-4 text-xs text-gray-500 flex gap-4">
        <p>version 0.1</p>
        <div>|</div>
        <p>created with ❤️ by gil</p>
      </footer>
    </main>
  );
}
