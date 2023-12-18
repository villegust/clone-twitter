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
  const [postImage, setPostImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";

      await axios.post(url, {
        body,
        postImage,
      });

      setBody("");
      setPostImage("");

      mutatePosts();
      mutatePost();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, mutatePost, isComment, postId]);

  // image upload
  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Invalid result type from FileReader"));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      try {
        const imageDataUrl = await readFileAsDataURL(file);
        setPostImage(imageDataUrl);
      } catch (error) {
        console.error("Error reading image:", error);
        setPostImage(""); // Reset image in case of an error
      }
    } else {
      setPostImage("");
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
              {postImage && (
                <div className="newpost-content__profileAndInput__image-preview">
                  <img src={postImage} alt="Image Preview" />
                  <button
                    onClick={() => {
                      setPostImage("");
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
