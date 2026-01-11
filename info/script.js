hourSide = document.querySelectorAll('.hour-side');
minuteSide = document.querySelectorAll('.minute-side');
direction = document.querySelectorAll('.arrangement-direction');

if (window.matchMedia('(orientation: landscape)').matches) {
    direction.forEach(direction => direction.innerText="column");
    hourSide.forEach(side => side.innerText="left");
    minuteSide.forEach(side => side.innerText="right");
} else {
    direction.forEach(direction => direction.innerText="row");
    hourSide.forEach(side => side.innerText="top");
    minuteSide.forEach(side => side.innerText="bottom");
}