import React, { useRef, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useSession } from 'next-auth/react';

export default function AddNote(props){
  const {data: session} = useSession();

  const bodyRef = useRef(null);
  const nameRef = useRef(null);
  async function handleClick(e) {
    e.preventDefault()
    const user_id = session.user.id;
    const note_name = nameRef.current.value;
    const note_body = bodyRef.current.value;
    
    const res = await fetch('/api/add-notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name:note_name, body:note_body, userId:user_id}),
    })
    const data = await res.json()
    props.fetchNote();
    props.setShowNote(false);
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
