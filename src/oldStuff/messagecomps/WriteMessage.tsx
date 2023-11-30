// import React, { useState, ChangeEvent } from "react";
// import Image from "next/image";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

// const Message = ({ pageName }: any) => {
//   const [messageImagePreview, setMessageImagePreview] = useState<string | null>(
//     null
//   );

//   const handleMessageImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files && e.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.result && typeof reader.result === "string") {
//           setMessageImagePreview(reader.result);
//         }
//       };

//       reader.readAsDataURL(file);
//     } else {
//       setMessageImagePreview(null);
//     }
//   };
//   return (
//     <div
//       className={
//         pageName === "message" ? "message-content" : "box-message-content"
//       }
//     >
//       <div
//         className={
//           pageName === "message"
//             ? "message-content__test"
//             : "box-message-content__test"
//         }
//       >
//         {messageImagePreview && (
//           <div
//             className={
//               pageName === "message"
//                 ? "message-content__test__image-preview"
//                 : "box-message-content__test__image-preview"
//             }
//           >
//             <img src={messageImagePreview} alt="Image Preview" />
//             <button
//               onClick={() => {
//                 setMessageImagePreview(null);
//               }}
//             >
//               <FontAwesomeIcon icon={faX} />
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="message-bar">
//         <div className="message-icon">
//           <label htmlFor="messageImageUpload">
//             <i>
//               <Image
//                 src="/images/newPost/image.svg"
//                 alt="Logo"
//                 width={20}
//                 height={20}
//               />
//             </i>
//             <input
//               type="file"
//               id="messageImageUpload"
//               accept="image/*"
//               onChange={handleMessageImageChange}
//             />
//           </label>

//           <label>
//             <i>
//               <Image
//                 src="/images/newPost/gif.svg"
//                 alt="Logo"
//                 width={20}
//                 height={20}
//               />
//             </i>
//           </label>

//           <label>
//             <i>
//               <Image
//                 src="/images/newPost/smiley.svg"
//                 alt="Logo"
//                 width={20}
//                 height={20}
//               />
//             </i>
//           </label>
//         </div>
//         <input type="text" placeholder="Start a new message" />
//       </div>
//     </div>
//   );
// };

// export default Message;
