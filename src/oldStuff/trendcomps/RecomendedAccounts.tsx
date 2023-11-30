// import React from "react";
// import Image from "next/image";

// function RecomendedAccounts({ POST_DATA }: any) {
//   return (
//     <section className="account-section">
//       <div className="account-content">
//         <div className="account-content__box">
//           <div className="account-content__box__title">
//             <h2>Recomended accounts</h2>
//           </div>
//           {POST_DATA.slice(0, 3).map((items: Data, index: number) => {
//             return (
//               <a key={index} href={items.username}>
//                 <div className="account-content__box__account-box">
//                   <div className="account-content__box__account-box__image">
//                     <Image
//                       src={items.profilePic}
//                       alt="Profile picture"
//                       width={40}
//                       height={40}
//                       style={{ borderRadius: "50%" }}
//                     />
//                   </div>

//                   <div className="account-content__box__account-box__info">
//                     <h3>{items.name}</h3>
//                     <p>@{items.username}</p>
//                   </div>
//                   <div className="account-content__box__account-box__btn">
//                     <button>Follow</button>
//                   </div>
//                 </div>
//               </a>
//             );
//           })}
//           <div className="account-content__box__view-more">
//             <a href="#">View more</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RecomendedAccounts;
