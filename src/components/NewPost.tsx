import React from "react";
import Image from "next/image";

const NewPost = () => {
  return (
    <section className="newpost-section">
      <div className="newpost-content">
        <div className="newpost-content__profileAndInput">
          <Image
            src="/images/sidebar/profile.png"
            alt="Logo"
            width={40}
            height={35}
          />
          <textarea name="" id="" placeholder="What's happening?"></textarea>
        </div>

        <div className="newpost-content__insertAndPost">
          <div className="newpost-content__insertAndPost__insert">
            <span>
              <Image
                src="/images/newPost/image.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </span>

            <span>
              <Image
                src="/images/newPost/gif.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </span>

            <span>
              <Image
                src="/images/newPost/vote.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </span>

            <span>
              <Image
                src="/images/newPost/smiley.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </span>

            <span>
              <Image
                src="/images/newPost/plan.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </span>

            <span>
              <Image
                src="/images/newPost/pin.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div className="newpost-content__insertAndPost__post">
            <button>Make a post</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
