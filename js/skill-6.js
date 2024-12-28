let circularProgress6 = document.querySelector("#photoshop"),
progressEndValue6 = document.querySelector("#percent-6"),
progressValue6 = document.querySelector("#prog-6");

let progressStartValue6 = 0,

speed6 = 10;

let progress6 = setInterval(() => {
        progressStartValue6++;
        
        progressValue6.textContent = `${progressStartValue6}%`;
        circularProgress6.style.background = `conic-gradient(#b03ce3 ${progressStartValue6 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue6==progressEndValue6.value){
            clearInterval(progress6);
        }
}, speed6);