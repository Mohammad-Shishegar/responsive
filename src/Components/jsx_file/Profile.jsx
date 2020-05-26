import React , {Component} from "react"
import  "../Style/profile.css"
import {FaTimes , FaBars , FaThLarge , FaUser , FaEnvelope , FaGem , FaImage , FaPaintBrush , FaMapMarkedAlt , FaPhone, FaMarker, FaMapMarkerAlt, FaTelegramPlane} from "react-icons/fa"


class Profile extends Component {

    handle_change = () => {
        this.props.history.push("/responsive/band")
    }

    handle_open_menu = () => {
        var open_menu = document.getElementsByClassName("menu")[0]
        open_menu.style.left = "0px"
    }
    
    handle_close_menu = () => {
        var close_menu = document.getElementsByClassName("menu")[0]
        close_menu.style.left = "-350px"
    }

    render(){
        return(
            <div className = "p-body">

                {/* left */}

                <div className = "p-left">
                    <img src={require("../../Image/Profile/avatar_g2.jpg")}/>
                    <p>Portfolio</p>
                    <p>Template by W3 CSS</p>
                    <div>
                        <a href="#" className = "active">
                             <p> <FaThLarge className = "icon-1"/> Portfolio</p>
                        </a>
                        <a href="#">
                             <p> <FaUser className = "icon-1" /> About</p>
                        </a>
                        <a href = "#" >
                             <p> <FaEnvelope className = "icon-1" /> Contact</p>
                        </a>
                    </div>
                </div>

                {/* right */}

                <div className = "p-right">
                    <div className = "header">
                        <div>
                            <FaBars className = "menu-icon" onClick = {() => {this.handle_open_menu()}}/>
                        </div>
                        <div>
                            <img src={require("../../Image/Profile/avatar_g2.jpg")} alt=""/>
                        </div>
                    </div>
                    <div className = "menu">
                       <div className = "div-1">
                            <img src={require("../../Image/Profile/avatar_g2.jpg")} alt=""/>
                            <FaTimes className = "menu-close" onClick = {() => {this.handle_close_menu()}}/>
                        </div> 
                       <div  className = "div-2">
                            <p>Portfolio</p>
                            <p>Template by W3 CSS</p>
                            <div>
                                <a href="#" className = "active">
                                    <p> <FaThLarge className = "icon-1"/> Portfolio</p>
                                </a>
                                <a href="#">
                                    <p> <FaUser className = "icon-1" /> About</p>
                                </a>
                                <a href = "#" >
                                    <p> <FaEnvelope className = "icon-1" /> Contact</p>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div className = "header-2">
                        <div className = "div-1">
                            <p>My Portfolio</p>
                        </div>
                        <div className = "div-2">
                            <span>Filter :</span>
                            <button className = "active">ALL</button>
                            <button> <FaGem className = "icon"/> Design</button>
                            <button> <FaImage className = "icon"/> Photos</button>
                            <button> <FaPaintBrush className = "icon"/> Art</button>
                        </div>
                    </div>

                    {/* images */}

                    <div className = "image-1">
                        <div>
                            <img src={require("../../Image/Profile/mountains.jpg")} alt="" srcset=""/>
                            <p>Lorem Ipsum</p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                        <div>
                            <img src={require("../../Image/Profile/lights.jpg")} alt="" srcset=""/>
                            <p>Lorem Ipsum</p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                        <div>
                            <img src={require("../../Image/Profile/nature.jpg")} alt="" srcset=""/>
                            <p>Lorem Ipsum</p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className = "image-1">
                        <div>
                            <img src={require("../../Image/Profile/p1.jpg")} alt="" srcset=""/>
                            <p>Lorem Ipsum</p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                        <div>
                            <img src={require("../../Image/Profile/p2.jpg")} alt="" srcset=""/>
                            <p>Lorem Ipsum</p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                        <div>
                            <img src={require("../../Image/Profile/p3.jpg")} alt="" srcset=""/>
                            <p>Lorem Ipsum</p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>

                    {/* number */}

                    <div className = "number">
                        <a href="#" class="">«</a>
                        <a href="#" class="">1</a>
                        <a href="#" class="">2</a>
                        <a href="#" class="">3</a>
                        <a href="#" class="">4</a>
                        <a href="#" class="">»</a>
                    </div>

                    {/* About */}

                    <div className = "about">
                        <div>
                            <img src={require("../../Image/Profile/avatar_g2.jpg")} alt=""/>
                            <img src={require("../../Image/Profile/me2.jpg")} alt=""/>
                        </div>
                        <p>About Me</p>
                        <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    </div>

                    {/* Skills */}

                    <div className = "skills">
                        <p>Technical Skills</p>
                        <p>Photography</p>
                        <div>
                            <div className = "div-1">95%</div>
                        </div>
                        <p>Web Design</p>
                        <div>
                            <div className = "div-2">85%</div>
                        </div>
                        <p>Photoshop</p>
                        <div>
                            <div className = "div-3">80%</div>
                        </div>
                    </div>

                    {/* charge */}
                    
                    <div className = "charge">
                         <p>How much I charge</p>
                         <div className = "div-0">
                             <div className="div-1">
                                 <div className = "basic">
                                     <p>Basic</p>
                                 </div>
                                 <p>Web Design</p>
                                 <span></span>
                                 <p>Photography</p>
                                 <span></span>
                                 <p>1GB Storage</p>
                                 <span></span>
                                 <p>Mail Support</p>
                                 <span></span>
                                 <p className= "sent">$10</p>
                                 <p className= "sent-2">per month</p>
                                 <span></span>
                                 <button>Sing Up</button>
                             </div>
                             <div className="div-1">
                                 <div className = "basic pro">
                                     <p>Pro</p>
                                 </div>
                                 <p>Web Design</p>
                                 <span></span>
                                 <p>Photography</p>
                                 <span></span>
                                 <p>50GB Storage</p>
                                 <span></span>
                                 <p>Endless Support</p>
                                 <span></span>
                                 <p className= "sent">$25</p>
                                 <p className= "sent-2">per month</p>
                                 <span></span>
                                 <button>Sing Up</button>
                             </div>
                             <div className="div-1">
                                 <div className = "basic">
                                     <p>Premium</p>
                                 </div>
                                 <p>Web Design</p>
                                 <span></span>
                                 <p>Photography</p>
                                 <span></span>
                                 <p>Unlimited Storage</p>
                                 <span></span>
                                 <p>Mail Support</p>        
                                 <span></span>
                                 <p className= "sent">$50</p>
                                 <p className= "sent-2">per month</p>
                                 <span></span>
                                 <button>Sing Up</button>
                             </div>
                         </div>
                    </div>

                    {/* contact */}

                    <div className = "p-contact">
                        <p>Contact Me</p>
                        <div className = "div-1">
                            <div>
                                <FaEnvelope className = "icon-1"/>
                                <p>email@email.com</p>
                            </div>
                            <div className = "location">
                                <FaMapMarkerAlt className = "icon-1"/>
                                <p>Chicago. US</p>
                            </div>
                            <div>
                                <FaPhone className = "icon-1"/>
                                <p>512312311</p>
                            </div>
                        </div>
                        <p>Name</p>
                        <input type="text"/>
                        <p>Email</p>
                        <input type="text"/>
                        <p>Message</p>
                        <input type="text"/>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <button onClick = {() => { this.handle_change() }}> <FaTelegramPlane className = "btn-icon"/> Send Message </button>
                    </div>

                    {/* footer */}

                    <div className = "footer">
                        <div className = "div-1">
                            <p>Footer</p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                        <div className = "div-2">
                            <p>Blog Posts</p>
                            <div className = "div-2-1">
                                <img src={require("../../Image/Profile/workshop.jpg")} alt=""/>
                                <p>Lorem <br/> Sed mattis nunc</p>
                            </div>
                            <span></span>
                            <div className = "div-2-1">
                                <img src={require("../../Image/Profile/gondol.jpg")} alt=""/>
                                <p>Lorem <br/> Sed mattis nunc</p>
                            </div>
                        </div>
                    </div>

                    {/* next page */}

                    <div className = "p-next-page center">
                            <div class="p-outer button">
                                <button onClick = {() => {this.handle_change()}}>Next Page</button>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                </div>
            </div>
        )
    }
}
export default Profile