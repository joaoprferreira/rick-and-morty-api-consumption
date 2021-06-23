import React from 'react';
import "./Card.scss"

export function Card({children, ...rest}) {
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  );
}