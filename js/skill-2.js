let circularProgress2 = document.querySelector("#java"),
progressEndValue2 = document.querySelector("#percent-2"),
progressValue2 = document.querySelector("#prog-2");

let progressStartValue2 = 0,

speed2 = 10;

let progress2 = setInterval(() => {
        progressStartValue2++;
        
        progressValue2.textContent = `${progressStartValue2}%`;
        circularProgress2.style.background = `conic-gradient(#b03ce3 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue2==progressEndValue2.value){
            clearInterval(progress2);
        }
}, speed2);