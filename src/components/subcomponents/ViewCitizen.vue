<template>
    <div class="ui">
        <div class="select">
            <label>Citizen by type shown</label>
            <select v-model="professiontypeshown">
                <option v-for="(type, index) in data.professiontypes" v-bind:key="type" v-bind:value="index">{{type}}</option>
            </select>
            <button v-on:click="updateSorting">Update</button>
            
        </div>
        <div class="ui four column doubling stackable grid container" v-bind:key="key">
            <div class="column citizen" v-for="citizen in this.citizensbyprofessiontype[professiontypeshown]" v-bind:key="citizen.id">
                <b>Profession: {{data.professions.find(t => t.id == citizen.profession).name}}</b>
                <p><b>Current task: <select label="task" 
                :options="data.tasks" 
                v-model="citizen.task"
                v-on:change="updatetask"></select></b></p>
                <p>Belongs to: {{data.citiesanddivisions.find(t => t.id == citizen.cityordivision).name}}</p>
                <p>Name: {{citizen.name}} </p>
                <p>Surname: {{citizen.surname}}</p>
                <p>Age: {{citizen.age}}</p>
                <p>Available for new tasks : {{citizen.available}}</p>
                <button v-if="citizen.available" v-on:click="changeavailability(citizen, false)">Make unavailable</button>
                <button v-if="!citizen.available" v-on:click="changeavailability(citizen, true)">Make available</button>
                <button v-on:click="removeentry(citizen)">Remove Citizen</button>
            </div>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'

export default {
    data() {
        return{
            citizens: [],
            data: {},
            showsubset: false,
            professiontypeshown: 0,
            citizensbyprofessiontype: [
                [],//0
                [],//1
                [],//2
                [],//3
                [],//4
                [],//5
                [],//6
                []//7
                ],
            key: 0
        }
    },
    created: function() {
        this.citizensbyprofessiontype = [
                [],//0
                [],//1
                [],//2
                [],//3
                [],//4
                [],//5
                [],//6
                []//7
                ]
        this.data = backMain.getData()
        this.citizens = this.data.citizens
        for(let i = 0; i<this.citizens.length; i++) {
            if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[0]) {
                this.citizensbyprofessiontype[0].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[1]) {
                this.citizensbyprofessiontype[1].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[2]) {
                this.citizensbyprofessiontype[2].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[3]) {
                this.citizensbyprofessiontype[3].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[4]) {
                this.citizensbyprofessiontype[4].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[5]) {
                this.citizensbyprofessiontype[5].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[6]) {
                this.citizensbyprofessiontype[6].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[7]) {
                this.citizensbyprofessiontype[7].push(this.citizens[i])
            }
        }
    },
    methods: {
        updateSorting: function(){
            this.citizensbyprofessiontype = [
                [],//0
                [],//1
                [],//2
                [],//3
                [],//4
                [],//5
                [],//6
                []//7
                ]
            this.data = backMain.getData()
            this.citizens = this.data.citizens
            for(let i = 0; i<this.citizens.length; i++) {
            if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[0]) {
                this.citizensbyprofessiontype[0].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[1]) {
                this.citizensbyprofessiontype[1].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[2]) {
                this.citizensbyprofessiontype[2].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[3]) {
                this.citizensbyprofessiontype[3].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[4]) {
                this.citizensbyprofessiontype[4].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[5]) {
                this.citizensbyprofessiontype[5].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[6]) {
                this.citizensbyprofessiontype[6].push(this.citizens[i])
            } else if(this.data.professions.find(t => t.id == this.citizens[i].profession).type==this.data.professiontypes[7]) {
                this.citizensbyprofessiontype[7].push(this.citizens[i])
            }
            this.key++
        }
        },
        getData: function(){
            this.citizens = backMain.getData().citizens
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.citizens = tmp.citizens.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.citizens = []
            this.getData();
            this.updateSorting();
        },
        changeavailability: function(data, status){
            let tmp = backMain.getData();
            let tmpindex = tmp.citizens.findIndex(t => t.id == data.id);
            tmp.citizens[tmpindex].available = status;
            backMain.setData(clonedeep(tmp));
            this.getData();
        },
        updatetask: function(data){
            let tmp = backMain.getData()
            let tmpindex = tmp.citizens.findIndex(t => t.id == data.id);
            tmp.citizens[tmpindex].task = data.task;
            backMain.setData(clonedeep(tmp));
            this.getData();
        }
    }
}
</script>

<style>
.citizen{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}

.select{
    padding: 3em;
}
</style>

