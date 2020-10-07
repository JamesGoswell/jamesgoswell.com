import {makeNoise2D} from "open-simplex-noise";

let canvas = document.getElementById("marchingSquareCanvas");
let ctx = canvas.getContext("2d");

let res = 10;
let cols = canvas.height/res + 1;
let rows = canvas.width/res + 1;
let noise2D = makeNoise2D(Date.now())
console.log(noise2D(1,1))
let points;

function Array2d(r,c) {
    let array = new Array(r)
    for (let i = 0; i<array.length;i++) {
        array[i] = new Array(c);
    }
    return array;
}

function createArray() {
    let array = Array2d(rows,cols);

    for (let x = 0; x< array.length; x++) {
        for (let y = 0; y< array[x].length; y++) {
            array[x][y] = noise2D(x,y);
        }
    }
    return array;
}

function draw(points) {
    // for (let x = 0; x< points.length; x++) {
    //     for (let y = 0; y< points[x].length; y++) {
    //         let colour = 255 * points[x][y]
    //         ctx.beginPath()
    //         ctx.arc(x * res,y * res,res*.3, 0,2*Math.PI);
    //         ctx.fillStyle = "rgb(" + colour + "," + colour + "," + colour + ")";
    //         ctx.fill();
    //     }
    // }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let x = 0; x< points.length - 1; x++) {
        for (let y = 0; y < points[x].length - 1; y++) {
            getLine(
                "" + Math.round(points[x][y]) + Math.round(points[x+1][y])
                +Math.round(points[x+1][y+1]) +Math.round(points[x][y+1]),x,y);
        }
    }
}

function getLine(bin, x, y) {
    if (bin == "0010" || bin == "0101" || bin == "1101") {
        // bottom right
        ctx.beginPath();
        ctx.moveTo((x + 0.5) * res, (y + 1  ) * res);
        ctx.lineTo((x + 1  ) * res, (y + 0.5) * res);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    if (bin == "0001" || bin == "1010" || bin == "1110") {
        // bottom left
        ctx.beginPath();
        ctx.moveTo((x + 0  ) * res, (y + 0.5) * res);
        ctx.lineTo((x + 0.5) * res, (y + 1  ) * res);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    if (bin == "1000" || bin == "0101" || bin == "0111") {
        // top left
        ctx.beginPath();
        ctx.moveTo((x + 0  ) * res, (y + 0.5) * res);
        ctx.lineTo((x + 0.5) * res, (y + 0  ) * res);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    if (bin == "0100" || bin == "1010" || bin == "1011") {
        // top right
        ctx.beginPath();
        ctx.moveTo((x + 0.5) * res, (y + 0  ) * res);
        ctx.lineTo((x + 1  ) * res, (y + 0.5) * res);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    if (bin == "0011" || bin == "1100") {
        // horizontal
        ctx.beginPath();
        ctx.moveTo((x + 0  ) * res, (y + 0.5) * res);
        ctx.lineTo((x + 1  ) * res, (y + 0.5) * res);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    if (bin == "0110" || bin == "1001") {
        // vertical
        ctx.beginPath();
        ctx.moveTo((x + 0.5) * res, (y + 0  ) * res);
        ctx.lineTo((x + 0.5) * res, (y + 1  ) * res);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
    if (bin == "0000" || bin == "1111"){
        // no lines
    }

}

points = createArray();
draw(points)
console.log("fin")

