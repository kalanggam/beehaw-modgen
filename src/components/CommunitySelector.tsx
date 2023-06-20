import React from "react";

export default function CommunitySelector(props: {
  communityName: string;
  onCommunityNameChange: Function;
}) {
  // TODO Replace with an actual dropdown menu
  return (
    <div className="my-5 text-center">
      <label
        className="text-gray-900 font-normal text-xs align-[1px]"
        htmlFor="community"
      >
        Community:
      </label>{" "}
      <code>!</code>
      <input
        type="text"
        className="font-mono border rounded-md px-1 mr-1 border-gray-400 w-[16ch]"
        id="community"
        name="community"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onCommunityNameChange(e.target.value)
        }
        value={props.communityName}
      />
      <code>@beehaw.org</code>
    </div>
  );
}
