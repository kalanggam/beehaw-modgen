import React from "react";

export default function CommunitySelector(props: {
  communityName: string;
  onCommunityNameChange: Function;
}) {
  // TODO Replace with an actual dropdown menu
  return (
    <div className="mb-4 text-center flex flex-row items-end justify-center">
      <span className="font-mono">!</span>
      <div className="text-left">
        <label
          className="text-gray-500 font-normal text-xs align-bottom ml-[0.33rem]"
          htmlFor="community"
        >
          Community URL
        </label>
        <br />
        <input
          type="text"
          className="form-field font-mono mr-1 w-[16ch]"
          id="community"
          name="community"
          placeholder="support"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onCommunityNameChange(e.target.value)
          }
          value={props.communityName}
          autoFocus
        />
      </div>
      <span className="font-mono">@beehaw.org</span>
    </div>
  );
}
