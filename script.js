var text = document.querySelector(".text");
const copy_btn = document.querySelector(".copy");
const generate_btn = document.querySelector(".generate-btn");

generate_btn.addEventListener("click", function () {
  let length = document.querySelector("#length").value;
  const uppercase = document.querySelector("#uppercase").checked;
  const lowercase = document.querySelector("#lowercase").checked;
  const numbers = document.querySelector("#numbers").checked;
  const symbols = document.querySelector("#symbols").checked;
  string = "";

  const arr = [uppercase, lowercase, numbers, symbols];
  let x = 0;
  for (i = 0; i < 4; i++) {
    if (arr[i] == true) {
      x++;
    }
  }
  if (x == 0) {
    text.innerText = "invalid !";
    return -1;
  }

  getString(length, arr);
  text.innerText = string;
});

function getString(length, arr) {
  for (i = 0; i < length; ) {
    let random = Math.floor(Math.random() * 3);

    if (random == 0 && arr[0] == true && string.length < length) {
      string = string + getUpper();
      i++;
    }

    if (random == 1 && arr[1] == true && string.length < length) {
      string = string + getLower();
      i++;
    }

    if (random == 2 && arr[2] == true && string.length < length) {
      string = string + getNumbers();
      i++;
    }

    if (random == 3 && arr[3] == true && string.length < length) {
      string = string + getSymbols();
      i++;
    }
  }
}

function getUpper() {
  let x = -1;
  while (x < 65 || x > 90) {
    x = Math.random() * 90;
  }
  x = Math.floor(x);
  return String.fromCodePoint(x);
}
function getLower() {
  let x = -1;
  while (x < 97 || x > 122) {
    x = Math.random() * 122;
  }
  x = Math.floor(x);
  return String.fromCodePoint(x);
}
function getNumbers() {
  let x = -1;
  while (x < 48 || x > 57) {
    x = Math.random() * 122;
  }
  x = Math.floor(x);
  return String.fromCodePoint(x);
}
function getSymbols() {
  let x = -1;
  while (x < 33 || (x > 47 && x < 58) || x > 64) {
    x = Math.random() * 126;
  }
  x = Math.floor(x);
  return String.fromCodePoint(x);
}
