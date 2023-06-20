import React, { useState } from "react";
import ThreadMerge from "./threadgen/ThreadMerge";
import ThreadLock from "./threadgen/ThreadLock";
import ThreadRemove from "./threadgen/ThreadRemove";
import CommentRemove from "./threadgen/CommentRemove";

export default function ThreadTab(props: { communityName: string }) {
  const [currentGen, setCurrentGen] = useState<string>("ThreadMerge");

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentGen(e.target.value);
  };

  function getGenerator(gen: string) {
    switch (gen) {
      case "ThreadMerge":
        return <ThreadMerge communityName={props.communityName} />;
      case "ThreadLock":
        return <ThreadLock communityName={props.communityName} />;
      case "ThreadRemove":
        return <ThreadRemove communityName={props.communityName} />;
      case "CommentRemove":
        return <CommentRemove communityName={props.communityName} />;
      default:
        break;
    }
  }

  return (
    <div>
      <h2>Thread Generators</h2>
      <div>
        <div>
          <label className="text-gray-500 text-xs align-bottom ml-1">
            Select a generator
          </label>
          <br />
          <select
            name="threadgens"
            id="thread-gen-select"
            onChange={selectChange}
            defaultValue="ThreadMerge"
            className="form-field font-sans text-md bg-white"
          >
            <option className="italic" value="" disabled>
              Select a generator
            </option>
            <option value="ThreadMerge">Merge thread</option>
            <option value="ThreadLock">Lock thread</option>
            <option value="ThreadRemove">Remove thread</option>
            <option value="CommentRemove">Remove comment</option>
          </select>
        </div>
        <div className="mt-4 p-4 border rounded-md border-gray-300 bg-white">
          {currentGen && getGenerator(currentGen)}
        </div>
      </div>
    </div>
  );
}
