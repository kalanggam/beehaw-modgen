import React, { useState } from "react";
import ThreadMerge from "./threadgen/ThreadMerge";

export default function ThreadGenSwitcher(props: {
  communityName: string
}) {
  const [currentGen, setCurrentGen] = useState<string>("ThreadMerge");

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentGen(e.target.value);
  };

  function getGenerator(gen: string) {
    switch (gen) {
      case "ThreadMerge":
        return (
          <ThreadMerge communityName={props.communityName} />
        )
      default:
        break;
    }
  }

  return (
    <div>
      <h2>ThreadGenSwitcher</h2>

      <select
        name="threadgens"
        id="thread-gen-select"
        onChange={selectChange}
        defaultValue="ThreadMerge"
      >
        <option value="ThreadMerge">Merge thread</option>
        <option value="ThreadLock">Lock thread</option>
        <option value="ThreadRemove">Remove thread</option>
        <option value="CommentRemove">Remove comment</option>
      </select>
      
      <div>{currentGen && <em>{getGenerator(currentGen)}</em>}</div>
    </div>
  );
}
