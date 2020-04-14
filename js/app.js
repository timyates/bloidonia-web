const container = document.getElementById('container');
const logo = document.getElementById('logo');
const dw = document.body.clientWidth / 2.0;
const dh = document.body.clientHeight / 2.0;
var counter = 0;
const updateRate = 10;
const isTimeToUpdate = () => counter++ % updateRate === 0;
const update = e => {
    const x = (2.0 * (e.x - dw)) / dw;
    const y = -(2.0 * (e.y - dh)) / dh;
    const style = "rotateX(" + (y * 30).toFixed(2) + "deg) rotateY(" + (x * 30).toFixed(2) + "deg)";
    logo.style.transform = style;
};
const onMouseMoveHandler = event => { if (isTimeToUpdate()) { update(event); } };
document.body.onmousemove = onMouseMoveHandler
document.body.ontouchstart = onMouseMoveHandler
document.body.ontouchmove = onMouseMoveHandler
document.body.onmouseout = e => logo.style.transform = "rotateX(0deg) rotateY(0deg)";

