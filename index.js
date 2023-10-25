function All() {
    var element2 = document.querySelector(".items2");
    element2.classList.remove("edit");
    var element3 = document.querySelector(".items3");
    element3.classList.remove("edit");
    var element1 = document.querySelector(".items1");
    element1.classList.remove("edit");
}
function breakfast() {
    All();
    var element2 = document.querySelector(".items2");
    element2.classList.add("edit");
    var element3 = document.querySelector(".items3");
    element3.classList.add("edit");
}
function lunch() {
    All();
    var element2 = document.querySelector(".items1");
    element2.classList.add("edit");
    var element3 = document.querySelector(".items3");
    element3.classList.add("edit");
}
function dinner() {
    All();
    var element2 = document.querySelector(".items2");
    element2.classList.add("edit");
    var element3 = document.querySelector(".items1");
    element3.classList.add("edit");
}
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 400,
});
ScrollReveal().reveal('.heading', { delay: 60, origin: 'left' });
var stick = document.querySelectorAll(".select");
for (let i = 0; i < stick.length; i++) {
    stick[i].addEventListener("click", function () {
        if (i == 0) {
            document.querySelectorAll(".dinner")[3].scrollIntoView({ behavior: 'smooth' });
        }
        if (i == 1) {
            document.querySelectorAll(".breakfast")[7].scrollIntoView({ behavior: 'smooth' });
        }
        if (i == 2) {
            document.querySelectorAll(".lunch")[16].scrollIntoView({ behavior: 'smooth' });
        }
        if (i == 3) {
            document.querySelectorAll(".dinner")[3].scrollIntoView({ behavior: 'smooth' });
        }
    })
}
var viewMenu = document.querySelector(".viewMenu");
viewMenu.addEventListener("click", function () {
    document.querySelector(".heading-time").scrollIntoView({ behavior: 'smooth' });
})
let i = 0;
const images = document.querySelectorAll(".display");
setInterval(function () {
    if (i == 0) {
        images[i].style.display = 'block';
    }
    else if (i == images.length) {
        images[i - 1].style.display = 'none';
        images[0].style.display = 'block';
        i = 0;
    }
    else {
        images[i - 1].style.display = 'none';
        images[i].style.display = 'block';
    }
    i++;
}, 5000);
