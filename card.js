import Canvas from './lib/canvas.js';
import {TAU, CENTRE_X, CENTRE_Y, RADIUS} from './lib/constants.js';

const canvas = new Canvas('canvas');

canvas.circle(CENTRE_X,CENTRE_Y,RADIUS);

let angle = TAU * Math.random(),
    angle2 = TAU * Math.random(),
    x1 = RADIUS * Math.cos(angle) + CENTRE_X,
    y1 = RADIUS * Math.sin(angle) + CENTRE_Y,
    x2 = RADIUS * Math.cos(angle2) + CENTRE_X,
    y2 = RADIUS * Math.sin(angle2) + CENTRE_Y;

for (let count = 0; count <= 200; count++) {
    setTimeout(() => {
        canvas.clear();
        for (let i = 0; i <= count; i++) {
            let angle = i * TAU / count;
            angle2 = 75 * angle,
            x1 = RADIUS * Math.cos(angle) + CENTRE_X,
            y1 = RADIUS * Math.sin(angle) + CENTRE_Y,
            x2 = RADIUS * Math.cos(angle2) + CENTRE_X,
            y2 = RADIUS * Math.sin(angle2) + CENTRE_Y;
            canvas.line(x1,y1,x2,y2);
        }
    }, count * 10);
}
