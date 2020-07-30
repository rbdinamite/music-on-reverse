/**
 * Main file in project
 */
const readline = require('readline-sync')

 function start() {
    const content = {}
    
    content.singerName = askAndReturnSingerName()
    content.songName = askAndReturnSongName()

    function askAndReturnSingerName() {
        return readline.question('Type a singer name: ')
    }

    function askAndReturnSongName() {
        return readline.question('Type a song name: ')
    }

    console.log(content)
 }

 start()