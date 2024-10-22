
function countdown(x) {

  if (x < 0) {
    return
  }
    console.log(x);
    x--
    countdown(x)

}

countdown(5)