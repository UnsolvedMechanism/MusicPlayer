const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const playPauseIcon = document.querySelector('#play-pause-icon');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const shufBtn = document.querySelector('.shuffle');
const muteBtn = document.querySelector('.mute');
const muteIcon = document.querySelector('#mute-icon');

let isPlaying = false;

// const song0Audio = new Audio('./music/song.mp3');
const song1Audio = new Audio('static/music/song1.mp3');
const song2Audio = new Audio('static/music/song2.mp3');
const song3Audio = new Audio('static/music/song3.mp3');
const song4Audio = new Audio('static/music/song4.mp3');
const song5Audio = new Audio('static/music/song5.mp3');
const song6Audio = new Audio('static/music/song6.mp3');
const song7Audio = new Audio('static/music/song7.mp3');
const song8Audio = new Audio('static/music/song8.mp3');
const song9Audio = new Audio('static/music/song9.mp3');
const song10Audio = new Audio('static/music/song10.mp3');
const song11Audio = new Audio('static/music/song11.mp3');
const song12Audio = new Audio('static/music/song12.mp3');
const song13Audio = new Audio('static/music/song13.mp3');
const song14Audio = new Audio('static/music/song14.mp3');
const song15Audio = new Audio('static/music/song15.mp3');
const song16Audio = new Audio('static/music/song16.mp3');
const song17Audio = new Audio('static/music/song17.mp3');
const song18Audio = new Audio('static/music/song18.mp3');
const song19Audio = new Audio('static/music/song19.mp3');
const song20Audio = new Audio('static/music/song20.mp3');
const song21Audio = new Audio('static/music/song21.mp3');
const song22Audio = new Audio('static/music/song22.mp3');
const song23Audio = new Audio('static/music/song23.mp3');
const song24Audio = new Audio('static/music/song24.mp3');
const song25Audio = new Audio('static/music/song25.mp3');
const song26Audio = new Audio('static/music/song26.mp3');
const song27Audio = new Audio('static/music/song27.mp3');
const song28Audio = new Audio('static/music/song28.mp3');
const song29Audio = new Audio('static/music/song29.mp3');
const song30Audio = new Audio('static/music/song30.mp3');
const song31Audio = new Audio('static/music/song31.mp3');
const song32Audio = new Audio('static/music/song32.mp3');
const song33Audio = new Audio('static/music/song33.mp3');
const song34Audio = new Audio('static/music/song34.mp3');
const song35Audio = new Audio('static/music/song35.mp3');
const song36Audio = new Audio('static/music/song36.mp3');
const song37Audio = new Audio('static/music/song37.mp3');
const song38Audio = new Audio('static/music/song38.mp3');
const song39Audio = new Audio('static/music/song39.mp3');
const song40Audio = new Audio('static/music/song40.mp3');
const song41Audio = new Audio('static/music/song41.mp3');
const song42Audio = new Audio('static/music/song42.mp3');
const song43Audio = new Audio('static/music/song43.mp3');
const song44Audio = new Audio('static/music/song44.mp3');
const song45Audio = new Audio('static/music/song45.mp3');
const song46Audio = new Audio('static/music/song46.mp3');
const song47Audio = new Audio('static/music/song47.mp3');
const song48Audio = new Audio('static/music/song48.mp3');
const song49Audio = new Audio('static/music/song49.mp3');

