import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState({
            title: event.target.value,
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote({
            title: this.state.title,
            body: this.state.body
        });
        this.setState({
            title: '',
            body: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <input
                    type="text"
                    className="note-input__title"
                    placeholder="Ini adalah judul ..."
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    required
                />
                <textarea
                    type="text"
                    className="note-input__body"
                    placeholder="Tuliskan catatanmu disini"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    required
                ></textarea>
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default NoteInput;
