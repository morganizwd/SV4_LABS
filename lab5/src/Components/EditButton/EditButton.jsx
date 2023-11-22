function EditButton({ onEditClick, isOneCardSelected }) {
    return (
      <button onClick={onEditClick} disabled={!isOneCardSelected}>
        Редактировать
      </button>
    );
}

export default EditButton;