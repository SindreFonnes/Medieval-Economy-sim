/* eslint-disable */

import app from './../App.vue'


let data ={
    date: 0,
    taxrate: 0.3,
    tasks: [],
    citiesanddivisions:[
        {id:"0001",name:"Winter's Reach",iscity:true,complexes:[]}
    ],
    events:[],
    professions:[],
    professiontypes:[
        "Laborer",
        "Craftsman",
        "Professional",
        "Salesman",
        "Servant",
        "Warrior",
        "Artist",
        "Upper Class"
    ],
    citizens:[],
    resources:[],
    structuredesigns:[],
    structures:[],
    complexes: [],
    wares:[],
    units:[
        "cubic meters",
        "square meters",
        "liters",
        "kilograms"
    ],
    tasktypes:[
        {
            id: 0,
            name: "exploit resource"
        },
        {
            id: 1,
            name: "build structure"
        },
        {
            id: 2,
            name: "build vehicle"
        },
        {
            id: 3,
            name: "manufacture goods"
        },
        {
            id: 4,
            name:"custom task"
        }   
    ],
    vehicles:[]
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