// React
import React, { Children } from "react";

// Radix UI Primitives
import * as Tabs from "@radix-ui/react-tabs";

export default function GeneratorTabs(props: {
  defaultValue: string;
  rows: {
    value: string;
    name: string;
    content: React.ReactNode;
  }[];
  children?: React.ReactNode;
}) {
  const tabs = props.rows.map((row) => (
    <>
      <Tabs.TabsTrigger
        className="h-full uppercase rounded-3xl text-gray-600 
        data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900
        data-[state=active]:border data-[state=active]:border-gray-400"
        value={row.value}
      >
        {row.name}
      </Tabs.TabsTrigger>
    </>
  ));

  const tabsContent = props.rows.map((row) => (
    <>
      <Tabs.TabsContent className="p-5" value={row.value}>
        {row.content}
      </Tabs.TabsContent>
    </>
  ));

  return (
    <Tabs.Root
      defaultValue={props.defaultValue}
      className="bg-gray-100 rounded-b-2xl"
    >
      <Tabs.List
        className="grid grid-cols-3 gap-1 mx-auto w-11/12 md:w-3/4 h-10 p-1 bg-gray-300 text-xs rounded-3xl"
        aria-label="Generate moderation text"
      >
        {tabs}
      </Tabs.List>
      {tabsContent}
      {props.children}
    </Tabs.Root>
  );
}
