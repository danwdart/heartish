import Canvas from './lib/canvas.js';
import {TAU, CENTRE_X, CENTRE_Y, RADIUS} from './lib/constants.js';

const canvas = new Canvas('canvas'),
    drawit = () => {
        canvas.clear();
        canvas.circle(CENTRE_X, CENTRE_Y, RADIUS);
        for (let i = 0; i <= count; i++) {
            let angle = i * TAU / count;
            angle2 = mult * angle,
            x1 = RADIUS * Math.cos(angle) + CENTRE_X,
            y1 = RADIUS * Math.sin(angle) + CENTRE_Y,
            x2 = RADIUS * Math.cos(angle2) + CENTRE_X,
            y2 = RADIUS * Math.sin(angle2) + CENTRE_Y;
            canvas.line(x1,y1,x2,y2);
        }
    },
    onkeypress = ev => {
        ev.preventDefault();
    
        switch (ev.code) {
        case 'ArrowUp':
            count++;
            break;
        case 'ArrowDown':
            count--;
            break;
        case 'ArrowRight':
            mult++;
            break;
        case 'ArrowLeft':
            mult--;
            break;
        }
        drawit();
        document.getElementById('modulo').innerHTML = count;
        document.getElementById('mult').innerHTML = mult;
    };

let count = 10,
    mult = 2,
    angle = TAU * Math.random(),
    angle2 = TAU * Math.random(),
    x1 = RADIUS * Math.cos(angle) + CENTRE_X,
    y1 = RADIUS * Math.sin(angle) + CENTRE_Y,
    x2 = RADIUS * Math.cos(angle2) + CENTRE_X,
    y2 = RADIUS * Math.sin(angle2) + CENTRE_Y;

drawit();

window.addEventListener('keypress', onkeypress);
