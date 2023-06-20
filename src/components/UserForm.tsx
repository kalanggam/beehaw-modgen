export default function UserForm(props: { communityName: string }) {
  return (
    <div>
      <h1>
        This is the &lsquo;UserForm&rsquo; component for{" "}
        <code>!{props.communityName}@beehaw.org</code>
      </h1>
    </div>
  );
}
