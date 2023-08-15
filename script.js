const neck = document.querySelector(".neck");
const wrapper = document.querySelector(".wrapper");
const doge = document.querySelector(".long-doge");
const text = document.querySelector(".dy-text");
let i = 0;

function appendText() {
    const newPre = document.createElement('pre');
    newPre.textContent = neck.innerText;
    i++;
    text.innerText = `Your doge is ${i} times woww`;
    // Append the new paragraph to the scroll content
    doge.appendChild(newPre);
}

function appendWow() {
    let wow = document.createElement('div');
    wow.innerText = "WOW";
    wow.className = "wawo";
    wow.style.left = Math.random() * window.innerWidth - 100 + 'px';
    wow.style.top = wrapper.offsetHeight - 100 + 'px';
    document.body.appendChild(wow);
}

function handleScroll() {
    if (window.scrollY > 30) {
        appendText();
        appendWow();
    }
}

// Use 'scroll' event for laptops/desktops
window.addEventListener('scroll', handleScroll);

// Use 'touchmove' event for mobile devices
window.addEventListener('touchmove', handleScroll);

// Use 'resize' event to update positioning when the window size changes
window.addEventListener('resize', appendWow);
