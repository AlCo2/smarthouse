import React, { useRef, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const AddNote = (props) => {
  const bodyRef = useRef(null);
  const nameRef = useRef(null);
  const [note, setNote] = useState({name:'', body:''})

  function handleClick() {
    note.name = nameRef.current.value;
    note.body = bodyRef.current.value;
    props.pushToNotes(note);
  }
  return (
    <div className='addNoteDiv'>
      <div className='NoteHeader'>
        <p>New Note</p>
        <p onClick={()=>props.setShowNote(false)} className="closeNote"><AiOutlineClose/></p>
      </div>
      <div className='noteName'>
        <p>Name:</p>
        <input type="text" ref={nameRef} name="name" id="" />
      </div>
      <div className='noteBody'>
        <textarea name="" id="" cols="30" ref={bodyRef} rows="10"></textarea>
      </div>
      <div className='noteSubmite'>
        <button onClick={()=>{props.setShowNote(false);handleClick()}} className='noteAddBtn'>+ Add a note</button>
      </div>
    </div>
  )
}

export default AddNote