import React , {Component} from "react"
import "../Style/band.css"
import {FaSearch , FaBars , FaMapMarkerAlt , FaPhone , FaEnvelope} from "react-icons/fa"


class Band extends Component{

    handle_change = () => {
        this.props.history.push("/responsive/dark")
    }

    handle_menu = () => {
        var a = document.getElementById("menu")
        if (a.style.left == "0px"){
            a.style.left = "-300px";
        }
        else{
            a.style.left = "0px"
        }
    }

    render(){
        return(
            <div className = "body">
                {/* header */}

                <div className = "header">
                    <div className = "header-left">
                        <FaBars className = "icon-menu" size ={20} onClick = {() =>{this.handle_menu()}}/>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Band</a></li>
                            <li><a href="#">Tour</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className = "header-right">
                        <FaSearch className="icon-search" size = {25}/>
                    </div>
                </div>
                {/* menu */}

                <div id = "menu">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">BAND</a></li>
                        <li><a href="#">TOUR</a></li>
                        <li><a href="#" id ="contact">CONTACT</a></li>
                    </ul>
                </div>
                {/* section-1*/}
                <div className= "section-1">
                    <h3>New York</h3>
                    <p>The atmosphere in New York is lorem ipsum.</p>
                </div>
                {/* section-2 */}
                <div className = "section-2">
                    <h2>The Band</h2>
                    <p className = "music">We love music</p>
                    <p className= "text">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <section className = "images">
                        <div className = "image">
                            <p>Name</p>
                            <img src= {require("../../Image/Band/bandmember.jpg")}/>
                        </div>
                        <div className = "image">
                            <p>Name</p>
                            <img src= {require("../../Image/Band/bandmember.jpg")}/>
                        </div>
                        <div className = "image">
                            <p>Name</p>
                            <img src= {require("../../Image/Band/bandmember.jpg")}/>
                        </div>
                    </section>
                </div>
                {/* section-3 */}
                <div className = "section-3">
                    <h3>TOUR DATE</h3>
                    <p className="text-1">Remember to book your tickets!</p>
                    <div>
                        <div className="tour first">
                            <img src= {require("../../Image/Band/newyork.jpg")}/>
                            <p className = "city">New York</p>
                            <p className = "date">Fri 27 Nov 2016</p>
                            <p className = "text">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className="btn-t">Buy Ticket</button>
                        </div>
                        <div className="tour">
                            <img src= {require("../../Image/Band/paris.jpg")}/>
                            <p className = "city">Paris</p>
                            <p className = "date">Sat 28 Nov 2016</p>
                            <p className = "text">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className="btn-t">Buy Ticket</button>
                        </div>
                        <div className="tour">
                            <img src= {require("../../Image/Band/sanfran.jpg")}/>
                            <p className = "city">San Francisco</p>
                            <p className = "date">Sun 29 Nov 2016</p>
                            <p className = "text">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className="btn-t">Buy Ticket</button>
                        </div>
                    </div>
                </div>
                {/* section-4 */}
                <div className = "section-4">
                    <p className= "contact">CONTACT</p>
                    <p className= "text">Fan? Drop a note!</p>
                    <div className = "infomation">
                        <div className = "infom">
                            <p className = "text-1"><FaMapMarkerAlt /> Chicago, US</p>
                            <p className = "text-2"><FaPhone/> Phone: +00 151515</p>
                            <p className = "text-3"><FaEnvelope/> Email: mail@mail.com</p>
                        </div>
                        <div className = "input">
                            <div>
                                <input className = "input-1" type="text" placeholder = {"Name"}/>
                                <input className = "input-2" type="Email" placeholder = {"Email"}/>
                            </div>
                            <div>
                                <input  className = "input-3" type="text" placeholder = {"Message"}/>
                                <button className="btn-2" onClick = {() => {this.handle_change()}}>SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-5 */}
                <div className ="section-5">
                    <img src={require("../../Image/Band/map.jpg")}/>
                </div>
                {/* next page */}

                <div className = "b-next-page center">
                    <div class="b-outer button">
                        <button onClick = {() => {this.handle_change()}}>Next Page</button>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Band