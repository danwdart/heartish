import Canvas from './lib/canvas.js';
import {TAU, CENTRE_X, CENTRE_Y, RADIUS} from './lib/constants.js';

const canvas = new Canvas('canvas');

let angle = TAU * Math.random(),
    angle2 = TAU * Math.random(),
    da = angle2 - angle,
    x1 = RADIUS * Math.cos(angle) + CENTRE_X,
    y1 = RADIUS * Math.sin(angle) + CENTRE_Y,
    x2 = RADIUS * Math.cos(angle2) + CENTRE_X,
    y2 = RADIUS * Math.sin(angle2) + CENTRE_Y;

canvas.circle(CENTRE_X, CENTRE_Y, RADIUS);
canvas.slowline(x1, y1, x2, y2);
for (let i = 0; i <= 1000; i++) {
    x1 = x2;
    y1 = y2;
    angle2 += da;
    x2 = RADIUS * Math.cos(angle2) + CENTRE_X,
    y2 = RADIUS * Math.sin(angle2) + CENTRE_Y;
    canvas.slowline(x1,y1,x2,y2,1000*i+1000);
}
