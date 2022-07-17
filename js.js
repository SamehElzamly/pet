//random backGround
let arrOfImage = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
let BackInterval

function RandomBackground() {
    BackInterval = setInterval(() => {
        let ranNum = Math.floor(Math.random() * arrOfImage.length);
        background.style.backgroundImage = 'url("' + arrOfImage[ranNum] + '")';
    }, 5000)
}
RandomBackground();
// website Options
let optionsPutton = document.querySelector(".optionBox .icon");
optionsPutton.onclick = function() {
        optionsPutton.classList.toggle("fa-spin")
        document.querySelector(".optionBox").classList.toggle("OBTransition")
    }
    //Static Background
let background = document.querySelector(".landingPage");
let ulli = document.querySelectorAll(".optionBox li img");
let liButton = document.querySelector(".optionBox ul li button");
ulli.forEach(li => {
        li.addEventListener('click', (e) => {
            background.style.backgroundImage = 'url("' + e.target.dataset.background + '")';
            clearInterval(BackInterval)
        })
    })
    //Random background again
liButton.addEventListener('click', (e) => {
    RandomBackground();
});
//Active URL
let url = document.querySelectorAll(".head li a");
url.forEach(a => {
        a.addEventListener('click', (e) => {
            url.forEach(ele => {
                ele.classList.remove("active");
            })
            e.target.classList.add("active")
        })
    })
    //Menu apperance
let icon = document.querySelector("header .head i");
let menu = document.querySelector("header .head .mobileLinks");
icon.addEventListener('click', function() {
    menu.style.transform = "rotate(0)";
})
menu.onmouseleave = function() {
    menu.style.transform = "rotateX(90deg)";
};

document.querySelector(".landingPage").onclick = function() {
    menu.style.transform = "rotateX(90deg)";
};

//target blank
let link1 = document.querySelectorAll("footer a");
link1.forEach(a => {
    a.setAttribute("target", "_blank");
})

//landing page Animation
window.onload = function() {
        let h1 = document.querySelector(".landingPage h1");
        let p = document.querySelector(".landingPage p");
        p.style.right = p.dataset.right;
        h1.style.left = h1.dataset.left;
    }
    //about us animation
let aboutTop = document.querySelector("#About");
window.onscroll = function() {
    let aboutOffsetTop = aboutTop.offsetTop;
    let aboutOuterHeight = aboutTop.offsetHeight;
    let winHeight = this.innerHeight;
    let winScrollTop = this.pageYOffset;
    if (winScrollTop > aboutOffsetTop + aboutOuterHeight - winHeight) {
        let img = document.querySelector("#About div:last-child img");
        img.style.width = img.dataset.width;
    }
}