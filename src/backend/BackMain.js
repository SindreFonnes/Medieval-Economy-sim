/* eslint-disable */

import app from './../App.vue'

let data ={
    date: 0,
    tasks: [],
    citiesanddivisions:[
        {id:"0001",name:"Winter's Reach",iscity:true,complexes:[]}
    ],
    events:[],
    professions:[],
    citizens:[],
    resources:[],
    structuredesigns:[],
    complexes: [],
    wares:[],
    units:[
        "cubic meters",
        "square meters",
        "liters",
        "kilograms"
    ],
    tasktypes:[
        "exploit resource",
        "build structure",
        "build vehicle",
        "manufacture goods",
        "custom task"
    ],
    vehicles:[]
};

function getData(){
    return data;
}

function getCities() {
    let cities = [];
    for(let i = 0; i<data.citiesanddivisions.length; i++){
        if(data.citiesanddivisions[i].iscity){ 
            cities.push(data.citiesanddivisions[i])
        }
    }
    return cities;
}

function getBuildingmaterials() {
    let material = []
    for(let i = 0; i<data.wares.length; i++){
        if(data.wares[i].buildingmaterial) {
            material.push(data.wares[i])
        }
    }
    return material;
}

function setData(newdata){
    data = newdata;
    console.log(data)
    console.log('Hei')
    
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
    rerender,
    getCities,
    getBuildingmaterials
}