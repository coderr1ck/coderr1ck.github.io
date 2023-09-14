var ls = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var notwin = true;
var xo_val = 1;
var xo_str = "X";
var xo_bol = true;
var fonoff = false;
var state = true;


// right child display functionality
var rchild = document.getElementById("child2");
rchild.style.display = "none";

// left parent button functionality
var btn = document.getElementsByClassName("c1btn");
btn[0].addEventListener("click", function () {
  rchild.style.display = "inherit";
});
btn[2].addEventListener("click", function () {
  rchild.style.display = "none";
});


function repeat(){
    fonoff = true;
    swap(xo_bol, fonoff);
    check();
}

// check win state funcction
function win(){
    console.log("rinning")
    if(!notwin){
        if(state){
            alert("PLAYER  "+xo_str+"  LOST!")
            state=false
            clearInterval(winchk)
        }
    }
}

var winchk = setInterval(win,1000)
// checking list code for win or lose
function check() {
  if (notwin) {
    if (ls[0] == ls[4] && ls[4] == ls[8]) {
      notwin = false;
    }
    if (ls[2] == ls[4] && ls[4] == ls[6]) {
      notwin = false;
    }
    for (let i = 0; i < ls.length; i += 3) {
      if (ls[i] == ls[i + 1] && ls[i + 1] == ls[i + 2]) {
        notwin = false;
      }
      const IY = parseInt(i / 3);
      if (ls[IY] == ls[IY + 3] && ls[IY + 3] == ls[IY + 6]) {
        notwin = false;
      }
    }
  }
}

function swap(bol1, fonoff1) {
  let ps1 = document.getElementById("pslide1");
  let ps2 = document.getElementById("pslide2");
  if (xo_str == "X") {
    ps1.style.color = "transparent";
    ps1.style.background = "none";
    ps2.style.color = "rgba(29, 0, 63,0.9)";
    ps2.style.background = "white";
  } else {
    ps2.style.color = "transparent";
    ps2.style.background = "none";
    ps1.style.color = "rgba(29, 0, 63,0.9)";
    ps1.style.background = "white";
  }
  if (fonoff1) {
    if (bol1) {
      xo_str = "O";
      xo_val = 0;
      xo_bol = false;
    } else {
      xo_str = "X";
      xo_val = 1;
      xo_bol = true;
    }
  }
  fonoff = false;
}
// reset button functionality
btn[1].addEventListener("click", function () {
  rchild.style.display = "inherit";
  for (i = 2; i < 5; i++) {
    for (j = 0; j < 3; j++) {
      rchild.children[i].children[j].innerText = "";
      ls = [2, 3, 4, 5, 6, 7, 8, 9, 10];
      xo_str = "";
      swap(xo_bol, fonoff);
      notwin = true;
      xo_val = 1;
      xo_str = "X";
      xo_bol = true;
      fonoff = false;
      state = true;
      
    }
  }
    winchk = setInterval(win,1000)
});



let d0 = document.querySelector("#d0");
d0.addEventListener("click", function () {
  if (ls[0] > 1) {
    d0.innerText = xo_str;
    ls[0] = xo_val;
    repeat();
  }
});

let d1 = document.querySelector("#d1");
d1.addEventListener("click", function () {
  if (ls[1] > 1) {
    d1.innerText = xo_str;
    ls[1] = xo_val;
    repeat();
  }
});

let d2 = document.querySelector("#d2");
d2.addEventListener("click", function () {
  if (ls[2] > 1) {
    d2.innerText = xo_str;
    ls[2] = xo_val;
    repeat();
  }
});

let d3 = document.querySelector("#d3");
d3.addEventListener("click", function () {
  if (ls[3] > 1) {
    d3.innerText = xo_str;
    ls[3] = xo_val;
    repeat();
  }
});

let d4 = document.querySelector("#d4");
d4.addEventListener("click", function () {
  if (ls[4] > 1) {
    d4.innerText = xo_str;
    ls[4] = xo_val;
    repeat();
  }
});

let d5 = document.querySelector("#d5");
d5.addEventListener("click", function () {
  if (ls[5] > 1) {
    d5.innerText = xo_str;
    ls[5] = xo_val;
    repeat();
  }
});

let d6 = document.querySelector("#d6");
d6.addEventListener("click", function () {
  if (ls[6] > 1) {
    d6.innerText = xo_str;
    ls[6] = xo_val;
    repeat();
  }
});

let d7 = document.querySelector("#d7");
d7.addEventListener("click", function () {
  if (ls[7] > 1) {
    d7.innerText = xo_str;
    ls[7] = xo_val;
    repeat();
  }
});

let d8 = document.querySelector("#d8");
d8.addEventListener("click", function () {
  if (ls[8] > 1) {
    d8.innerText = xo_str;
    ls[8] = xo_val;
    repeat();
  }
});
