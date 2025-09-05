import React from 'react';

const Card = ({ image, title, description, badgeText, tags }) => {
  return (
    <div className="card w-90 max-w-sm md:max-w-md  bg-base-100 shadow-sm mx-auto">
      <figure className="h-48 w-full overflow-hidden flex items-center justify-center">
        <img src={image} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {badgeText && <div className="badge badge-secondary">{badgeText}</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-center flex-wrap mt-4 gap-2">
          {tags && tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;