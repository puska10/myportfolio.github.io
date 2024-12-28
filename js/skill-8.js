let circularProgress8 = document.querySelector("#indesign"),
progressEndValue8 = document.querySelector("#percent-8"),
progressValue8 = document.querySelector("#prog-8");

let progressStartValue8 = 0,

speed8 = 10;

let progress8 = setInterval(() => {
        progressStartValue8++;
        
        progressValue8.textContent = `${progressStartValue8}%`;
        circularProgress8.style.background = `conic-gradient(#b03ce3 ${progressStartValue8 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue8==progressEndValue8.value){
            clearInterval(progress8);
        }
}, speed8);