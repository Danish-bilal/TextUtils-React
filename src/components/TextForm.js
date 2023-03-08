import React, { useState } from "react";
export default function TextForm(props) {
  const [text, seText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    seText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    seText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    seText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    seText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    seText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div
        style={{ color: props.mode === "dark" ? "white" : "#002d36" }}
        className="container"
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#002d36",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
