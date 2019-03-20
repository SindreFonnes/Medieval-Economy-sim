<template>
    <div class="field inputfields">
        <label><b>{{errormessage}}</b></label>
        <label><b>Add Task</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Task Name</p></Label>
                <input class="inputbox" type="text" v-model="task.name">
            </div>
            <div class="input">
                <Label><p>Task type</p></Label>
                <select v-model="task.type">
                    <option v-for="tasktype in this.data.tasktypes" v-bind:key="tasktype.id" v-bind:value="tasktype.id">{{tasktype.name}}</option>
                </select>
            </div>
            <div class="input" v-if="task.type === data.tasktypes[0].id">
                <Label><p>Resource exploited</p></Label>
                <select v-model="task.resourceexploited">
                    <option v-for="resource in this.data.resources" v-bind:key="resource.id" v-bind:value="resource.id">{{resource.name}}</option>
                </select>
            </div>
            <div class="input" v-if="task.type===data.tasktypes[3].id">
                <Label><p>Ware used in manufacture</p></Label>
                <select label="Ware" v-model="task.wareusedinmanufacture">
                    <option  v-for="ware in this.data.wares" v-bind:key="ware.id" v-bind:value="ware.id">{{ware.name}}</option>
                </select>
            </div>
            <div class="input">
                <label><p>Has a worker cap</p></label>
                <input class="inputbox checkbox" type="checkbox" v-model="task.hasmaxworkers">
            </div>
            <div class="input" v-if="this.task.hasmaxworkers">
                <label><p>Max Workers</p></label>
                <input class="inputbox" type="number" step="1" v-model="task.maxamountofworkers">
            </div>
            <div class="input" v-if="task.type===data.tasktypes[3].id">
                <label><p>Amount of ware used per unit manufactured</p></label>
                <input type="number" steps="0.01" v-model="task.manufacturemodifier">
            </div>
            <div class="input" v-if="task.type===data.tasktypes[3].id||task.type===data.tasktypes[0].id" >
                <label><p>Production per worker</p></label>
                <input class="inputbox" type="number" step="1" v-model="task.productionperworker">
            </div>
            <div class="input">
                <label><p>Efficency</p></label>
                <input class="inputbox" type="number" step="0.01" v-model="task.efficency">
            </div>
            <div class="input" v-if="task.type == data.tasktypes[4].id">
                <label><p>Has a duration</p></label>
                <input class="inputbox checkbox" type="checkbox" v-model="task.hasaduration">
            </div>
            <div class="input" v-if="this.task.hasaduration">
                <label><p>Duration (at max workers, or one worker </p></label>
                <p>if no max worker and 100% efficency)</p>
                <input class="inputbox" type="number" step="1" v-model="task.taskduration">
            </div>
            <div class="input">
                <label><p>Have a revenue or upkeep</p></label>
                <input class="inputbox checkbox" type="checkbox" v-model="task.hasrevenueorupkeep">
            </div>
            <div class="input" v-if="this.task.hasrevenueorupkeep">
                <label><p>Revenue or upkeep per worker (in copper)</p></label>
                <input class="inputbox" type="number" step="0.01" v-model="task.revenueorupkeep">
            </div>
            <div class="input" v-if="task.type===data.tasktypes[0].id||task.type===data.tasktypes[3].id">
                <Label><p>Gain wares from exploitation</p></Label>
                <input type="checkbox" v-model="task.gainwares">
            </div>
            <div class="input" v-if="task.type===data.tasktypes[1].id">
                <label><p>Structure being constructed: </p></label>
                <select v-model="task.structureworkedon">
                    <option v-for="construction in underconstruction" v-bind:key="construction.id" v-bind:value="construction.id">{{construction.name}}</option>
                </select>
            </div>
            <div class="input" v-if="task.type===data.tasktypes[2].id">
                <label><p>Task Results</p></label>
                <!-- Make dropdown for vehicles -->
            </div>
            <div class="input" v-if="task.type===data.tasktypes[3].id&&task.gainwares">
                <Label><p>Ware gained from manufacture</p></Label>
                <select label="Ware" v-model="task.waregainedfrommanufacture">
                    <option  v-for="ware in this.data.wares" v-bind:key="ware.id" v-bind:value="ware.id">{{ware.name}}</option>
                </select>
            </div>
            <div class="input" v-if="task.type===data.tasktypes[4].id">
                <label><p>Task Results</p></label>
                <input class="inputbox" type="text" v-model="task.taskresults">
            </div>
            
        </div>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import shortid from 'shortid';
