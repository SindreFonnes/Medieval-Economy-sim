<template>
    <div class="field inputfields">
        <label><b>Add Task</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Task Name</p></Label>
                <input class="inputbox" type="text" v-model="task.name">
            </div>
            <div class="input">
                <label><p>Has a worker cap</p></label>
                <input class="inputbox checkbox" type="checkbox" v-model="task.hasmaxworkers">
            </div>
            <div class="input" v-if="this.task.hasmaxworkers">
                <label><p>Max Workers</p></label>
                <input class="inputbox" type="number" step="1" v-model="task.maxamountofworkers">
            </div>
            <div class="input">
                <label><p>Efficency</p></label>
                <input class="inputbox" type="number" step="0.01" v-model="task.efficency">
            </div>
            <div class="input">
                <label><p>Has a duration</p></label>
                <input class="inputbox checkbox" type="checkbox" v-model="task.hasaduration">
            </div>
            <div class="input" v-if="this.task.hasaduration">
                <label><p>Duration (at max workers and 100% efficency)</p></label>
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
            <div class="input">
                <label><p>Task Results</p></label>
                <input class="inputbox" type="text" v-model="task.taskresults">
                <!-- What is the outcome of the task, new structure(docks, buildings walls etc) or something else. -->
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
                amountofworkers: 0,
                hasmaxworkers: false,
                maxamountofworkers: 0,
                efficency: 1,
                hasaduration: false,
                taskduration: 0,
                taskresults: "",
                hasrevenueorupkeep: false,
                revenueorupkeep: 0
            }
        }
    },
    methods: {
        submit: function() {
            let tmp = backMain.getData();
            this.task.amountofworkers = parseInt(this.task.amountofworkers)
            this.task.maxamountofworkers = parseInt(this.task.maxamountofworkers)
            this.task.efficency = parseFloat(this.task.efficency)
            this.task.duration = parseFloat(this.task.duration)
            this.task.revenueorupkeep = parseFloat(this.task.revenueorupkeep)
            this.task.id = shortid.generate()
            tmp.tasks.push(clonedeep(this.task));
            backMain.setData(clonedeep(tmp));
            this.task.name = "";
            this.task.id = "";
            this.task.amountofworkers = 0;
            this.task.hasmaxworkers = false;
            this.task.maxamountofworkers = 0;
            this.task.efficency = 1;
            this.task.hasaduration = false;
            this.task.taskduration = 0;
            this.task.taskresults = "";
            //backMain.rerender();
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
