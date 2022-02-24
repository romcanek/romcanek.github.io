// typewritter
const write = document.getElementById("write")

const texts = ['Roman Tarnai', 'Student', 'Front end developer', 'Coder']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) (
        count = 0
    )

    currentText = texts[count]
    letter = currentText.slice(0, ++index)

    write.innerText = letter
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 750)
        return
    }
    setTimeout(type, 400);
}());

// scrolling
const about = document.getElementById("about")
const about_li = document.getElementById("about-li")
const skills = document.getElementById("skills")
const skills_li = document.getElementById("skills-li")
const projects = document.getElementById("projects")
const projects_li = document.getElementById("projects-li")

about_li.addEventListener("click", () => {
    about.scrollIntoView({
        behavior: 'smooth',
    });
})
skills_li.addEventListener("click", () => {
    skills.scrollIntoView({
        behavior: 'smooth',
    });
})
projects_li.addEventListener("click", () => {
    projects.scrollIntoView({
        behavior: 'smooth',
    });
})

// apearing
window.addEventListener("scroll", reveal)

function reveal() {
    let reveals = document.getElementsByClassName("reveal")

    for (let r of reveals) {
        let windowHeight = window.innerHeight;
        let revealTop = r.getBoundingClientRect().top;
        let revealPoint = 250;

        if (revealTop < windowHeight - revealPoint) {
            r.classList.add("active")
        }
    }
}

// carousel
const ar_r = document.getElementById("arrow-r")
const ar_l = document.getElementById("arrow-l")
const images = document.getElementsByClassName("carousel-image")

let imageIndex = 0;

function updateImage() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("show")
        images[i].classList.add("hide")
        if (i == imageIndex) {
            images[i].classList.remove("hide")
            images[i].classList.add("show")
        }
    }
}


ar_r.addEventListener("click", () => {
    if (imageIndex == images.length - 1) {
        imageIndex = 0;
    } else {
        imageIndex++
    }
    updateImage()
})

ar_l.addEventListener("click", () => {
    if (imageIndex == 0) {
        imageIndex = images.length - 1;
    } else {
        imageIndex--
    }
    updateImage()
})