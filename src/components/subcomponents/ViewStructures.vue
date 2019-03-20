<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column structure" v-for="structure in getStructures" v-bind:key="structure.id">
            <b>Name: {{structure.name}}</b>
            <p>Description: {{structure.description}}</p>
            <p>Id : {{structure.id}}</p>
            <p>Design used : {{getStructureDesigns.find(t => t.id == structure.designused).name}}</p>
            <p>
                <b v-if="structure.underconstruction">Is under construction</b>
            </p>
            <div v-if="structure.underconstruction">
                Time remaining before complete in workhours:
                <b>{{structure.workhoursneeded}}</b>
                <p>Materials needed to complete construction :</p>
                <p v-for="material in structure.materialsneeded" v-bind:key="material.id">
                    {{getBuildingMaterials.find(t => t.id ==material.id).name}} :<b>{{material.amountneeded}}</b>
                </p>
            </div>
            <p>City it belongs to: {{getCities.find(t => t.id==getComplexes.find(s => s.id == structure.designatedcomplex).location).name}}</p>
            <p>Complex it belongs to: {{getComplexes.find(s => s.id == structure.designatedcomplex).name}}</p>
            <p>Size : {{structure.size}} cubic meters</p>
            <div v-if="structure.isinhabitable&&!structure.underconstruction">
                <p>Amount of inhabitants: </p>
                <b>{{structure.currentoccupants.length}}/{{structure.maxoccupants}}</b>
            </div>
            
            <button v-on:click="removeentry(structure)">Remove structure</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getStructures',
            'getStructureDesigns',
            'getBuildingMaterials',
            'getCities',
            'getComplexes'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_STRUCTURE'
        ]),
        removeentry: function(data){
            this.REMOVE_STRUCTURE(data)
        }
    }
}
</script>

<style>
.structure{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

