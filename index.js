const animated = document.getElementById("smileyEdge");

animated.addEventListener('animationend', () =>{
    document.getElementById("header").innerText = "Accepted"
})