/* eslint-disable */

import app from './../App.vue'

let data ={
    date: 0,
    tasks: [],
    citiesanddivisions:[
        {name:"winters reach",iscity:true,structures:[]}
    ],
    events:[],
    professions:[],
    citizens:[],
    resources:[],
    structures:[]
};

function getData(){
    return data;
}

function setData(newdata){
    this.data = newdata;
    
}

function rerender(){
    app.methods.rerender();
}

// saving:
//localStorage.setItem('save', JSON.stringify(data));

// loading:
//let loadedData = JSON.parse(localStorage.getItem('save'));

// export:



function downloadTextFile(text, name) {
    const a = document.createElement('a');
    const type = name.split(".").pop();
    a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
    a.download = name;
    a.click();
}
//download file function
//downloadTextFile(JSON.stringify(data), 'savefile.json');

export default {
    getData,
    setData,
    rerender
}