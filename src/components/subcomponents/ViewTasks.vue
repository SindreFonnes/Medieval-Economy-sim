<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column task" v-for="task in this.tasks" v-bind:key="task.id">
           
            <b>{{task.name}}</b>
             
            <div class="input" v-if="task.hasmaxworkers">
                <label><p>Workers {{task.amountofworkers}}/{{task.maxamountofworkers}}</p></label>
            </div>
            <div class="input" v-if="!task.hasmaxworkers">
                <label><p>Workers {{task.amountofworkers}}</p></label>
            </div>
            <div v-if="task.hasaduration&&task.amountofworkers>0">
                Remaining duration {{task.taskduration*(task.amountofworkers/task.maxamountofworkers)*task.efficency}}
            </div>
            <div v-if="task.type==='exploit resource'">
                <p>Resource being exploited: {{task.resourcebeingexploited}}</p>
            </div>
            <div class="input">
                <label><p>Efficency</p></label>
                <input class="inputbox" type="number" step="0.01" v-model="task.efficency">
            </div>
            <p>{{task.taskresults}}</p>
            <div v-if="task.hasrevenueorupkeep">
                <div v-if="task.revenueorupkeep>0">
                    Income: {{task.revenueorupkeep}}
                </div>
                <div v-if="task.revenueorupkeep<0">
                    Upkeep: {{Math.abs(task.revenueorupkeep)}}
                </div>
            </div>
            <button v-on:click="removeentry(task)">Remove Task</button>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            tasks: []
        }
    },
    mounted: function() {
        this.tasks = backMain.getData().tasks
    },
    methods: {
        getData: function(){
            this.tasks = backMain.getData().tasks
        },
        removeentry: function(data){
            let tmp = backMain.getData()
            if(data.type===tmp.tasktypes[0]){
                let i = tmp.resources.findIndex(t => t.id == this.data.resourceexploited)
                tmp.resources[i].resourceexploited = false;
            }

            tmp.tasks = tmp.tasks.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.tasks = []
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

