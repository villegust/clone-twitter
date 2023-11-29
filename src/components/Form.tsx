import React, { useState, ChangeEvent, useCallback } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import usePost from "@/hooks/usePost";

import axios from "axios";
import Button from "./Button";
import Avatar from "./Avatar";

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts(postId as string);
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";

      await axios.post(url, {
        body,
      });

      setBody("");
      mutatePosts();
      mutatePost();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, mutatePost, isComment, postId]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <section className="newpost-section">
      <div className="newpost-content">
        {currentUser ? (
          <>
            <div className="newpost-content__profileAndInput">
              <div className="newpost-content__profileAndInput__text">
                <Avatar userId={currentUser.id} />
                <textarea
                  disabled={isLoading}
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                  name="newPost"
                  id="newPost"
                  placeholder={placeholder}
                ></textarea>
              </div>
              {imagePreview && (
                <div className="newpost-content__profileAndInput__image-preview">
                  <img src={imagePreview} alt="Image Preview" />
                  <button
                    onClick={() => {
                      setImagePreview(null);
                    }}
                  >
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </div>
              )}
            </div>

            <div className="newpost-content__insertAndPost">
              <div className="newpost-content__insertAndPost__insert">
                <label htmlFor="imageUpload">
                  <i>
                    <Image
                      src="/images/newPost/image.svg"
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </i>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>

                <label>
                  <i>
                    <Image
                      src="/images/newPost/gif.svg"
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </i>
                </label>

                <label>
                  <i>
                    <Image
                      src="/images/newPost/vote.svg"
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </i>
                </label>

                <label>
                  <i>
                    <Image
                      src="/images/newPost/smiley.svg"
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </i>
                </label>

                <label>
                  <i>
                    <Image
                      src="/images/newPost/plan.svg"
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </i>
                </label>

                <label>
                  <i>
                    <Image
                      src="/images/newPost/pin.svg"
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </i>
                </label>
              </div>
              <div className="newpost-content__insertAndPost__post">
                <Button
                  disabled={isLoading || !body}
                  onClick={onSubmit}
                  label={isComment ? "Comment" : "Make a post"}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="loged-out-new-post">
            <h1>Welcome to Twitter</h1>

            <div className="loged-out-new-post__buttons">
              <Button label="Login" onClick={loginModal.onOpen} />
              <Button
                label="Register"
                onClick={registerModal.onOpen}
                secondary
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Form;
