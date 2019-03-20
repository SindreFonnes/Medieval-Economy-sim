<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column structuredesigns" v-for="structuredesign in getStructureDesigns" v-bind:key="structuredesign.id">
            <b>Name: {{structuredesign.name}}</b>
            <p>Description: {{structuredesign.description}}</p>
            <div v-if="structuredesign.needsmaterials">
                <p>Materials needed per cubic meter</p>
                <p v-for="buildingmaterial in structuredesign.buildingmaterials" v-bind:key="buildingmaterial.id">
                    <b>{{getBuildingMaterials.find(t => t.id ==buildingmaterial.id).name}} : {{buildingmaterial.amountneeded}}</b>
                </p>
                <!-- Add time to construct each cubic meter on average -->
            </div>
            <p>Time needed per cubic meter(in hours):</p>
            <p>{{structuredesign.timepercubicmeter}}</p>
            <button v-on:click="removeentry(structuredesign)">Remove structuredesign</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getStructureDesigns',
            'getBuildingMaterials'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_STRUCTURE_DESIGN'
        ]),
        removeentry: function(data){
            this.REMOVE_STRUCTURE_DESIGN(data)
        }
    }
}
</script>

<style>
.structuredesigns{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