const songs = [
    {ele:song1Audio, audioName: 'Song 1'},
    {ele:song2Audio, audioName: 'Song 2'},
    {ele:song3Audio, audioName: 'Song 3'},
    {ele:song4Audio, audioName: 'Song 4'},
    {ele:song5Audio, audioName: 'Song 5'},
    {ele:song6Audio, audioName: 'Song 6'},
    {ele:song7Audio, audioName: 'Song 7'},
    {ele:song8Audio, audioName: 'Song 8'},
    {ele:song9Audio, audioName: 'Song 9'},
    {ele:song10Audio, audioName: 'Song 10'},
    {ele:song11Audio, audioName: 'Song 11'},
    {ele:song12Audio, audioName: 'Song 12'},
    {ele:song13Audio, audioName: 'Song 13'},
    {ele:song14Audio, audioName: 'Song 14'},
    {ele:song15Audio, audioName: 'Song 15'},
    {ele:song16Audio, audioName: 'Song 17'},
    {ele:song18Audio, audioName: 'Song 18'},
    {ele:song19Audio, audioName: 'Song 19'},
    {ele:song20Audio, audioName: 'Song 20'},
    {ele:song21Audio, audioName: 'Song 21'},
    {ele:song22Audio, audioName: 'Song 22'},
    {ele:song23Audio, audioName: 'Song 23'},
    {ele:song24Audio, audioName: 'Song 25'},
    {ele:song26Audio, audioName: 'Song 26'},
    {ele:song27Audio, audioName: 'Song 27'},
    {ele:song28Audio, audioName: 'Song 28'},
    {ele:song29Audio, audioName: 'Song 29'},
    {ele:song30Audio, audioName: 'Song 30'},
    {ele:song31Audio, audioName: 'Song 31'},
    {ele:song32Audio, audioName: 'Song 32'},
    {ele:song33Audio, audioName: 'Song 33'},
    {ele:song34Audio, audioName: 'Song 34'},
    {ele:song35Audio, audioName: 'Song 35'},
    {ele:song36Audio, audioName: 'Song 36'},
    {ele:song37Audio, audioName: 'Song 37'},
    {ele:song38Audio, audioName: 'Song 38'},
    {ele:song39Audio, audioName: 'Song 39'},
    {ele:song40Audio, audioName: 'Song 40'},
    {ele:song41Audio, audioName: 'Song 41'},
    {ele:song42Audio, audioName: 'Song 42'},
    {ele:song43Audio, audioName: 'Song 43'},
    {ele:song44Audio, audioName: 'Song 44'},
    {ele:song45Audio, audioName: 'Song 45'},
    {ele:song46Audio, audioName: 'Song 46'},
    {ele:song47Audio, audioName: 'Song 47'},
    {ele:song48Audio, audioName: 'Song 48'},
    {ele:song49Audio, audioName: 'Song 49'}
]

let cur = 0;
let mute = 0;
let currentSong = songs[cur].ele;
songName.textContent = songs[cur].audioName;

for(const song of songs){
    // updateProgressBar();
    song.ele.addEventListener('ended', ()=>{
        updateSong('next');
        updateList();
    })
}

muteBtn.addEventListener('click', ()=>{
    if(mute == 0){
        mute = 1;
        currentSong.volume=0;
        muteIcon.className = "ph-bold ph-speaker-x"
    }else{
        mute = 0;
        currentSong.volume=1;
        muteIcon.className = "ph-bold ph-speaker-high"
    }
})

playBtn.addEventListener('click',()=>{
    if(currentSong.paused){
        currentSong.play();
        playPauseIcon.className = "ph-bold ph-pause"
    }else{
        currentSong.pause();
        playPauseIcon.className = "ph-bold ph-play"
    }
})

const updateSong = (action)=>{
    currentSong.pause();
    currentSong.currentTime=0;
    if(action === 'next'){
        cur++;
        if(cur>songs.length-1){
            cur = 0;
        }
    }
    if(action === 'prev'){
        cur--;
        if(cur<0){
            cur = songs.length-1;
        }
    }
    currentSong = songs[cur].ele;
    songName.textContent = songs[cur].audioName;
    currentSong.play();
}

nextBtn.addEventListener('click', ()=>{
    updateSong('next');
})

prevBtn.addEventListener('click', ()=>{
    updateSong('prev');
})


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shufBtn.addEventListener('click', ()=>{
    // arr = [1,2,3,4,5];
    songs = shuffleArray(songs);
    console.log(songs)
})

const slider = document.getElementById("songSlider");
const progressBar = document.getElementById("progressBar");
const songTime = document.getElementById("songTime");

slider.addEventListener("input", function() {
    updateProgressBar();
});

function updateProgressBar() {
    const progress = (slider.value / slider.max) * 100;
    progressBar.style.width = `${progress}%`;
    currentSong.currentTime = progress;

    const durationInSeconds = Math.floor((slider.value / slider.max) * currentSong.duration);

    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    songTime.textContent = formattedTime;
}
