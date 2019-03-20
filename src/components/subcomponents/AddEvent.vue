<template>
    <div class="field inputfields">
        <label><b>Add Event</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Event Name</p></Label>
                <input class="inputbox" type="text" v-model="event.name">
            </div>
            <div class="input">
                <label><p>Event Date (days untill it occurs)</p></label>
                <input class="inputbox" type="number" step="1" v-model="event.date">
            </div>
        </div>
        <button v-on:click="submittask">Submit</button>
    </div>
</template>

<script>
import shortid from 'shortid';
export default {
    name: "AddEvent",
    data() {
        return {
            event: {
                id: "",
                name: "",
                date: 0
            }
        }
    },
    methods: {
        submittask: function() {
            this.event.id = shortid.generate()

            this.event = {
                id: "",
                name: "",
                date: 0
            }
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
