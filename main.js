//each status array
const passStatus = [
  { words: "This password is Weak", color: "Red" },
  { words: "This password is Good", color: "Orange" },
  { words: "This password is Strong", color: "Green" },
];
//

//selector
const password = document.querySelector("#password");
const pass_status = document.querySelector("#pass_status");
const show = document.querySelector("#show");
//

//

//

//eventlisteners
password.addEventListener("input", () => {
  if (password.value.match(/^[0-9a-zA-Z]+$/)) {
    pass_status.textContent = "";
    pass_status.textContent = passStatus[1].words;
    pass_status.style.color = passStatus[1].color;
    pass_status.style.display = "flex";
  }
});

show.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
