/* eslint-disable */

import WebSocket from 'isomorphic-ws'
import store from './../store'



const ws = new WebSocket('ws://localhost:8888/');

function sendData(message){
    ws.send(JSON.stringify(message))
}

ws.onopen = function open() {

     console.log('Connection established');
//   let message = {
//       type: 0,
//       content: "Connection established"
//   }
//   sendData(message)
};

ws.onmessage = function incoming({ data }) {
    let message = JSON.parse(data)

    //loading on startup
    if (message.type === 0){
        console.log(message.content)
        store.commit('SET_DATA', (message.content[0]))
        store.commit('SET_LOG',(message.content[1]))
    }

    //from endturn, days pass.
    if(message.type === 1) {
        store.commit('SET_DATA',(message.content))
    }

}


function endturn(days){
    console.log(days)
    //ws.send(days)
    let message = {
        type: 1,
        dayspassed: days,
        content: store.getters.getData
    };
    sendData(message)
    console.log('Endturn message sent!' + JSON.stringify(message))
}

function pushdata(){
    let message = {
        type: 2,
        content: store.getters.getData
    }
    sendData(message)
}

function getData(){
    let message = {
        type: 3
    }
    sendData(message)
}

function makeBackup(){
    let message = {
        type: 4
    }
    sendData(message)
}





// ws.onclose = function close() {
//   console.log('disconnected');
// };

// ws.onmessage = function incoming(data) {
//   console.log(`Roundtrip time: ${Date.now() - data} ms`);

//   setTimeout(function timeout() {
//     ws.send(Date.now());
//   }, 500);
// };




export default{
    endturn,
    pushdata,
    getData,
    makeBackup
}