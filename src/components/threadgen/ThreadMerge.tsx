import React, { useState } from "react";

export default function ThreadMerge(props: { communityName: string }) {
  const [destThread, setDestThread] = useState("");
  const [isMegathread, setIsMegathread] = useState(false);

  const destThreadChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestThread(e.target.value);
  };

  const megathreadChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMegathread(e.target.checked);
  };

  return (
    <div>
      <h3 className="sm:text-center">Merge thread</h3>
      <div className="mb-2 text-center flex flex-row flex-wrap gap-4 items-end sm:justify-center">
        <div className="text-left grow max-w-xs">
          <label className="text-gray-500 text-xs align-bottom ml-1">
            Send users to
          </label>
          <br />
          <input
            className="font-mono form-field mr-1 w-full"
            type="text"
            placeholder="https://beehaw.org/post/######"
            id="destthread"
            name="destthread"
            value={destThread}
            onChange={destThreadChanged}
          />
        </div>
        <div className="mb-[0.125rem]">
          {/* TODO Use @radix-ui/react-checkbox instead */}
          <input
            type="checkbox"
            id="megathread"
            name="megathread"
            className="hover:cursor-pointer"
            checked={isMegathread}
            onChange={megathreadChanged}
          />
          <label
            className="text-gray-500 text-sm pl-2 select-none hover:cursor-pointer"
            htmlFor="megathread"
          >
            Megathread
          </label>
        </div>
      </div>
      <code className="block p-2">
        Howdy! To help wrangle this topic and keep the hive clean, we&apos;ll be locking this
        thread. We encourage you to direct new discussion to [this&nbsp;
        {isMegathread && "mega"}thread](
        {(destThread && destThread) || <>https://beehaw.org/post/######</>}).
        <br />
        <br />
        Thank you and **Beehaw!**&nbsp;&nbsp;
        <br />— [!{props.communityName}@beehaw.org](/c/{props.communityName}
        @beehaw.org) Moderation Team
      </code>
      <div className="flex flex-row sm:justify-center">
        <div className="text-left grow max-w-xs mb-2">
          <label className="text-gray-500 text-xs align-bottom ml-1">
            Source thread
          </label>
          <br />
          <input
            className="font-mono form-field mr-1 w-full"
            type="text"
            placeholder="https://beehaw.org/post/######"
          />
        </div>
      </div>
      <code className="block p-2">
        Howdy! We&apos;re wrangling other threads about this topic into this
        hive.
        <br />
        * [**Post 1**](post_link) by [**user@instance**](user_link)
        <br />
        * [**Post 2**](post_link) by [**user@instance**](user_link)
        <br />
        * [**Post 3**](post_link) by [**user@instance**](user_link)
        <br />
        <br />
        Thank you and **Beehaw!**&nbsp;&nbsp;
        <br />— [!{props.communityName}@beehaw.org](/c/{props.communityName}
        @beehaw.org) Moderation Team
      </code>
    </div>
  );
}

// TODO: Link/author list

// TODO: Far-future: Make link/author list use Lemmy API