import clonedeep from 'lodash.clonedeep'
export default {
    name: "AddTask",
    data() {
        return {
            task: {
                name: "",
                id: "",
                type: 0,
                resourceexploited: "",
                amountofworkers: 0,
                hasmaxworkers: false,
                maxamountofworkers: 0,
                productionperworker: 0,
                efficency: 1,
                hasaduration: false,
                duration: 0,
                taskresults: "",
                hasrevenueorupkeep: false,
                revenueorupkeep: 0,
                gainwares: true,
                wareusedinmanufacture: "",
                waregainedfrommanufacture: "",
                structureworkedon: "",
                manufacturemodifier: 1
            },
            data: {},
            errormessage: "",
            underconstruction: []
        }
    },
    created: function(){
        this.data = backMain.getData()
        for(let i = 0; i<this.data.structures.length; i++){
            if(this.data.structures[i].underconstruction){
                this.underconstruction.push(this.data.structures[i])
            }
        }
        
    },
    methods: {
        submit: function() {
            let tmp = backMain.getData();
            this.errormessage=""
            if(this.task.name===""){
                this.errormessage="You must add a name to the task!"
                return;
            }
            if(this.task.type===""){
                this.errormessage="You must add a tasktype to the task!"
                return;
            }
            if(this.task.name===""){
                this.errormessage="You must add a name to the task!"
                return;
            }
            this.task.productionperworker = parseFloat(this.task.productionperworker)
            if((this.task.type===this.data.tasktypes[3].id||this.task.type===this.data.tasktypes[0].id)&&this.task.productionperworker===0.0){
                this.errormessage="You must add a amount of production per worker!"
                return;
            }
            if(this.task.type===this.data.tasktypes[0].id){
                if(this.task.resourceexploited!=""){
                    let i = tmp.resources.findIndex(t => t.id == this.task.resourceexploited)
                    tmp.resources[i].resourceexploited = true;
                } else {
                    this.errormessage = "You need to select a resource to exploit!"
                    return;
                }
            }
            if(this.task.type===this.data.tasktypes[3].id){
                if(this.task.wareusedinmanufacture===""){
                    this.errormessage = "You need to select a ware to use!"
                    return;
                }
            }
            if(this.task.type===this.data.tasktypes[3].id&&this.task.gainwares){
                if(this.task.gainedfrommanufacture===""){
                    this.errormessage = "You need to select a ware to gain!"
                    return;
                }
            }
            if(this.task.type===this.data.tasktypes[3].id){
                if(this.task.gainedfrommanufacture===this.task.wareusedinmanufacture){
                    this.errormessage = "You gain and use the same ware!"
                    return;
                }
            }
            this.task.amountofworkers = parseInt(this.task.amountofworkers)
            this.task.maxamountofworkers = parseInt(this.task.maxamountofworkers)
            this.task.efficency = parseFloat(this.task.efficency)
            this.task.duration = parseFloat(this.task.duration)
            this.task.revenueorupkeep = parseFloat(this.task.revenueorupkeep)
            this.task.manufacturemodifier = parseFloat(this.task.manufacturemodifier)
            this.task.id = shortid.generate()
            tmp.tasks.push(clonedeep(this.task));
            backMain.setData(clonedeep(tmp));
            this.task= {
                name: "",
                id: "",
                type: "",
                resourceexploited: "",
                amountofworkers: 0,
                hasmaxworkers: false,
                maxamountofworkers: 0,
                productionperworker: 0,
                efficency: 1,
                hasaduration: false,
                taskduration: 0,
                taskresults: "",
                hasrevenueorupkeep: false,
                revenueorupkeep: 0,
                gainwares: true,
                wareusedinmanufacture: "",
                waregainedfrommanufacture: "",
                structureworkedon: "",
                manufacturemodifier: 1
            }
        }
    }
}
</script>

<style scoped>

.initinput {
    margin:auto;
    padding-right: 0em; 
}
.input {
    padding-left: 3em;
    padding-right: 3em;
    margin: auto;
}
.inputfields {
    display: inline-block;
}
.inputbox{
    margin-bottom: 2em;
}
.checkbox{
    width: 1em;
    height: 1em;
}
</style>
