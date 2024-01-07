import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils";

function NoteList({ notes, onDelete }) {
    return (
        <div className="note-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        date={showFormattedDate(note.createdAt)}
                        body={note.body}
                        onDelete={onDelete}
                    />
                ))
            ) : (
                <p>Tidak ada catatan.</p>
            )}
        </div>
    );
}

export default NoteList;

