import React, { useState } from "react";

export default function ThreadLock(props: { communityName: string }) {
  const [lockReason, setLockReason] = useState("");

  const reasonChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLockReason(e.target.value);
  };

  return (
    <div>
      <h3 className="sm:text-center">Lock thread</h3>
      <div className="mb-2 text-center flex flex-row flex-wrap gap-4 items-end sm:justify-center">
        <div className="text-left grow max-w-xs">
          <label className="text-gray-500 text-xs align-bottom ml-1">
            Reason
          </label>
          <br />
          <textarea
            className="text-sm form-field mr-1 w-full resize-none"
            placeholder="Reason"
            value={lockReason}
            onChange={reasonChanged}
            rows={3}
          />
        </div>
      </div>
      <code className="block p-2">
        Howdy! We&apos;re locking this thread
        {(lockReason && (
          <>
            &nbsp;with the following reason:
            <br />
            &gt; *{lockReason}*
            <br />
            <br />
            If you have any questions or concerns about this action, please
            message a moderator or administrator.
          </>
        )) || (
          <>
            . This might happen if we&apos;re moving discussions to megathreads,
            archiving old announcements, or closing threads which don&apos;t
            necessarily fit our community ethos. If you have any questions or
            concerns about this action, please message a moderator or
            administrator.
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
