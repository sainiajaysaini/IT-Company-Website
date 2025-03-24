let span= document.querySelector("span");

span.style.color = "#4475ba";

function change(text,delay){
    setInterval(()=>{
        span.innerText = text;
    },delay);


}
change("Laravel ",1000);
change("Node.js",2000);
change("Python",3000);
change("Vue.js ",4000);
change("Angular.js",5000);
change("React.js",6000);
change("Flutter",7000);
change("React Native ",8000);
change("Magento",9000);
change("Shopify",10000);

function changeImage()
{
    document.getElementById('imgs').src="web-app-1.svg";
}
function changeIage()
{
    document.getElementById('imgs').src="mobile-app-1.svg"
    // document.getElementById('lodi').innerText=""
}
function changeIge()
{
    document.getElementById('imgs').src="Web-dev.svg"
}
function changeIe()
{
    document.getElementById('imgs').src="software-testing.svg"
}
function changee()
{
    document.getElementById('imgs').src="uxui.svg"
}
function changeee()
{
    document.getElementById('imgs').src="DM-scaled.webp"
}


function animateCounter(counterElement) {
    const target = +counterElement.getAttribute('data-target');
    let count = 0;
    const increment = Math.ceil(target / 100); // Adjust for smoothness

    function updateCounter() {
        if (count < target) {
            count += increment;
            counterElement.textContent = count + "+";
            setTimeout(updateCounter, 30); // Speed of counting
        } else {
            counterElement.textContent = target + "+";
        }
    }
    updateCounter();
}

document.querySelectorAll('.counter').forEach(animateCounter);