const interval = setInterval(()=>{
    const header = document.querySelector("._1QUKR");
    if (header){
        console.log(header);
        clearInterval(interval);

        var taxa = 1;

        const button = document.createElement("button");
        button.innerHTML = taxa.toFixed(2) + "x";
        button.setAttribute("id","speedControlButton");
        button.setAttribute('data-rate', taxa);
        button.classList.add("scb_off");

        button.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio");
            if (button.className === "scb_off"){
                document.querySelector("#speedControlButton").classList.replace('scb_off', 'scb_on');
                document.querySelector("#speedControlButton").setAttribute('data-rate', taxa);
                
                audios.forEach((audio)=>{
                    audio.playbackRate = taxa;
                    audio.defaultPlaybackRate = taxa;
                })
                
                console.log(button.className);
            } else {
                document.querySelector("#speedControlButton").classList.replace('scb_on', 'scb_off');
                document.querySelector("#speedControlButton").setAttribute('data-rate', 1);
                
                audios.forEach((audio)=>{
                    audio.playbackRate = 1;
                    audio.defaultPlaybackRate = 1;
                })
                
                console.log(button.className);
            }            
        });

        const minus = document.createElement("button");
        minus.innerHTML = "-";
        minus.setAttribute("id","minusButton");
        minus.addEventListener("click",()=>{
            taxa -= 0.25;
            button.innerHTML = taxa.toFixed(2) + "x"
            button.setAttribute('data-rate', taxa);
        });

        const plus = document.createElement("button");
        plus.innerHTML = "+";
        plus.setAttribute("id","plusButton");
        plus.addEventListener("click",()=>{
            taxa += 0.25;
            button.innerHTML = taxa.toFixed(2) + "x"
            button.setAttribute('data-rate', taxa);
        });

        header.appendChild(minus);
        header.appendChild(button);
        header.appendChild(plus);
        
        listenClick(taxa);
    }
},1000) 




function listenClick(taxa) {
    window.addEventListener('click', function(e){
        clickTarget = e.target.getAttribute('data-icon');
        if (clickTarget == 'audio-play') {
            rate = taxa;
            audios = document.querySelectorAll('audio');
            setAudiosRate(audios, rate);
        }
    });
}

function setAudiosRate(audios, rate) {
    for (audio of audios) {
        audio.playbackRate = rate;
        audio.defaultPlaybackRate = rate;
    }
}

