import { useState } from "react";
import PropTypes from 'prop-types';

const InputArea = ({ onSubmit }) => {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        onSubmit(inputText);
        setInputText(""); // Clear the input field after submission
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={inputText} />
            <button type="submit">
                <span>Add</span>
            </button>
        </form>
    );
};

InputArea.propTypes = {
    onSubmit: PropTypes.func.isRequired, // Assuming todoItem is a string
};

export default InputArea;
