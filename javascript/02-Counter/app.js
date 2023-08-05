
let count = 0

const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList)
    const status = e.currentTarget.classList

    if (status.contains('decrease')) {
      count--
    }else if (status.contains('increase')) {
      count++
    }else {
      count = 0
    }

    if (count > 0) {
      value.style.color = "#ffd400"
    } else if (count < 0 ) {
      value.style.color = "green"
    } else if (count === 0) {
      value.style.color = "black"
    }
    value.textContent = count
    // console.log(count)
  })
})