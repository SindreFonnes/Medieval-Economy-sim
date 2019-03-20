<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column task" v-for="complex in getComplexes" v-bind:key="complex.id">
           
            <b>Name: {{complex.name}}</b>
            <p><b>Description: </b></p>
            <p>{{complex.description}}</p>
            <b>Location:</b>
            <div>{{getCities.find(t => t.id == complex.location).name}}</div>
            <button v-on:click="removeentry(complex)">Remove complex</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getCities',
            'getComplexes'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_COMPLEX'
        ]),
        removeentry: function(data){
            this.REMOVE_COMPLEX(data)
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
