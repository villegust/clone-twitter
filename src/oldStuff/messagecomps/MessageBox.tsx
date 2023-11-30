// import React, { useState } from "react";
// import Link from "next/link";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAnglesUp,
//   faAnglesDown,
//   faArrowLeft,
// } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// import NewMessage from "@/components/modals/NewMessage";
// import Message from "@/oldStuff/messagecomps/WriteMessage";

// const MessageBox = ({ setMessageUser }: any) => {
//   const [expanded, setExpanded] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);

//   const [temporaryUser, setTemporaryUser] = useState("");

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const handleModal = () => {
//     setModalOpen(!modalOpen);
//   };

//   const backToMsgBox = () => {
//     setTemporaryUser("");
//   };

//   return (
//     <div className={expanded ? "message-container" : "message-box"}>
//       <div
//         className={
//           expanded ? "message-box-extended" : "message-box-not-extended"
//         }
//       >
//         {!temporaryUser ? (
//           <div className="message-box__content-top">
//             <div className="message-box__content-top__title">
//               <h1>Messages</h1>
//             </div>
//             <div className="message-box__content-top__icons">
//               <span className="icon" onClick={handleModal}>
//                 <FontAwesomeIcon icon={faEnvelope} size="2xl" />
//               </span>
//               <span className="icon" onClick={handleExpandClick}>
//                 <FontAwesomeIcon
//                   icon={expanded ? faAnglesDown : faAnglesUp}
//                   size="2xl"
//                 />
//               </span>
//             </div>
//           </div>
//         ) : (
//           <>
//             {expanded ? (
//               <div className="message-box__content-top">
//                 <div className="message-box__content-top__title">
//                   <span onClick={backToMsgBox}>
//                     <FontAwesomeIcon icon={faArrowLeft} size="xl" />
//                   </span>
//                   <h1>{temporaryUser}</h1>
//                 </div>
//                 <div className="message-box__content-top__icons">
//                   <span className="icon" onClick={handleExpandClick}>
//                     <FontAwesomeIcon
//                       icon={expanded ? faAnglesDown : faAnglesUp}
//                       size="2xl"
//                     />
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <div className="message-box__content-top">
//                 <div className="message-box__content-top__title">
//                   <h1>{temporaryUser}</h1>
//                 </div>
//                 <div className="message-box__content-top__icons">
//                   <span className="icon" onClick={handleExpandClick}>
//                     <FontAwesomeIcon
//                       icon={expanded ? faAnglesDown : faAnglesUp}
//                       size="2xl"
//                     />
//                   </span>
//                 </div>
//               </div>
//             )}
//           </>
//         )}

//         {expanded && (
//           <>
//             {!temporaryUser ? (
//               <>
//                 <Link
//                   href="/messages/requests"
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   <div className="message-request">
//                     <div className="message-request__icon" id="message-icon">
//                       <FontAwesomeIcon icon={faEnvelope} size="2xl" />
//                     </div>
//                     <p>Message requests</p>
//                   </div>
//                 </Link>
//                 <div className="write-message">
//                   <h1>Welcome to your inbox!</h1>
//                   <p>
//                     Write a line, share posts and more with private
//                     conversations between you and others on X.
//                   </p>
//                 </div>
//                 <div className="write-message__btn">
//                   <button onClick={handleModal}>Write a message</button>
//                 </div>
//               </>
//             ) : (
//               <Message />
//             )}
//           </>
//         )}

//         <NewMessage
//           modalOpen={modalOpen}
//           setExpanded={setExpanded}
//           setModalOpen={setModalOpen}
//           setMessageUser={setMessageUser}
//           setTemporaryUser={setTemporaryUser}
//         />
//       </div>
//     </div>
//   );
// };

// export default MessageBox;
