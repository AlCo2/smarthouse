import React, { useState } from 'react'

const AddNote = (props) => {
  return (
    <div className='addNoteDiv'>
      <div className='NoteHeader'>
        <p>New Note</p>
        <i onClick={()=>props.setShowNote(false)} class="fa-solid fa-xmark closeNote"></i>
      </div>
      <div className='noteName'>
        <p>Name:</p>
        <input type="text" name="" id="" />
      </div>
      <div className='noteBody'>
        <textarea name="" id="" cols="30" rez rows="10"></textarea>
      </div>
      <div className='noteSubmite'>
        <button onClick={()=>{props.setShowNote(false);}} className='noteAddBtn'>+ Add a note</button>
      </div>
    </div>
  )
}

export default AddNote