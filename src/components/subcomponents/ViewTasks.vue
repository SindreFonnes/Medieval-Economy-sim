<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column task" v-for="task in this.data.tasks" v-bind:key="task.id">
           
            <b>{{task.name}}</b>
             
            <div class="input" v-if="task.hasmaxworkers">
                <label><p>Workers {{task.amountofworkers}}/{{task.maxamountofworkers}}</p></label>
            </div>
            <div class="input" v-if="!task.hasmaxworkers">
                <label><p>Workers {{task.amountofworkers}}</p></label>
            </div>
            <div>
                <p>Production per worker :{{task.productionperworker}}</p>
            </div>
            <div>
                <p>Gainwares :{{task.gainwares}}</p>
            </div>
            <div v-if="task.type==data.tasktypes[0]">
                <p>Resource being exploited: {{data.tasks.find(t => t.id == task.resourceexploited).name}}</p>
            </div>
            <div class="input">
                <label><p>Efficency</p></label>
                <input class="inputbox" type="number" step="0.01" v-model="task.efficency">
            </div>
            <div v-if="task.type == data.tasktype[3]">
                <p>Ware used :{{data.wares.find(t => t.id == task.wareusedinmanufacture).name}}</p>
            </div>
            <div v-if="task.type == data.tasktypes[0]&&task.gainwares">
                <p>Ware gained :{{data.wares.find(t => t.id == data.resources.find(s => s.id == task.resourceexploited).warewhenexploited).name}}</p>
            </div>
            <div v-if="task.type == data.tasktype[3]&&task.gainwares">
                <p>Ware gained :{{data.wares.find(t => t.id == task.waregainedfrommanufacture).name}}</p>
            </div>
            <div v-if="task.type == data.tasktype[3]">
                <p>Amount of ware used per unit manufactured :{{task.manufacturemodifier}}</p>
            </div>
            <div v-if="task.type == data.tasktype[3]">
                {{task.structureworkedon}}
                <p>Design used :{{data.structuredesigns.find(t => t.id == data.structures.find(s => s.id == task.structureworkedon).designused).name}}</p>
            </div>
            <div v-if="task.hasrevenueorupkeep">
                <p>Per worker</p>
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
            data:[]
        }
    },
    created: function() {
        this.data = backMain.getData()
    },
    methods: {
        getData: function(){
            this.data = backMain.getData()
        },
        removeentry: function(data){
            let tmp = backMain.getData()
            if(data.type===tmp.tasktypes[0]){
                let i = tmp.resources.findIndex(t => t.id == this.data.resourceexploited)
                tmp.resources[i].resourceexploited = false;
            }

            tmp.tasks = tmp.tasks.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.data = []
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

