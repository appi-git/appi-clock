const hour = document.querySelector(".hour-block");
const minute = document.querySelector(".minute-block");
const second = document.querySelector(".second-block");
let sixteens = 0;
let fours = 0;
let ones = 0;
const clr1 = "transparent";
const clr2 = "crimson";

const interval = 1000;

const sixteensH = hour.querySelector(".sixteens");    //sixteens hour
const hsUn = sixteensH.querySelector(".grid-one");
const hsDo = sixteensH.querySelector(".grid-two");
const hsTre = sixteensH.querySelector(".grid-three");

const foursH = hour.querySelector(".fours");    //fours hour
const hfUn = foursH.querySelector(".grid-one");
const hfDo = foursH.querySelector(".grid-two");
const hfTre = foursH.querySelector(".grid-three");

const onesH = hour.querySelector(".ones");    //ones hour
const hoUn = onesH.querySelector(".grid-one");
const hoDo = onesH.querySelector(".grid-two");
const hoTre = onesH.querySelector(".grid-three");

const sixteensM = minute.querySelector(".sixteens");    //sixteens minute
const msUn = sixteensM.querySelector(".grid-one");
