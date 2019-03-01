<template>
    <div class="field inputfields">
        <label><b>Add Task</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Task Name</p></Label>
                <input type="text" v-model="this.taskname">
            </div>
            <div class="input">
                <label><p>Task Goal</p></label>
                <!-- What is the outcome of the task, new structure(docks, buildings walls etc) or something else. -->
            </div>
        </div>
        <button v-on:click="submitCity"></button>
    </div>
</template>

<script>
import db from "./../../backend/Database"

export default {
    name: "AddCity",
    data() {
        return {
            taskname: ""
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.input {
    padding-left: 5em;
}
.inputfields {
    display: inline-block;
}
</style>
