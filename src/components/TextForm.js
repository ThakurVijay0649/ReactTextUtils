import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(" ");
    //function to convert the text into uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    //function to convert the text into lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    //function to clear the text
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    //function to copy the text on clipboard
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    //function to write into the form or textarea box. Without using this function we cannot write into the textarea box in react js
    const handleOnChange = (event) => {
        setText(event.target.value); // this syntax will be used whenever we have to create a form on an input tag
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#0b042a' }}>
                <h1 className='my-4' style={{ fontStyle: 'italic' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#0b042a' : 'white', color: props.mode === 'dark' ? 'white' : '#0b042a' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#0b042a' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <strong>words</strong>  and {text.length} <strong>Characters</strong></p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
