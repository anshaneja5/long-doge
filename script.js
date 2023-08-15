const neck = document.querySelector(".neck");
console.log("hi");
const wrapper= document.querySelector(".wrapper");
const doge=document.querySelector(".long-doge");
const text=document.querySelector(".dy-text");
let i=0;
function appendText() {
    const newPre = document.createElement('pre');
    newPre.textContent = neck.innerText;
    i++;
    text.innerText=`Your doge is ${i} times woww`;
    // Append the new paragraph to the scroll content
    doge.appendChild(newPre);
}

document.addEventListener('scroll', () => {
    // Define the condition for appending text (e.g., scroll position)
    if (document.scrollY > 30) { // Adjust the scroll threshold as needed
        appendText();
        appendwow();
    }
});

function appendwow(){
    let wow = document.createElement('div');
    wow.innerText="WOW";
    wow.className="wawo";
    wow.style.left=Math.random()*window.innerWidth - 100 + 'px';
    wow.style.top=wrapper.offsetHeight - 100 +'px';
    document.body.appendChild(wow);
}

