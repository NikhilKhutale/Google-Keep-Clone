import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [add,setAdd] = useState()
  const [Delete,setDelete] = useState()

  useEffect(() => {
    const fetchData = async() =>{
      try{
        const res = await axios.get("api/note/")
        setNotes(res.data)
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    };
    fetchData()
  },[add,Delete])

  const deleteNote = async(id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    try{
      await axios.delete(`api/note/${id}`)
      setDelete(id)
    }catch(err){
      console.log(err)
    }
  }

  console.log(notes)

  return (
    <div>
      <Header />
      <CreateArea setAdd={setAdd}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.note}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
