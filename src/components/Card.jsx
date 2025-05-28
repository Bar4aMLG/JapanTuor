import React, { useEffect } from "react";
import './Card.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ title, text, img }) => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <div className="card mx-auto" data-aos="fade-up">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-info">
                <p className="card-title">{title}</p>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;
