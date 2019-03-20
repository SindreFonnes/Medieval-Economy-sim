<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column resource" v-for="resource in getResources" v-bind:key="resource.id">
            <b>Name: {{resource.name}}</b>
            <p>
                <b v-if="resource.isbeingexploited">Is being exploited</b>
                <b v-if="!resource.isbeingexploited">Currently not exploited</b>
            </p>
            <p v-if="resource.isfiniteresource">
                <b>Amount left : {{resource.resourceamount}}</b>
            </p>
            <p>City it belongs to: {{getCities.find(t => t.id==resource.city).name}}</p>
            <p>Ware generated: {{getWares.find(t => t.id==resource.warewhenexploited).name}}</p>
            <p>Description: {{resource.description}}</p>
            <p>Id : {{resource.id}}</p>
            <button v-on:click="removeentry(resource)">Remove resource</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getWares',
            'getResources',
            'getCities'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_RESOURCE'
        ]),
        removeentry: function(data){
            this.REMOVE_RESOURCE(data)
        }
    }
}
</script>

<style>
.resource{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

