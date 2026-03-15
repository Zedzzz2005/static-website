const navbtn = document.getElementById("navbtn");
const navbar = document.getElementById("navbar");

if (navbtn && navbar) {
    navbtn.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
}

const aboutBtn = document.getElementById("aboutBtn");
const aboutPopup = document.getElementById("aboutPopup");
const closeBtn = document.getElementById("closeBtn");

if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
        aboutPopup.style.display = "flex";
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        aboutPopup.style.display = "none";
    });
}

let topButton = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};