<template>
<!-- Reformate to include a dropdown for either city or divison so that you can have pops indipendent of cities -->
    <div class="field inputfields">
        <label><b>Add City</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>City Name</p></Label>
                <input type="text" v-model="this.cityname">
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
            cityname: ""
        }
    },
    methods: {
        submitCity: function(){
            let cities = db.get('cities').map('name')
            for(let i = 0; i<cities.length; i++){
                if(cities[i]==this.cityname){
                    window.alert("There already exists a city with that name. Pick another name");
                    return;
                }
            }
            db.get('cities').push({name: this.cityname});
            windows.alert("City saved!")
        }
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
