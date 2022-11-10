import React from "react";

export default function Card(){
    return (
        <div className="Container">
            <div className="img">

            </div>
            <div className="MainCont" >
                <h3>
                    Laura Smith
                </h3>
                <h4 className="front" > 
                    Front End Developer
                </h4>
                <smal ><span className="web">
                    laurasmith.website
                    </span>
                </smal>
                <div className="btn-cont">
                    <button className="EmailBtn">
                    <i class="fa-solid fa-envelope"></i>
                       <span> Email </span>
                    </button>
                    <button className="LinkedBtn">
                    <i class="fa-brands fa-linkedin"></i>
                       <span> LinkedIn </span>
                    </button>
                </div>
                <div className="ParaCont">
                    <div className="about">
                        <h4>
                            About
                        </h4>
                        <p>
                            <smal>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</smal>
                        </p>
                    </div>
                    <div className= "interest">
                        <h4>Interests</h4>
                        <p>
                            <smal>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</smal>
                        </p>
                    </div>
                </div>

            </div>
            <div className="footer">
            <button>
                <i class="fa-brands fa-square-twitter"></i>
            </button>
            <button>
                <i class="fa-brands fa-square-facebook"></i>
            </button>
            <button>
                <i class="fa-brands fa-square-instagram"></i>
            </button>   
            <button>
                <i class="fa-brands fa-square-github"></i>
            </button>
            </div>

        </div>
    )
}