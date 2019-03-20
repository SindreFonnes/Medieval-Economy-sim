<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column cityordivision" v-for="cityordivision in getCitiesAndDivisions" v-bind:key="cityordivision.id">

            <b>Name: {{cityordivision.name}}</b>
            <p>Is a <b v-if="cityordivision.iscity">City</b><b v-if="!cityordivision.iscity">Division</b></p>
            <!-- Add strutures -->
            <button v-on:click="removeentry(cityordivision)">Remove <b v-if="cityordivision.iscity">City</b><b v-if="!cityordivision.iscity">Division</b></button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getCitiesAndDivisions'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_CITY_OR_DIVISION'
        ]),

        removeentry: function(data){
            this.REMOVE_CITY_OR_DIVISION(data)
        }
    }
}
</script>

<style>
.cityordivision{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

