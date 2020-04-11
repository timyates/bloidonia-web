const container = document.getElementById('container');
const logo = document.getElementById('logo');
var counter = 0;
const updateRate = 10;
const isTimeToUpdate = () => counter++ % updateRate === 0;
const update = e => {
    const dw = document.documentElement.clientWidth / 2.0;
    const x = ((e.x - dw) * (1 / dw)) * 2;
    const style = "rotateX(0deg) rotateY(" + x.toFixed(2) + "deg)";
    logo.style.transform = style;
};
const onMouseMoveHandler = event => { if (isTimeToUpdate()) { update(event); } };
container.onmousemove = onMouseMoveHandler
container.onmouseout = e => logo.style.transform = "rotateX(0deg) rotateY(0deg)";
