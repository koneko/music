var songs = [
    "Ryan Ike-Gunpoint-The Soundtrack-Main Theme-(Melancholia).mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-'Round-Gunpoint.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-ColdHallsAndFootfallsCrosslink.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-ColdHallsAndFootfalls.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-Dig-Crosslink.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-Dig.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-Leviathan-Crosslink.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-Leviathan.mp3",
    "Ryan Ike-Gunpoint-TheSoundtrack-Security,CircuitryAndYou.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-SubterfugeShuffle-Crosslink.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-SubterfugeShuffle.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-TheFive-FloorGoodbye-Crosslink.mp3",
    "Ryan Ike-Gunpoint-The Soundtrack-TheFive-FloorGoodbye.mp3"
]

console.log("Hello smart people that have accessed this.");
console.log("I have implimented a better control system, to access it just press Esc");
console.log("Or if you don't want to press Esc, just press 'Song Player' ");


var mam;

const createSongList = () => {
    const list = document.createElement('ol')
    for(let i = 0; i <songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))
        list.appendChild(item)
    }
    return list
}

document.getElementById('songList').appendChild(createSongList())

var y = document.getElementById("betteraudio");
y.style.display = "none";


songList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerText

    document.getElementById('curentlyPlayingSong').innerText = "▶Press Start to play▶: "
    document.getElementById('curentSong').innerText = clickedItem.innerText
    document.getElementById('start').innerText = ""
    player.load()
    const progressBar = document.getElementById('progress')
    progressBar.value = 0
}

const muteVol = () => {
    const slider = document.getElementById('slider')
    if(player.volume != 0) {
        player.volume = 0
        slider.value = 0
        document.getElementById('curentlyPlayingSong').innerText = "🔇Audio Muted🔇: "
    }
}
const maxVol = () => {
    const slider = document.getElementById('slider')
    if(player.volume != 1) {
        player.volume = 1
        slider.value = 1
        document.getElementById('curentlyPlayingSong').innerText = "🎧Currently Playing🎧: "
    }
}
const resetVol = () => {
    const slider = document.getElementById('slider')
    if(player.volume != 0.5) {
        player.volume = 0.5
        slider.value = 0.5
        document.getElementById('curentlyPlayingSong').innerText = "🎧Currently Playing🎧: "
    }
}
const playAudio = () => {
    if(player.readyState) {
        player.play()
        document.getElementById('curentlyPlayingSong').innerText = "🎧Currently Playing🎧: "
    }
}

const pauseAudio = () => {
    if(player.readyState) {
    player.pause()
    document.getElementById('curentlyPlayingSong').innerText = "⏸Paused Playing⏸: "
    }
}
const slider = document.getElementById('slider')
slider.oninput = (e) => {
 const volume = e.target.value
 player.volume = volume
 if(player.volume == 0) {
    document.getElementById('curentlyPlayingSong').innerText = "🔇Audio Muted🔇: "
}
const progressBar = document.getElementById('progress')
if(player.volume >= 0.001 & progressBar.value == 100) {
    document.getElementById('curentlyPlayingSong').innerText = "🏁Finished Song🏁: "
}
if(player.volume >= 0.001) {
    document.getElementById('curentlyPlayingSong').innerText = "🎧Currently Playing🎧: "
}
}

const updateProgress = () => {
    var stop = "."
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
        progressBar.value = (player.currentTime / player.duration) * 100
    }
    const progressBar = document.getElementById('progress')
    if(progressBar.value == 100) {
        document.getElementById('curentlyPlayingSong').innerText = "🏁Finished Song🏁: "
    }
    
}

function keyCode(event) {
    var x = event.keyCode;
    if (x == 27) {
        var y = document.getElementById("betteraudio");
        if (y.style.display === "none") {
          y.style.display = "block";
          alert("Better Control panel discovered!");
        } else {
          y.style.display = "none";
        }
    }
}



function trigger() { 
    var pep = document.getElementById("shit")
    if(mam=="yes") {
        mam="no"
        window.clearInterval(vari)
        pep.innerText = "Looping: Off"
    } else {
        mam="yes"
        var vari = setInterval(no, 900)
        pep.innerText = "Looping: On"
    }

}

function no() {
    if(progressBar.value == 100) {
        player.pause()
        player.load()
        player.play()
        document.getElementById('curentlyPlayingSong').innerText = "🎧Currently Playing🎧: "
    }
}



const progressBar = document.getElementById('progress')
progressBar.value = 100

//Scripted by ControledYT