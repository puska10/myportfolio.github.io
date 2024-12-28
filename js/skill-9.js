let circularProgress9 = document.querySelector("#figma"),
progressEndValue9 = document.querySelector("#percent-9"),
progressValue9 = document.querySelector("#prog-9");

let progressStartValue9 = 0,

speed9 = 10;

let progress9 = setInterval(() => {
        progressStartValue9++;
        
        progressValue9.textContent = `${progressStartValue9}%`;
        circularProgress9.style.background = `conic-gradient(#b03ce3 ${progressStartValue9 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue9==progressEndValue9.value){
            clearInterval(progress9);
        }
}, speed9);