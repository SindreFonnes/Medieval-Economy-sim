<template>
    <div class="field inputfields">
        <label><b>Add Structure Design</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Name</p></Label>
                <input type="text" v-model="structuredesign.name">
            </div>
            <div class="input">
                <Label><p>Structuredesign description</p></Label>
                <input type="text" v-model="structuredesign.description">
            </div>
            <div class="input">
                <label><p>Time needed for each cubic meter, per worker, in hours</p></label>
                <input type="number" steps="0.01" v-model="structuredesign.timepercubicmeter">
            </div>
            <div class="input">
                <Label><p>Buildingmaterials used (Hold ctrl to select multiple)</p></Label>
                <select v-model="tmpmaterials" multiple>
                    <option v-for="buildingmaterial in getBuildingMaterials" 
                    v-bind:key="buildingmaterial.id"
                    v-bind:value="buildingmaterial">{{buildingmaterial.name}}</option>
                </select>
            </div>
            <div class="input" v-for="(buildingmaterial, index) in tmpmaterials" v-bind:key="buildingmaterial.id">
                <label><p>{{buildingmaterial.name}} needed per cubic meter {{index}}</p></label>
                <input type="number" steps="0.01" v-model="structuredesign.buildingmaterials[buildingmaterial.id]">
            </div>
        </div>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
import shortid from 'shortid';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: "Addstructuredesign",
    data() {
        return {
            structuredesign: {
                id : "",
                name : "",
                description: "",
                timepercubicmeter: 0,
                measureunit: "cubic meters",
                needsmaterials: true,
                buildingmaterials: {}
            },
            tmpmaterials: []
        }
    },
    computed: {
        ...mapGetters([
            'getBuildingMaterials'
        ])
    },
    methods: {
        ...mapMutations([
            'ADD_STRUCTURE_DESIGN'
        ]),
        submit: function(){
            this.structuredesign.buildingmaterials = this.tmpmaterials.reduce((list, { id }) => {

                let bmat = { id, amountneeded: this.structuredesign.buildingmaterials[id] };
                if (bmat) {
                    return list.concat(bmat);
                }

                return list;
            }, []);

            this.structuredesign.id = shortid.generate()
            this.structuredesign.timepercubicmeter = parseFloat(this.structuredesign.timepercubicmeter)

            this.ADD_STRUCTURE_DESIGN(this.structuredesign)

            this.structuredesign = {
                id : "",
                name : "",
                description: "",
                timepercubicmeter: 0,
                measureunit: "cubic meters",
                needsmaterials: true,
                buildingmaterials: {}
            }
            this.buildingmaterials = []
            this.tmpmaterials = []
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
