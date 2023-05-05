import React from 'react'


const index = () => {
  return (
    <>
        <div>
            <nav>
                <div class="navBrand">
                    <h1>Smart</h1>
                    <h1 class="brand">Ho</h1>
                </div>
                <div>
                    <ul id="navbar" class="navList">
                        <div>
                            <i id="closeNav" class="fa-solid fa-xmark closeNav"></i>
                        </div>
                        <li><a href="">Home</a></li>
                        <li><a href="">Dashboard</a></li>
                        <li><a href="">Add a device</a></li>
                        <li><a href="">Settings</a></li>
                        <li><a href="">Bessie Cooper</a></li>
                    </ul>
                </div>
                <a id="openNav" href="#"><i class="fa-solid fa-bars"></i></a>
            </nav>
        </div>
        <div id="main">
            <div class="left">
                <div class="welcome_bar">
                    <h1>Good Morning, Bessie</h1>
                </div>
                <div class="insideDiv">
                    <div class="mainList">
                        <div class="roomsList">
                            <p class="arrow"><i class="fa-solid fa-caret-down"></i></p>
                            <ul>
                                <li><p>livingroom</p></li>
                                <li><p>Kitchen</p></li>
                                <li><p>Bathroom</p></li>
                            </ul>
                        </div>
                        <div class="bigPanel">
                            <div class="controlPanel">
                                <div>
                                    <p class="controlLabel">Temperature control</p>
                                    <p class="controlLitleLabel">Xiaomi Mijia Smart Air</p>
                                </div>
                                <div>
                                    <label class="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="controlPanel">
                                <div>
                                    <p class="controlLabel">Assistant</p>
                                    <p class="controlLitleLabel">Smart Column Yandex</p>
                                </div>
                                <div>
                                    <label class="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="controlPanel">
                                <div>
                                    <p class="controlLabel">Lights</p>
                                    <p class="controlLitleLabel">Bulb Essential * 5 lights</p>
                                </div>
                                <div>
                                    <label class="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="picPlace">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="rightTextBackgroundP">
                    <div class="rightTextFirst"><p>Temperature</p><p>°C</p></div>
                    <div><p>16</p></div>
                </div>
                <div class="rightText">
                    <div class="rightTextEnergy">
                        <div class="rightTextFirst"><p>Energy</p><p>kWH</p></div>
                        <div><p>20</p></div>
                    </div>
                    <div class="rightTextEnergy">
                        <div class="rightTextFirst"><p>Humidity</p><p>%</p></div>
                        <div><p>32</p></div>
                    </div>
                </div>
                <div class="danger">
                    <div class="inside_danger">
                        <p class="danger_q1">N//1</p>
                        <p class="danger_q2">Replace the light bulbs in the kitchen and bathroom</p>
                    </div>
                    <div class="inside_danger">
                        <p class="danger_q1">N//2</p>
                        <p class="danger_q2">Buy a smart speaker station for mom</p>
                    </div>
                </div>
                <div class="weather">
                    <div>
                        <p>Weather</p>
                    </div>
                    <div class="inner_weather">
                        <p>Rabat</p>
                        <p>+8°</p>
                    </div>
                </div>
                <div class="support">
                    <div class="suppfirstdiv">
                        <p>Support</p>
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div class="inner_support">
                        <div class="suppPicPlace">
                            <img class="suppPic" src="/abdoupic.jpg" alt=""/>
                            <img class="suppPic" src="/download.jpeg" alt=""/>
                            <img class="suppPic" src="/s.jpeg" alt=""/>
                        </div>
                        <p class="suppP">$24.944.00</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index;