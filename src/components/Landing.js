import React from "react";
import Render from "./graphics/Render.js";
import Name from "./hooks/Name.js";
import "../styles/Landing.css";

class Landing extends React.Component {
    render() {
        return (
            <section id="landing">
                <div className="greeting">
                    <Render className="sketch"/>
                    {/* <div className="hey">
                        {"Hey, I am"}
                    </div> */}
                    <Name name="kyle">
                        <div>   
                            {"KYLE"}
                        </div>
                    </Name>
                    <img className="landing-picture" src={"../../assets/landingpic.png"} alt=""></img>
                    <Name delay="200ms" name="tandoc">
                        <div>
                            {"TANDOC"}
                        </div>
                    </Name>
                </div>
            </section>
        )
    }
}

export default Landing;