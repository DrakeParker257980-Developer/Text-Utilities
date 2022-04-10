import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };
  const handleDownClick = () => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };
  const ClearText = () => {
    let clearText = "";
    setText(clearText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const copyToClipboard = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container containerMain">
        <h1 className="my-17">{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            placeholder="Enter Your Text Here"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-outline-primary btn-space bg-dark mx-17 px-8"
          onClick={handleUpClick}
        >
          <b>Convert The Text To Uppercase</b>
        </button>
        <button
          className="btn btn-outline-primary btn-space bg-dark mx-17 px-8"
          onClick={handleDownClick}
        >
          <b>Convert The Text To Lowercase</b>
        </button>
        <button
          className="btn btn-outline-primary btn-space bg-dark mx-17 px-8"
          onClick={copyToClipboard}
        >
          <b>Copy Text</b>
        </button>
        <button
          className="btn btn-outline-primary btn-space bg-dark mx-17 px-8"
          onClick={handleExtraSpaces}
        >
          <b>Remove Extra Spaces</b>
        </button>
        <button
          className="btn btn-outline-primary btn-space bg-dark mx-17 px-8"
          onClick={ClearText}
        >
          <b>Clear Text</b>
        </button>
      </div>
      <div className="container containerMain my-17">
        <h1>Your Text Summary</h1>
        <p>
          Your Text Has - {text.split(" ").length} Words & {text.length}{" "}
          Characters.
        </p>
        <p>
          Time Taken To Read The Word is - {0.008 * text.split(" ").length}{" "}
          Minutes.
        </p>
        <h2>Preview Of Your Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
