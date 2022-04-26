import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addText(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addContent={addText} />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />;
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
