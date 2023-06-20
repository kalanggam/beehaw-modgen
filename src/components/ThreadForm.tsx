export default function ThreadForm(props: { communityName: string }) {
  return (
    <div>
      <h1>
        This is the &lsquo;ThreadForm&rsquo; component for{" "}
        <code>!{props.communityName}@beehaw.org</code>
      </h1>
      &nbsp;
      <div className="bg-gray-700 text-white p-2 rounded-md">
        <code>
          Howdy! To help wrangle this topic into one hive, we will be locking
          this thread. Please direct new discussion to [this
          thread](https://beehaw.com/post/).
          <br />
          <br />
          Thank you and **Beehaw!**&nbsp;&nbsp;
          <br />— !{props.communityName}@beehaw.org Moderation Team
        </code>
      </div>
      &nbsp;
      <div className="bg-gray-700 text-white p-2 rounded-md">
        <code>
          Howdy! We&apos;re wrangling other threads about this topic into this hive.
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
    </div>
  );
}
