import React from 'react'

const index = () => {
  return (
    <div className='addNoteDiv'>
      <div className='NoteHeader'>
        <p>New Note</p>
      </div>
      <div className='noteName'>
        <p>Name:</p>
        <input type="text" name="" id="" />
      </div>
      <div className='noteBody'>
        <textarea name="" id="" cols="30" rez rows="10"></textarea>
      </div>
      <div className='noteSubmite'>
        <button className='noteAddBtn'>+ Add a note</button>
      </div>
    </div>
  )
}

export default index;