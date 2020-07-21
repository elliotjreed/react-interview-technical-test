import React from "react";

export const YellowBox = (props) => {
  return (
    <div className="yellow-poster-container">
      <div className="yellow-poster has-background-light">
        <figure className="yellow-poster-inner is-grouped-centered is-vcentered">
          <p className="has-text-centered">{props.lineOne}</p>
        </figure>
      </div>
    </div>
  );
};
