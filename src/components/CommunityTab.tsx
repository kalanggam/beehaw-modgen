export default function CommunityTab(props: { communityName: string }) {
  return (
    <div>
      <h1>
        This is the &lsquo;CommunityTab&rsquo; component for{" "}
        <code>!{props.communityName}@beehaw.org</code>
      </h1>
    </div>
  );
}
