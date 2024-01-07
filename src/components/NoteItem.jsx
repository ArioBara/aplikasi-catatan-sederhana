import React from "react";
import DeleteButton from "./DeleteButton";

function NoteItem({ id, title, date, body, onDelete }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{date}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default NoteItem;
