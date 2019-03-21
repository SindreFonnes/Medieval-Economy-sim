<template>
    <div class="ui">
        <div class="select">
            <select v-model="cityselected">
                <option v-for="(cityordivision, index) in getCitiesAndDivisions" v-bind:key="cityordivision.id" v-bind:value="index">{{cityordivision.name}}</option>
            </select>
            <select v-model="professiontypeselected">
                <option v-for="(type, index) in getProfessionTypes" v-bind:key="type" v-bind:value="index">{{type}}</option>
            </select>
            <select v-model="professionselected">
                <option v-for="(profession, index) in getProfessionsByType[professiontypeselected]" v-bind:key="profession.id" v-bind:value="index">{{profession.name}}</option>
            </select>
            <!-- <label>Citizen by type shown</label>
            <select v-model="professiontypeshown">
                <option v-for="(type, index) in getProfessionTypes" v-bind:key="type" v-bind:value="index">{{type}}</option>
            </select>      -->
        </div>
        <div class="ui four column doubling stackable grid container">
            <div class="column citizen" v-for="citizen in getCitizenByCitySortedByProfessionTypeAndProfession[cityselected][professiontypeselected][professionselected]" v-bind:key="citizen.id">
                <b>Profession: {{getProfessions.find(t => t.id == citizen.profession).name}}</b>
                <p>
                    <b>Current task: 
                        <select label="task" v-model="citizen.task" v-on:change="updatetask(citizen)">
                            <option value="">No task</option>
                            <option v-for="task in getTasks" 
                            v-bind:key="task.id" 
                            v-bind:value="task.id"
                            :disabled="task.hasmaxworkers&&task.maxamountofworkers === task.workers.length">{{task.name}}</option>
                        </select>
                    </b>
                </p>
                <p>Belongs to: {{getCitiesAndDivisions.find(t => t.id == citizen.cityordivision).name}}</p>
                <p>Name: {{citizen.name}} </p>
                <p>Surname: {{citizen.surname}}</p>
                <p>Age: {{citizen.age}}</p>
                <p>Available for new tasks : {{citizen.available}}</p>
                <button v-if="citizen.available" v-on:click="changeavailability(citizen, false)">Make unavailable</button>
                <button v-if="!citizen.available" v-on:click="changeavailability(citizen, true)">Make available</button>
                <button v-on:click="removeentry(citizen)">Remove Citizen</button>
            </div>
            <!-- <div class="column citizen" v-for="citizen in getCitizensByProfessionType[professiontypeshown]" v-bind:key="citizen.id">
                <b>Profession: {{getProfessions.find(t => t.id == citizen.profession).name}}</b>
                <p>
                    <b>Current task: 
                        <select label="task" v-model="citizen.task" v-on:change="updatetask(citizen)">
                            <option value="">No task</option>
                            <option v-for="task in getTasks" 
                            v-bind:key="task.id" 
                            v-bind:value="task.id"
                            :disabled="task.hasmaxworkers&&task.maxamountofworkers === task.workers.length">{{task.name}}</option>
                        </select>
                    </b>
                </p>
                <p>Belongs to: {{getCitiesAndDivisions.find(t => t.id == citizen.cityordivision).name}}</p>
                <p>Name: {{citizen.name}} </p>
                <p>Surname: {{citizen.surname}}</p>
                <p>Age: {{citizen.age}}</p>
                <p>Available for new tasks : {{citizen.available}}</p>
                <button v-if="citizen.available" v-on:click="changeavailability(citizen, false)">Make unavailable</button>
                <button v-if="!citizen.available" v-on:click="changeavailability(citizen, true)">Make available</button>
                <button v-on:click="removeentry(citizen)">Remove Citizen</button>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return{
            professiontypeshown: 0,
            cityselected: 0,
            professiontypeselected: 0,
            professionselected: 0
        }
    },
    computed: {
        ...mapGetters([
            'getCitizenByCitySortedByProfessionTypeAndProfession',
            'getCitizensByProfessionType',
            'getProfessionTypes',
            'getTasks',
            'getProfessions',
            'getCitiesAndDivisions',
            'getProfessionsByType'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_CITIZEN',
            'CITIZEN_CHANGE_AVAILABILITY',
            'CITIZEN_UPDATE_TASK'
        ]),
        removeentry: function(data){
            this.REMOVE_CITIZEN(data)
        },
        changeavailability: function(data, status){
            let payload = [data, status]
            this.CITIZEN_CHANGE_AVAILABILITY(payload)
        },
        updatetask: function(data){
            this.CITIZEN_UPDATE_TASK(data)
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

