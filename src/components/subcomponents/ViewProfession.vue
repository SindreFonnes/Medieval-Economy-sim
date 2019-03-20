<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column task" v-for="profession in getProfessions" v-bind:key="profession.id">
           
            <b>{{profession.name}}</b>
            <p>{{profession.description}}</p>
            <p>{{profession.type}}</p>
            <p>Workhours :{{profession.workhours}}</p>
            <div>
                <div v-if="profession.revenueorupkeep>0">
                    Income: {{profession.revenueorupkeep}}
                </div>
                <div v-if="profession.revenueorupkeep<0">
                    Upkeep: {{Math.abs(profession.revenueorupkeep)}}
                </div>
            </div>
            <button v-on:click="removeentry(profession)">Remove Profession</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed:  {
        ...mapGetters([
            'getProfessions'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_PROFESSION'
        ]),
        removeentry: function(data){
            this.REMOVE_PROFESSION(data)
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
