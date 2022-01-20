// **************** WRITING TO RTD *******************
import {ref, push} from 'firebase/database';
import {app, db} from "./libs/firebase/firebaseConfig.js";

console.log(app, db)

// Script the form submit
// Firebase RTD
//  1. import db from config file
//  2. import ref, push   firebase/database

document.forms['writeToRTD'].addEventListener("submit", onWriteData);

function onWriteData(e){
    // action where the name value pairs are processed 
    //  method of the form GET POST
    // append the name value pairs of the form elements
    e.preventDefault()
    const data = e.target.elements['writeUserData'].value.trim()
    console.log(data)

    // create a ref to the database path where we're sending the data
    // docRef path to where the data is to be written
    const docRef = ref(db, 'userEmails:/passwords:')
    // push = two arguments
    // docRef where the data is to go
    // object and the data
    const newUserRef = push(docRef,{
        name:data
    })
}

// **************** READING FROM RTD *******************
// 1. import {db} connection from the firebaseConfig.js
//  Read Data
//  import {ref, get}
import {ref, get} from 'firebase/database'
import {renderUser} from './templates/user'

async function pageInit(){
    console.log(1)
    const userRef = ref(db, 'inventory/')
    console.log(userRef)
    const userSnapShot = await get(userRef)
    console.log(userSnapShot.val())
    console.log(renderUser())
}

pageInit()
