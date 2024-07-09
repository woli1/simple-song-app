let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;

}
function playPause(){
    console.log(ctrlIcon.classList.contains("fa-play"));
    if(ctrlIcon.classList.contains("fa-play")){
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
    else{
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
       
    }
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}
/*if(song.play()){*/
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
/*}*/