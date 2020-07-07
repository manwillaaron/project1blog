import React from 'react';

const EditDeleteButtons = ({editing, saveEditing, flipEditing, id}) => (
  <div className="buttons">
      <div>
        {editing ? (
          <button className="button" onClick={saveEditing}>
            Save Changes
          </button>
        ) : (
          <button className="button" onClick={flipEditing}>
            Edit
          </button>
        )}
        <button
          className="button"
          onClick={() => deletePost(id)}
        >
          delete
        </button>
      </div>
  </div>
);
export default EditDeleteButtons;
