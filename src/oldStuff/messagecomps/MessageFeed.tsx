// import React, { useState } from "react";
// import Image from "next/image";

// import NewMessage from "@/components/modals/NewMessage";

// const MessageFeed = ({ messageUser }: any) => {
//   return (
//     <>
//       {!messageUser ? (
//         <div className="message-feed-content">
//           <div className="message-feed-content__text">
//             <h1>Welcome to your inbox!</h1>
//             <p>
//               Write a line, share posts and more with private conversations
//               between you and others on X.
//             </p>
//           </div>
//           <div className="message-feed-content__btn">
//             <button>Write a message</button>
//           </div>
//         </div>
//       ) : (
//         <div className="message-user-section">
//           <div className="message-user-section__box">
//             <div className="message-user-section__box__profile">
//               <Image
//                 src="/images/sidebar/profile.png"
//                 alt="Logo"
//                 width={40}
//                 height={35}
//               />
//               <div className="message-user-section__box__profile__text">
//                 <h1>{messageUser}</h1>
//                 <h2>@{messageUser}</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MessageFeed;
