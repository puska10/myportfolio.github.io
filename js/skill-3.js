let circularProgress3 = document.querySelector("#css"),
progressEndValue3 = document.querySelector("#percent-3"),
progressValue3 = document.querySelector("#prog-3");

let progressStartValue3 = 0,

speed3 = 10;

let progress3 = setInterval(() => {
        progressStartValue3++;
        
        progressValue3.textContent = `${progressStartValue3}%`;
        circularProgress3.style.background = `conic-gradient(#b03ce3 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue3==progressEndValue3.value){
            clearInterval(progress3);
        }
}, speed3);