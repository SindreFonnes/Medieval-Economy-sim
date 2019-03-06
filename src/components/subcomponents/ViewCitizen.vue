<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column citizen" v-for="citizen in this.citizens" v-bind:key="citizen.id">

            <b>Name: {{citizen.name}} Surname: {{citizen.surname}}</b>
            <p>Age: {{citizen.age}}</p>
            <p>Belongs to: {{citizen.cityordivision}}</p>
            <p>Profession: {{citizen.Profession}}</p>
            <p>Current task: <v-select label="task" 
            :options="data.tasks" 
            v-model="citizen.task"
            v-on:change="updatetask"></v-select></p>
            <p>Available for new tasks : {{citizen.available}}</p>
            <button v-if="citizen.available" v-on:click="changeavailability(citizen, false)">Make unavailable</button>
            <button v-if="!citizen.available" v-on:click="changeavailability(citizen, true)">Make available</button>
            <button v-on:click="removeentry(citizen)">Remove Task</button>
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
            data: {}
        }
    },
    mounted: function() {
        this.data = backMain.getData()
        this.citizens = this.data.citizens
    },
    methods: {
        getData: function(){
            this.citizens = backMain.getData().citizens
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.citizens = tmp.citizens.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.citizens = []
            this.getData();
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
</style>

