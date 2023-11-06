import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface FormProps {
  placeholder: string;
}

const Form: React.FC<FormProps> = ({ placeholder }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
        <div className="newpost-content__profileAndInput">
          <div className="newpost-content__profileAndInput__text">
            <Image
              src="/images/sidebar/profile.png"
              alt="Logo"
              width={40}
              height={35}
            />
            <textarea name="" id="" placeholder={placeholder}></textarea>
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
            <button>Make a post</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
