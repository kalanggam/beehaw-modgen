import React, { useState } from "react";

export default function ThreadRemove(props: { communityName: string }) {
  const [removeReason, setRemoveReason] = useState("");

  const reasonChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRemoveReason(e.target.value);
  };

  return (
    <div>
      <h3 className="sm:text-center">Remove thread</h3>
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
      <code className="block p-2">
        Howdy! We&apos;re removing this thread
        {(removeReason && (
          <>
            &nbsp;for {removeReason}.
            <br />
            <br />
            If you have any questions or concerns about this action, please
            message a moderator or administrator.
          </>
        )) || (
          <>
            . This might happen if we&apos;re moving discussions to megathreads,
            pruning threads which don&apos;t fit in this community, or deleting
            threads which do not fit our community ethos. If you have any
            questions or concerns about this action, please message a moderator
            or administrator.
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
