let circularProgress1 = document.querySelector("#html"),
progressEndValue1 = document.querySelector("#percent-1"),
progressValue1 = document.querySelector("#prog-1");

let progressStartValue = 0,

speed = 10;

let progress = setInterval(() => {
        progressStartValue++;
        
        progressValue1.textContent = `${progressStartValue}%`;
        circularProgress1.style.background = `conic-gradient(#b03ce3 ${progressStartValue * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue==progressEndValue1.value){
            clearInterval(progress);
        }
}, speed);