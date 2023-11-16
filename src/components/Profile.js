import React from "react";
import Observer from "./hooks/Observer.js";
import "../styles/Profile.css";

const techStack = [
    "Python", "JavaScript", "React.js", "Node.js", 
    "HTML", "CSS", "SQL", "Java", "TypeScript",
    // "C#", "C++", "C"
];

class Profile extends React.Component {
    render() {
        return (
            <section id = "profile">
                    <div className = "bio">
                        <h1 className = "title">
                            {"A few things about me,"}
                            {/* <img className = "display-picture" src={"../../assets/profilepic.jpg"} alt=""/> */}
                        </h1>
                        <Observer>
                            <div className = "introduction">
                                {"I am a fresh Computer Science graduate from Ateneo de Manila University. I have a specialization in "} 
                                <span className = "dsa">{"Data Science and Analytics"}</span>
                                {", but I am also interested in full-stack development, blockchain architecture, and artificial intelligence."}
                            </div>
                        </Observer>
                        <Observer delay = "100ms"> 
                            {"Here are some technologies I have worked with:"}
                            <ul className = "tech scroll-inner">
                                {techStack.map(function(tech, i) {
                                    return (
                                        <Observer delay={`${i*2}0ms`}>
                                            {console.log({tech})}
                                            <li>{tech}</li>
                                        </Observer>
                                    )
                                })} 
                            </ul>
                        </Observer>
                        <Observer delay="200ms">
                            <div className = "hobbies">
                                {"Outside of the tech world, I love to dance and make choreography. I casually play video games. I have also been currently watching shows and movies in my spare time."}
                            </div>
                        </Observer>
                    </div>
            </section>
        )
    }
}

export default Profile;