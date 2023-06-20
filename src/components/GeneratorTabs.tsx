// React
import React from "react";

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
    <Tabs.TabsTrigger className="nav-tab" value={row.value} key={row.value}>
      {row.name}
    </Tabs.TabsTrigger>
  ));

  const tabsContent = props.rows.map((row) => (
    <Tabs.TabsContent className="p-4" value={row.value} key={row.value}>
      {row.content}
    </Tabs.TabsContent>
  ));

  return (
    <Tabs.Root
      defaultValue={props.defaultValue}
      className="bg-gray-100 rounded-b-2xl"
    >
      <Tabs.List
        className="grid grid-cols-3 gap-1 mx-auto w-11/12 sm:w-3/4 md:w-1/2 shadow-inner nav-tab-list"
        aria-label="Generate moderation text"
      >
        {tabs}
      </Tabs.List>

      {tabsContent}
      {props.children}
    </Tabs.Root>
  );
}
