let circularProgress7 = document.querySelector("#xd"),
progressEndValue7 = document.querySelector("#percent-7"),
progressValue7 = document.querySelector("#prog-7");

let progressStartValue7 = 0,

speed7 = 10;

let progress7 = setInterval(() => {
        progressStartValue7++;
        
        progressValue7.textContent = `${progressStartValue7}%`;
        circularProgress7.style.background = `conic-gradient(#b03ce3 ${progressStartValue7 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue7==progressEndValue7.value){
            clearInterval(progress7);
        }
}, speed7);