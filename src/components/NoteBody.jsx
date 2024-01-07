import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NoteBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
        };

        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, newNote],
            };
        });
    }

    render() {
        return (
            <div className="note-app__body">
                <div className="note-input">
                    <h2>Buat Catatan</h2>
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
                </div>
            </div>
        );
    }
}

export default NoteBody;
