let buybtn = document.getElementsByClassName("buy-btn");
const buybtnArray = Array.from(buybtn);
buybtnArray.forEach((btn) => {
  if (isLogin) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
