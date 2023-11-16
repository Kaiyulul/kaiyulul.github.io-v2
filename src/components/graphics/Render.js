import React from "react";
import { ReactP5Wrapper} from "react-p5-wrapper";
import "../../styles/Render.css";

const Sketch = p5 => {
    let w = p5.windowWidth;
    let h = p5.windowHeight;
    // let x, y;
    // let spinX, spinY, rev = 180;

    // Bezier Noise
    let t, c;
    // let history = [];
    // const maxHistoryLength = 10;
    

    p5.setup = () => {
        p5.createCanvas(w, h, p5.WEBGL);
        p5.angleMode(p5.DEGREES);
        p5.noFill();
        // p5.pixelDensity(1);

        // Bezier Noise
        // p5.stroke(255, 10);  
        t = 0;
        c = w * h;
    };

    p5.draw = () => {
        // Donut
        // let angle = p5.atan2(p5.mouseY-w, p5.mouseX-h);
        // // console.log(p5.mouseX, p5.mouseY)
        // p5.clear();
        // p5.noFill();
        // p5.stroke(255);
        
        // p5.rotate(angle * 20);
        // if (p5.mouseX < w/2 && p5.mouseY < h/2) {
        //     spinX = -(p5.map(p5.mouseX, 0, w/2, rev, 0));
        //     spinY = -(p5.map(p5.mouseY, 0, h/2, rev, 0))
        // } else if (p5.mouseX < w/2 && p5.mouseY >= h/2){
        //     spinX = (p5.map(p5.mouseX, 0, w/2, rev, 0))
        //     spinY = -(p5.map(p5.mouseY, 0, h/2, rev, 0));
        // } else if (p5.mouseX < w/2 && p5.mouseY >= h/2){
        //     spinX = (p5.map(p5.mouseX, 0, w/2, rev, 0))
        //     spinY = -(p5.map(p5.mouseY, 0, h/2, rev, 0));
        // } else if (p5.mouseX < w/2 && p5.mouseY >= h/2){
        //     spinX = (p5.map(p5.mouseX, 0, w/2, rev, 0))
        //     spinY = -(p5.map(p5.mouseY, 0, h/2, rev, 0));
        // }
        // p5.rotateX(spinY);
        // p5.rotateY(spinX);
        // let rev = 10
        // let spinX = rev * p5.sin(p5.frameCount*2)
        // let spinY = rev * p5.sin(p5.frameCount*2)
        // p5.rotateX(spinX)
        // p5.rotateY(spinY)
        // if (p5.frameCount <= 60) {
        //     console.log(p5.frameCount + "| X: " + spinX + "| Y: " + spinY)
        // }

        // // p5.orbitControl();
        // p5.torus(200, 150);

        // Bezier Noise
        var r = p5.map(p5.frameCount, 1, p5.frameCount, 140, 255)
        var g = p5.map(p5.cos(p5.frameCount/2), -1, 1, 120, 160)
        var b = p5.map(p5.sin(p5.frameCount/2), -1, 1, 20, 80)
        p5.stroke(r, g, b, 30);

        p5.translate(-w, -h);
        p5.rotateX(p5.mouseX/100);
        p5.rotateY(p5.mouseY/100);

        var x1 = w * p5.noise(t + c*10) * 2;
        var x2 = w * p5.noise(t + c*20) * 2;
        var x3 = w * p5.noise(t + c*30) * 2;
        var x4 = w * p5.noise(t + c*40) * 2;
        var y1 = h * p5.noise(t + c*50) * 2;
        var y2 = h * p5.noise(t + c*60) * 2;
        var y3 = h * p5.noise(t + c*70) * 2;
        var y4 = h * p5.noise(t + c*80) * 2;

        if (p5.frameCount%2 === 0) {
            p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
        } 
        else {
            p5.curve(x1, y1, x2, y2, x3, y3, x4, y4);
        }
        t += 0.002;

        // history.push({x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3, x4: x4, y4: y4});

        // if (history.length > maxHistoryLength) {
        //     history.shift();
        // }
        // for (let i = 0; i < history.length; i++) {
        //     if (p5.frameCount%2 === 0) {
        //         p5.bezier(history[i].x1, history[i].y1, history[i].x2, history[i].y2, history[i].x3, history[i].y3, history[i].x4, history[i].y4);
        //     } else {
        //         p5.curve(history[i].x1, history[i].y1, history[i].x2, history[i].y2, history[i].x3, history[i].y3, history[i].x4, history[i].y4);
        //     }
        // }

        
        if (p5.frameCount % 200 === 0) {
            p5.clear();
        }

        // Sinewave
        // p5.clear();
        // p5.rotateX(45);
        // p5.rotateY(-45);
        // p5.translate(w/4, h/3);

        // for (var i = 0; i < 50; i++) {
        //     // var r = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 100, 200)
        //     var r = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 140, 200)
        //     var g = p5.map(i, 0, 50, 70, 120)
        //     var b = p5.map(i, 0, 50, 20, 80)
        //     // var b = p5.map(p5.cos(p5.frameCount / 2), -1, 1, 200, 100)

        //     p5.strokeWeight(p5.cos(i))
        //     p5.stroke(r, g, b)
        
        //     p5.rotate(i/1000)
        
        //     p5.beginShape()
        //     for (var j = 0; j < 360; j += 10) {
        //         var rad = i * 4
        //         var x = rad * p5.cos(j)
        //         var y = rad * p5.sin(j)
        //         var z = p5.sin(p5.frameCount/2 + i * 4) * 75
        
        //         p5.vertex(x, y, z)
        //     }
        //     p5.endShape(p5.CLOSE)
        // }
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
};

const Render = () => (
    <div id="sketch">
        <ReactP5Wrapper sketch={Sketch} />
    </div>
);

export default Render;