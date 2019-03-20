/* eslint-disable */

import WebSocket from 'isomorphic-ws'
import BackMain from './BackMain'
import clonedeep from 'lodash.clonedeep'
import store from './../store'



const ws = new WebSocket('ws://localhost:8888/');

function sendData(message){
    ws.send(JSON.stringify(message))
}

ws.onopen = function open() {
  console.log('connected');
  let message = {
      type: 0,
      content: "Connection established"
  }
  sendData(message)
};

ws.onmessage = function incoming({ data }) {
    let message = JSON.parse(data)
    //loading on startup
    if(message.type === 0){
        console.log(message.content)
        store.mutations.setData(message.content[0])
        store.mutations.setLog(message.content[1])
        BackMain.setData(clonedeep(message.content[0]))
    }
    //from endturn, days pass.
    if(message.type === 1){
        store.mutations.setData(message.content)
        BackMain.setData(clonedeep(message.content))
    }

    if(message.type === 10){
        console.log(message.content)
        getData()
    }
}


function endturn(days){
    //ws.send(days)
    let message = {
        type: 1,
        days: days,
        content: store.getters.getData()
    };
    sendData(message)
    console.log('sent!')
}

function pushdata(){
    let message = {
        type: 2,
        content: store.getters.getData()
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