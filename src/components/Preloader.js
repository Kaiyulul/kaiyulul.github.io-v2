import React, {useEffect} from 'react';
import {preLoaderAnim} from './animations/PreloaderAnim.js'
import SplitType from 'split-type'
import './../styles/Preloader.css';

const prompts = [
    "Just gimme a sec!",
    "Hey! Hey! Hey!",
    "You here often?",
    "Kyle will be with you shortly!",
    "*insert elevator music*",
    "Live. Laugh. Love.",
    "Hello world!"
]

const Preloader = () => {

    useEffect(() =>{
        // if (!(window.innerWidth <= 1100)) {
            
        // }
        const splitText = new SplitType('.load-text');
        preLoaderAnim();
    }, []);
    return (
        <div className = "preloader">
            <div className = "load-text">
                <span>{prompts[Math.floor(Math.random() * prompts.length)]}</span>
            </div>
        </div>
    )
};

export default Preloader;
