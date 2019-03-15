<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column task" v-for="profession in this.professions" v-bind:key="profession.id">
           
            <b>{{profession.name}}</b>
            <p>{{profession.description}}</p>
            <p>{{profession.type}}</p>
            <p>Workhours :{{profession.workhours}}</p>
            <div>
                <div v-if="profession.revenueorupkeep>0">
                    Income: {{profession.revenueorupkeep}}
                </div>
                <div v-if="profession.revenueorupkeep<0">
                    Upkeep: {{Math.abs(profession.revenueorupkeep)}}
                </div>
            </div>
            <button v-on:click="removeentry(profession)">Remove Profession</button>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            professions: []
        }
    },
    created: function() {
        this.professions = backMain.getData().professions
    },
    methods: {
        getData: function(){
            this.professions = backMain.getData().professions
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.professions = tmp.professions.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.professions = []
            this.getData();
        }
    }
}
</script>

<style>
.task{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>
