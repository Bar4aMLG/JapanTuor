import React from "react";
import './welcome.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = ({welcometitle , bio , btn}) => {
    useEffect (() => {
        AOS.init({duration: 1000});
    },[]);
    return (
        <div className="big-title" data-aos="fade-right">
            <p className="headtitle">{welcometitle}</p>
            <p className="bio-info">{bio}</p>
            <button className="btn-title">{btn}</button>
        </div>
    )
}



export default Welcome