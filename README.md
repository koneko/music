# music
## The simple javascript and html music player.
---
# Features
> Custom songs
>
> Cool GUI
>
> Open Source
> 
> Looping & sound control
---
# How to use
You can visit the online version [here](https://thekoneko.github.io/music), with the soundtrack of the game *[Gunpoint](https://store.steampowered.com/app/206190/Gunpoint/)* on it. But you can also put your own custom songs and listen localy.

---
## How to install and setup
1. [Download](https://github.com/thekoneko/music/archive/main.zip) this repository.
2. Extract it into its own folder.
3. Open the **songs** folder and put your own songs into the folder. (Please rename them so that they do not have any spaces in their name)
4. Open the script.js file. (Be very careful navigating around here.)
5. At the top of the file, there is a variable called **songs** change it to look like the example bellow
```
var songs = []
```
6. Now comes a tricky part, putting in the songs. To do this, simply list your songs like the example bellow, changing out song1 with your first song, and so on.
```
var songs = [
"Song1", "Song2", "Song3"
]
```
7. When you put all the songs, save the file.
8. Now open the index.html file, click on a song and press play. If you did everything correctly, it should start playing your song.
9. Enjoy!
