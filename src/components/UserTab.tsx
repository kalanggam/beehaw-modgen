export default function UserTab(props: { communityName: string }) {
  return (
    <div>
      <h1>
        This is the &lsquo;UserTab&rsquo; component for{" "}
        <code>!{props.communityName}@beehaw.org</code>
      </h1>
    </div>
  );
}
