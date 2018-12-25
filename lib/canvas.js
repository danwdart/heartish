import {TAU} from './constants.js';

export default class Canvas {
    constructor(id) {
        let canvas = document.getElementById(id);
        this.h = window.innerHeight;
        this.w = window.innerWidth;
        canvas.height = this.h;
        canvas.width = this.w;
        canvas.style.height = this.h + 'px';
        canvas.style.width = this.w + 'px';

        this.ctx = canvas.getContext('2d');

        this.ctx.fillStyle = 'black';
        this.ctx.strokeStyle = 'black';
    }

    clear() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0,0,this.w,this.h);
        this.ctx.fillStyle = 'black';
    }

    point(x, y) {
        this.ctx.fillRect(x,y,1,1);
    }

    area(x1,y1,x2,y2) {
        this.ctx.fillRect(x1,y1,x2,y2);
    }

    line(x1,y1,x2,y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1,y1);
        this.ctx.lineTo(x2,y2);
        this.ctx.stroke();
    }

    slowline(x1,y1,x2,y2,d = 0) {
        let dx = (x2-x1)*0.01,
            dy = (y2-y1)*0.01,
            xfrom = x1,
            yfrom = y1,
            xto = x1 + dx,
            yto = y1 + dx,
            iter = 0,
            cb = () => {
                this.line(xfrom, yfrom, xto, yto);
                xfrom = xto;
                yfrom = yto;
                xto += dx;
                yto += dy;
                iter++;
                if (100 > iter) setTimeout(cb, 1);
            };
        setTimeout(cb, d);
    }

    circle(x,y,r) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, TAU);
        this.ctx.stroke();
    }
}