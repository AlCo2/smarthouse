import React, { useRef, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const AddNote = (props) => {
  const bodyRef = useRef(null);
  const nameRef = useRef(null);
  async function handleClick(e) {
    const note_name = nameRef.current.value;
    const note_body = bodyRef.current.value;
    const res = await fetch('/api/add-notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ note_name, note_body }),
    })
    const data = await res.json()
    console.log(data);
  }
  return (
    <form onSubmit={handleClick} className='addNoteDiv'>
      <div className='NoteHeader'>
        <p>New Note</p>
        <p onClick={()=>props.setShowNote(false)} className="closeNote"><AiOutlineClose/></p>
      </div>
      <div className='noteName'>
        <p>Name:</p>
        <input type="text" ref={nameRef} name="name" id="" />
      </div>
      <div className='noteBody'>
        <textarea name="body" id="" cols="30" ref={bodyRef} rows="10"></textarea>
      </div>
      <div className='noteSubmite'>
        <button type='submit' className='noteAddBtn'>+ Add a note</button>
      </div>
    </form>
  )
}

export default AddNote