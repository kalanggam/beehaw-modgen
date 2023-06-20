import React, { useState } from "react";

// TODO: Thread merging
export default function ThreadMerge(props: { communityName: string }) {
  const [isMegathread, setIsMegathread] = useState(false);

  return (
    <div className="mt-4">
      <div>
        <input type="checkbox" /> <label className="text-gray-500 text-sm ml-1">Megathread</label>
      </div>
      <div className="mb-4 text-center flex flex-row flex-wrap gap-4 items-end justify-center">
        <div className="text-left grow">
          <label className="text-gray-500 text-xs align-bottom ml-1">
            Send users to
          </label>
          <br />
          <input
            className="font-mono form-field mr-1 w-full"
            type="text"
            placeholder="https://beehaw.com/post/######"
          />{" "}
        </div>
        <div className="text-left grow">
          <label className="text-gray-500 text-xs align-bottom ml-1">
            Source thread
          </label>
          <br />
          <input
            className="font-mono form-field mr-1 w-full"
            type="text"
            placeholder="https://beehaw.com/post/######"
          />{" "}
        </div>
      </div>
      <code className="block p-2">
        Howdy! To help wrangle this topic into one hive, we will be locking this
        thread. Please direct new discussion to [this
        thread](https://beehaw.com/post/).
        <br />
        <br />
        Thank you and **Beehaw!**&nbsp;&nbsp;
        <br />— !{props.communityName}@beehaw.org Moderation Team
      </code>
      &nbsp;
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
        <br />— !{props.communityName}@beehaw.org Moderation Team
      </code>
    </div>
  );
}

// TODO: Megathread checkbox

// TODO: Link/author list

// TODO: Far-future: Make link/author list use Lemmy API
