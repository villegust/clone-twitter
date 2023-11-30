// import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

// function Trends({ TREND_DATA }: any) {
//   return (
//     <section className="trend-section">
//       <div className="trend-content">
//         <div className="trend-content__box">
//           <div className="trend-content__box__title">
//             <h2>Trends</h2>
//           </div>
//           {TREND_DATA.map((items: Trends, index: number) => {
//             return (
//               <div key={index} className="trend-content__box__trend-box">
//                 <div className="trend-content__box__trend-box__top">
//                   <p>{index + 1} · Trend</p>
//                   <span>
//                     <FontAwesomeIcon icon={faEllipsis} size="xl" />
//                   </span>
//                 </div>
//                 <div className="trend-content__box__trend-box__trend-text">
//                   <h2>{items.name}</h2>
//                   <p>
//                     {items.totalPosts >= 1000000
//                       ? (items.totalPosts / 1000000).toFixed(0) + " mn"
//                       : items.totalPosts >= 1000
//                       ? (items.totalPosts / 1000).toFixed(0) + " tn"
//                       : items.totalPosts}{" "}
//                     posts
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="trend-content__box__view-more">
//             <a href="/i/trends">View more</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Trends;
