import React from 'react';

function AddCardButton({ onAddClick }) {
  return (
    <button onClick={onAddClick}>Добавить карточку</button>
  );
}

export default AddCardButton;