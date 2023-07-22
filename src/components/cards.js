import React, {useEffect} from "react";
import './cards.css';

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'

import vid5 from '../images/vid5.mp4'
import vid8 from '../images/vid8.mp4'
import vid11 from '../images/vid11.mp4'

const Cards = () => {
    return (
        <>
        <div className="card-container">

            <div className="row">

                <div className="card">
                    <a href="#">
                        <img src={img1} alt="img1">
                        </img>
                    </a>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={img2} alt="img2">
                        </img>
                    </a>
                </div>

            </div>

            <div className="row">

                <div className="card">
                    <a href="#">
                        <img src={img3} alt="img3">
                        </img>
                    </a>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={img4} alt="img4">
                        </img>
                    </a>
                </div>

            </div>

            <div className="row">

                <div className="card">
                    <a href="#">
                        <video src={vid5} alt="vid5">
                        </video>
                    </a>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={img6} alt="img6">
                        </img>
                    </a>
                </div>

            </div>

            <div className="row">

                <div className="card">
                    <a href="#">
                        <img src={img7} alt="img7">
                        </img>
                    </a>
                </div>

                <div className="card">
                    <a href="#">
                        <video src={vid8} alt="vid8">
                        </video>
                    </a>
                </div>

            </div>

            <div className="row">

                <div className="card">
                    <a href="#">
                        <img src={img9} alt="img9">
                        </img>
                    </a>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={img10} alt="img10">
                        </img>
                    </a>
                </div>

            </div>

            
        </div>
        </>
    )
}

export default Cards;