const fs = require('fs')
// this command creats a file if it does not exist
fs.writeFileSync('notes.txt','this file is created by nodejs')

// challenge : Append a message to notes.txt

fs.appendFileSync('notes.txt','this is my first append message')