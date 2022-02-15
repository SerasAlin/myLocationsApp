import React from 'react';

export const CardsContainer = (props) => {
  return (
    <div style={{ width: 'auto', display: 'flex', gap: '30px' }}>
      {props.children}
    </div>
  );
};
