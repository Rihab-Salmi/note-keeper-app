import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes.jsx";

function App() {
  return (
    <div>
      <Header />
      {notes.map((nota) => {
       return <Note key={nota.key} title={nota.title} content={nota.content} />;
      })}
      <Footer />
    </div>
  );
}
export default App;
