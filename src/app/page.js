import PostCard from "@/components/Postcard";
import React from "react";

const Page = () => {
  const truncateText = (text, maxLetters) => {
    if (text.length <= maxLetters) {
      return text;
    } else {
      return text.slice(0, maxLetters) + "...read more";
    }
  };
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.
Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Nam nec ante. Sed lacinia, urna non`;
  return (
    <div>
      <h1 className="post-title ">Recent Posts</h1>
      <div className="flex flex-wrap md:flex-row gap-4 justify-center posts-container">
        <div className="duration-300 shadow-md hover:shadow-2xl">
          <PostCard contentText={truncateText(longText, 80)} />
        </div>
        <div className=" duration-300 shadow-md hover:shadow-xl">
          <PostCard contentText={truncateText(longText, 80)} />
        </div>
      </div>
    </div>
  );
};

export default Page;
