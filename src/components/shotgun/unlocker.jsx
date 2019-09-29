import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import p5 from "p5"

function newCanvas(){

    const sketchContainer = React.createRef()
    let canvas = null
    let ReturnDiv = null

    function P5Wrapper({
        sketch = () => {},
        state = {},
        children = {}
    }) {
        useEffect(() => {
            if (state.noBubbles === true) return
            canvas = new p5(sketch, sketchContainer.current)
            canvas.state = state
            return () => {
                canvas.remove()
            }
        }, [])
        if (state.noBubbles === true) {
            ReturnDiv = <React.Fragment>{children}</React.Fragment>
        }else {
            ReturnDiv = <div ref={sketchContainer} />
        }
        return ReturnDiv
    }

    P5Wrapper.propTypes = {
        state: PropTypes.object,
        sketch: PropTypes.func
    }

    P5Wrapper.defaultProps = {
        state: {},
        sketch: () => {}
    }

    return memo(P5Wrapper)
}

function Bubble(p, x, y, r=50) {

    this.x = x;
    this.y = y;
    this.r = r;

    this.clicked = function(bubbles, i) {
        let distance = p.dist(p.mouseX, p.mouseY, this.x, this.y)
        if (distance < 25) {
            bubbles.splice(i,1)
        }
    }

    this.move = function() {
        this.x += p.random(-1,1)
        this.y += p.random(-1,1)
    }

    this.display = function() {
        p.stroke(255);
        p.strokeWeight(4);
        p.fill(255, 0, 200);
        p.ellipse(this.x, this.y, this.r);
    }
}

const bubbles = []

const checkBubbles = () => {
    if(bubbles.length === 0) {
        return false
    }else{
        return true
    }
}

const sketch = p => {

    function getRandom() {
        return [p.random(p.windowWidth - 50), p.random(p.windowHeight - 50)]
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 5)
        p.stroke(255);
        for (let i = 0; i < 3; i++) {
            bubbles.push(new Bubble(p, getRandom()[0], getRandom()[1]))
        }
    }

    p.mouseClicked = () => {
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].clicked(bubbles, i)
        }
    }

    p.draw = () => {
        p.background(255)
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].display()
            bubbles[i].move()
        }
        if (bubbles.length === 0) {
            checkBubbles()
            p.remove()
        }
    }
}

export const Unlocker = ({children}) => {

    const [canvasState, setCanvasState] = useState({"noBubbles": false});
    const clickRef = useRef(null);
    const [NewCanvas, setNewCanvas] = useState(newCanvas())

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = event => {
        setTimeout(() => {
            if (canvasState.noBubbles === false && checkBubbles() === false)
                setCanvasState({"noBubbles": true})
        }, 0)
    }

    return <div ref={clickRef} className="canvas-container">
            <NewCanvas sketch={sketch} state={canvasState}>
                {children}
            </NewCanvas>
        </div>
}