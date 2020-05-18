import React , {Component} from "react"
import "../Style/dark.css"
import {FaHome , FaUser , FaEye , FaEnvelope , FaMapMarkerAlt , FaPhone } from "react-icons/fa"

class Dark extends Component{

    handle_change = () => {
        this.props.history.push("/profile")
    }

    render(){
        return(
            <div className = "d-body">
                <div className = "d-left">
                    <img src={require("../../Image/Dark/man_smoke.jpg")}/>
                    <a href="#" className = "active">
                        <FaHome size = {40} className = "home-icon"/>
                        <p>Home</p>
                    </a>
                    <a href="#">
                        <FaUser size = {40} className = "home-icon"/>
                        <p>About</p>
                    </a>
                    <a href="#">
                        <FaEye size = {40} className = "home-icon"/>
                        <p>photos</p>
                    </a>
                    <a href="#">
                        <FaEnvelope size = {40} className = "home-icon"/>
                        <p>contact</p>
                    </a>
                </div>
                <div className = "d-right">

                    {/* header */}

                    <div className = "d-header">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Photo</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* section-1 */}

                    <div className = "d-section-1">
                        <p className = "text-1">I'm John Doe.</p>
                        <p className = "text-2">Photographer and Web Designer.</p>
                        <img src= {require("../../Image/Dark/man_smoke.jpg")}/>
                    </div>

                    {/* section-2 */}

                    <div className = "d-section-2">
                        <div className="text">
                            <p className = "text-1">My Name</p>
                            <span></span>
                            <p  className = "text-2">Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        {/* skills */}

                        <div className = "d-skill">
                            <p className = "text-1">My Skills</p>
                            <p className = "text-2">Photographey</p>
                            <div className = "chart-1">
                                <div>95</div>
                            </div>
                            <p className = "text-3">Web Design</p>
                            <div className = "chart-2">
                                <div>80</div>
                            </div>
                            <p className = "text-4">Photoshop</p>
                            <div className = "chart-3">
                                <div>75</div>
                            </div>
                        </div>
                        <div className = "information">
                            <div>
                                <p>11+</p>
                                <p>Paterns</p>
                            </div>
                            <div>
                                <p>55+</p>
                                <p>Project Done</p>
                            </div>
                            <div>
                                <p>89+</p>
                                <p>Hapy Clients</p>
                            </div>
                            <div>
                                <p>150+</p>
                                <p>Meeting</p>
                            </div>
                        </div>
                        <div className = "d-price">
                            <p>My Price</p>
                            <div className = "basic">
                                <div>
                                    Basic
                                </div>
                                <p className = "text-1">Web Design</p>
                                <span></span>
                                <p className = "text-2">Photographey</p>
                                <span></span>
                                <p className = "text-3">5GB Storage</p>
                                <span></span>
                                <p className = "text-4">Mail Support</p>
                                <span></span>
                                <p className = "text-5">$ 10</p>
                                <p className = "text-6">per month</p>
                                <span></span>
                                <button>Sign up</button>
                            </div>
                            <div className = "basic">
                                <div>
                                    Pro
                                </div>
                                <p className = "text-1">Web Design</p>
                                <span></span>
                                <p className = "text-2">Photographey</p>
                                <span></span>
                                <p className = "text-3">50GB Storage</p>
                                <span></span>
                                <p className = "text-4">Endless Support</p>
                                <span></span>
                                <p className = "text-5">$ 25</p>
                                <p className = "text-6">per month</p>
                                <span></span>
                                <button>Sign up</button>
                            </div>
                        </div>

                        {/* reputation */}

                        <div className = "d-reputation">
                            <p>My Reputation</p>
                            <div className = "div-1">
                                <img src={require("../../Image/Dark/avatar_g2.jpg")} alt=""/>
                                <p>Rebecca Flex. CEO at Company <br/> No one is better than Jane Doe</p>
                            </div>
                            <div className = "div-1">
                                <img src={require("../../Image/Dark/bandmember.jpg")} alt=""/>
                                <p>Chris Fox. CEO at Mighty school. <br/> Jane Doe saved us from a web desaster</p>
                            </div>
                        </div>

                        {/* photo */}

                        <div className = "d-photos">
                            <p>My Photos</p>
                            <span></span>
                            <div>
                                <div className = "div-1"> 
                                    <img src={require("../../Image/Dark/wedding (1).jpg")} alt=""/>      
                                    <img src={require("../../Image/Dark/rocks.jpg")} alt=""/>      
                                    <img src={require("../../Image/Dark/sailboat.jpg")} alt=""/>      
                                </div>
                                <div className = "div-2">
                                    <img src={require("../../Image/Dark/underwater.jpg")} alt=""/>
                                    <img src={require("../../Image/Dark/chef.jpg")} alt=""/>
                                    <img src={require("../../Image/Dark/wedding (1).jpg")} alt=""/>
                                    <img src={require("../../Image/Dark/p6.jpg")} alt=""/>
                                </div>
                            </div>
                        </div>

                        {/* contact */}

                        <div className = "d-contact">
                            <p>Contact Me</p>
                            <span></span>
                            <p> <FaMapMarkerAlt className = "icon-1"/> Chicago, US</p>
                            <p> <FaPhone className = "icon-2"/> Phone: +000 151515</p>
                            <p> <FaEnvelope className = "icon-3"/> Email: mail@mail.com</p>
                            <p>Lets get in touch. Send me a message:</p>
                            <input type="text" placeholder = "Name:"/>
                            <input type="text" placeholder = "Email:"/>
                            <input type="text" placeholder = "Subject:"/>
                            <input type="text" placeholder = "Message:"/>
                            <button onClick = {() => { this.handle_change() }}>Senad Message</button>
                        </div>

                    </div>

                </div>
            </div>           
        )
    }
}
export default Dark