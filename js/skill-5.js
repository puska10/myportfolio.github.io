let circularProgress5 = document.querySelector("#illustrator"),
progressEndValue5 = document.querySelector("#percent-5"),
progressValue5 = document.querySelector("#prog-5");

let progressStartValue5 = 0,

speed5 = 10;

let progress5 = setInterval(() => {
        progressStartValue5++;
        
        progressValue5.textContent = `${progressStartValue5}%`;
        circularProgress5.style.background = `conic-gradient(#b03ce3 ${progressStartValue5 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue5==progressEndValue5.value){
            clearInterval(progress5);
        }
}, speed5);