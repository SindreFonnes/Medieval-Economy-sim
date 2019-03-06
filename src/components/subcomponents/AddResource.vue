<template>
    <div class="field inputfields">
        <label><b>Add Resource</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Resource Name</p></Label>
                <input class="inputbox" type="text" v-model="profession.name">
            </div>
            <div class="input">
                <label><p>Resource Description</p></label>
                <input class="inputbox" type="text" v-model="profession.description">
            </div>
            <div class="input">
                <label><p>Resource Price in copper per unit</p></label>
                <input class="inputbox" type="number" steps="1" v-model="resource.price">
            </div>
            <div class="input">
                <label><p>Max amount of workers (0 if unlimited)</p></label>
                <input class="inputbox" type="number" steps="1" v-model="resource.maxworkers">
            </div>
            <div class="input">
                <label><p>Production per Worker</p></label>
                <input class="inputbox" type="number" steps="1" v-model="resource.productionperworker">
            </div>
            <div class="input">
                <label><p>Finite resource?</p></label>
                <input class="inputbox" type="checkbox" v-model="resource.isfiniteresource">
            </div>
            <div class="input">
                <label><p>Resource amount</p></label>
                <input class="inputbox" type="number" steps="1" v-model="resource.resourceamount">
            </div>
        </div>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import shortid from 'shortid';
export default {
    name: "AddResource",
    data() {
        return {
            resource: {
                name: "",
                id: "",
                description: "",
                price: 0,
                maxworkers: 0,
                productionperworker: 0,
                isfiniteresource: false,
                resourceamount: 0
            }
        }
    },
    methods: {
        submit: function() {
            let tmp = backMain.getData();
            this.task.taskid = shortid.generate()
            tmp.tasks.push();
            backMain.setData(tmp);
            windows.alert("Resource saved!")
            this.profession.name = ""
            this.profession.id = ""
            this.profession.description = ""
            this.profession.revenuegeneration = 0
        }
    }
}
</script>

<style scoped>
.initinput {
    margin:auto;
}
.input {
    padding-left: 5em;
    margin: auto;
}
.inputfields {
    display: inline-block;
}
.inputbox{
    margin-bottom: 2em;
}
</style>
