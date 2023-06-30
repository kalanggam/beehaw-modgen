import React, { useState } from "react";

export default function CommentRemove(props: { communityName: string }) {
  const [removeReason, setRemoveReason] = useState("");
  const [isPlural, setIsPlural] = useState(false);
  const [isChain, setIsChain] = useState(false);

  const reasonChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRemoveReason(e.target.value);
  };

  const pluralChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPlural(e.target.checked);
  };

  const chainChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChain(e.target.checked);
  };

  return (
    <div>
      <h3 className="sm:text-center">Remove comment/chain</h3>
      <div className="mb-2 text-center flex flex-row flex-wrap gap-4 items-end sm:justify-center">
        <div className="text-left grow max-w-xs">
          <label className="text-gray-500 text-xs align-bottom ml-1">
            Reason
          </label>
          <br />
          <textarea
            className="text-sm form-field mr-1 w-full resize-none"
            placeholder="Reason"
            value={removeReason}
            onChange={reasonChanged}
            rows={3}
          />
        </div>
      </div>
      <div className="mb-2 text-center flex flex-row flex-wrap gap-4 items-end sm:justify-center">
        <div className="mb-[0.125rem]">
          {/* TODO Use @radix-ui/react-checkbox instead */}
          <input
            type="checkbox"
            id="plural"
            name="plural"
            className="hover:cursor-pointer"
            checked={isPlural}
            onChange={pluralChanged}
          />
          <label
            className="text-gray-500 text-sm pl-2 select-none hover:cursor-pointer"
            htmlFor="plural"
          >
            Use plural
          </label>
        </div>
        <div className="mb-[0.125rem]">
          {/* TODO Use @radix-ui/react-checkbox instead */}
          <input
            type="checkbox"
            id="megathread"
            name="megathread"
            className="hover:cursor-pointer"
            checked={isChain}
            onChange={chainChanged}
          />
          <label
            className="text-gray-500 text-sm pl-2 select-none hover:cursor-pointer"
            htmlFor="megathread"
          >
            Comment chain
          </label>
        </div>
      </div>
      <code className="block p-2">
        Howdy! You may&apos;ve noticed that we&apos;ve removed {(isPlural && <>some</>) || <>a</>}{" "}
        comment{isChain && <> chain</>}
        {isPlural && <>s</>} in this thread
        {(removeReason && (
          <>
            &nbsp;for {removeReason}.
            <br />
            <br />
            As a reminder, Beehaw aspires to have a safe, friendly, and nice
            community. Please be mindful of this while participating.
          </>
        )) || (
          <>
            . As a reminder, Beehaw aspires to have a safe, friendly, and nice
            community. Please be mindful of this while participating.
          </>
        )}
        <br />
        <br />
        Thank you,&nbsp;&nbsp;
        <br />— [!{props.communityName}@beehaw.org](/c/{props.communityName}
        @beehaw.org) Moderation Team
      </code>
    </div>
  );
}
