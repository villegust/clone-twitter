"use client";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function AllTrends({ TREND_DATA }: any) {
  return (
    <section className="your-trend-section">
      <div className="your-trend-content">
        <div className="your-trend-content__box">
          <div className="your-trend-content__box__title">
            <h2>All trends</h2>
          </div>
          {TREND_DATA.map((items: Trends, index: number) => {
            return (
              <div key={index} className="your-trend-content__box__trend-box">
                <div className="your-trend-content__box__trend-box__top">
                  <p>Trend ·</p>
                  <span>
                    <FontAwesomeIcon icon={faEllipsis} size="xl" />
                  </span>
                </div>
                <div className="your-trend-content__box__trend-box__trend-text">
                  <h2>{items.name}</h2>
                  <p>
                    {items.totalPosts >= 1000000
                      ? (items.totalPosts / 1000000).toFixed(0) + " mn"
                      : items.totalPosts >= 1000
                      ? (items.totalPosts / 1000).toFixed(0) + " tn"
                      : items.totalPosts}{" "}
                    posts
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AllTrends;
