import ThreadGenSwitcher from "./ThreadGenSwitcher";

export default function ThreadTab(props: { communityName: string }) {
  return (
    <div>
      <h1>
        This is the &lsquo;ThreadGen&rsquo; component for{" "}
        <code>!{props.communityName}@beehaw.org</code>
      </h1>
      &nbsp;

      <ThreadGenSwitcher communityName={props.communityName} />

    </div>
  );
}
