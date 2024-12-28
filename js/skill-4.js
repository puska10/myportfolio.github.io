let circularProgress4 = document.querySelector("#python"),
progressEndValue4 = document.querySelector("#percent-4"),
progressValue4 = document.querySelector("#prog-4");

let progressStartValue4 = 0,

speed4 = 10;

let progress4 = setInterval(() => {
        progressStartValue4++;
        
        progressValue4.textContent = `${progressStartValue4}%`;
        circularProgress4.style.background = `conic-gradient(#b03ce3 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`
        
        if(progressStartValue4==progressEndValue4.value){
            clearInterval(progress4);
        }
}, speed4);