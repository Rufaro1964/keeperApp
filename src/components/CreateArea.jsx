import React, { useState } from "react";

function CreateArea(props) {
  //destructing the state
  const [textContent, setTextContent] = useState({
    title: "",
    content: ""
  });

  //handles the keeping track of the last and next notes
  function handleChange(e) {
    const { name, value } = e.target;
    setTextContent((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={textContent.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={textContent.content}
        />
        <button
          onClick={(event) => {
            props.addContent(textContent);

            event.preventDefault(false);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
