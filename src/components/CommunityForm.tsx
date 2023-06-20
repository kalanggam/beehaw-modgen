interface CommunityProps {
  communityName: string;
}

export default function CommunityForm(props: { communityName: string }) {
  return (
    <div>
      <h1>
        This is the &lsquo;CommunityForm&rsquo; component for{" "}
        <code>!{props.communityName}@beehaw.org</code>
      </h1>
    </div>
  );
}
