import React from 'react';

const Card = ({ image, title, description, badgeText, tags }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <figure>
        <img src={image}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {badgeText && <div className="badge badge-secondary">{badgeText}</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags && tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;