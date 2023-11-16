import React from "react";
import "../styles/Experience.css";

const experienceHistory = [
    "Experience",
    "Extracurricular",
    "Projects"
]

class Experience extends React.Component {
    render() {
        return (
            <section id = "experience">
                <div className="exp-container">
                    <h1>{experienceHistory[1]}</h1>
                    <div className = "extracurricular">
                        {"Company of Ateneo Dancers"}
                    </div>
                </div>
                    
            </section>
        )
    }
}

export default Experience;