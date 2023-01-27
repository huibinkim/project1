// const button = document.querySelector(".btn");
// const btnOn = function () {
//   console.log("btn on");
//   button.classList.add("btn-on");
// };

// for (let i = 0; i < button.length; i++) {
//   button.addEventListener("click", btnOn);
// }

// ul>li input 하나씩 추가하여 클린한 li (this) 그 이전 형제들에 classList.add('btn-on')추가 해보기 >>> sibling, prevAll
const clickBtn = document.querySelector(".star-btn");
console.log(clickBtn);
clickBtn.addEventListener("click", function () {
  const prevBtn = this.previousElementSibling();
  prevBtn.style.background = `url(../img/icon_star.svg) no-repeat center/contain`;
});



