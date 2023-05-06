import AddNote from '@/components/addNote/AddNote';
import React, { useState } from 'react'
import { AiFillStar, AiOutlineArrowDown, AiOutlineDownSquare } from 'react-icons/ai';
import NavBar from '@/components/navbar/NavBar';

const index = () => {
    const [showNote, setShowNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const pushToNotes = (value) =>{
        setNotes(notes => [...notes, value]);
    }
    
  return (
    <>
        <NavBar/>
        <div id="main">
            <div className="left">
                <div className="welcome_bar">
                    <h1>Good Morning, Bessie</h1>
                </div>
                <div className="insideDiv">
                    <div className="mainList">
                        <div className="roomsList">
                            <p className="arrow"><AiOutlineDownSquare/></p>
                            <ul>
                                <li><p>livingroom</p></li>
                                <li><p>Kitchen</p></li>
                                <li><p>Bathroom</p></li>
                            </ul>
                        </div>
                        <div className="bigPanel">
                            <div className="controlPanel">
                                <div>
                                    <p className="controlLabel">Temperature control</p>
                                    <p className="controlLitleLabel">Xiaomi Mijia Smart Air</p>
                                </div>
                                <div>
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="controlPanel">
                                <div>
                                    <p className="controlLabel">Assistant</p>
                                    <p className="controlLitleLabel">Smart Column Yandex</p>
                                </div>
                                <div>
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="controlPanel">
                                <div>
                                    <p className="controlLabel">Lights</p>
                                    <p className="controlLitleLabel">Bulb Essential * 5 lights</p>
                                </div>
                                <div>
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="picPlace">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="rightTextBackgroundP">
                    <div className="rightTextFirst"><p>Temperature</p><p>°C</p></div>
                    <div><p>16</p></div>
                </div>
                <div className="rightText">
                    <div className="rightTextEnergy">
                        <div className="rightTextFirst"><p>Energy</p><p>kWH</p></div>
                        <div><p>20</p></div>
                    </div>
                    <div className="rightTextEnergy">
                        <div className="rightTextFirst"><p>Humidity</p><p>%</p></div>
                        <div><p>32</p></div>
                    </div>
                </div>
                    {showNote?<AddNote setShowNote={setShowNote} pushToNotes={pushToNotes}/>:''}
                <div className="danger">
                    {notes.map((note,i)=>(
                    <div key={i} className="inside_danger">
                        <p className="danger_q1">N//{i+1}</p>
                        <p className="danger_q2">{note.body}</p>
                    </div>
                    ))
                    }
                    <div className='addDangerDiv'>
                        <p onClick={()=>{setShowNote(true);}}>+ Add a note</p>
                    </div>
                </div>
                <div className="weather">
                    <div>
                        <p>Weather</p>
                    </div>
                    <div className="inner_weather">
                        <p>Rabat</p>
                        <p>+8°</p>
                    </div>
                </div>
                <div className="support">
                    <div className="suppfirstdiv">
                        <p>Support</p>
                        <AiFillStar/>
                    </div>
                    <div className="inner_support">
                        <div className="suppPicPlace">
                            <img className="suppPic" src="/abdoupic.jpg" alt=""/>
                            <img className="suppPic" src="/download.jpeg" alt=""/>
                            <img className="suppPic" src="/s.jpeg" alt=""/>
                        </div>
                        <p className="suppP">$24.944.00</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index;