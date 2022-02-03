require('./db/connections')
const mongoose = require('mongoose')

const yargs = require('yargs/yargs')
const{hideBin}=require('yargs/helpers')
const { addMovie } = require('./film/filmMethods')
const argv = yargs(hideBin(process.argv)).argv

const app = async()=>{
    if(argv.add){
        await addMovie({
            name: argv.title,
            actor: argv.actor
        })
    } else if (argv.list){
        console.log('list')
    } else {
        console.log('wrong command')
    }
}

app()