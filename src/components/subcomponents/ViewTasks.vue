<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column task" v-for="task in getTasks" v-bind:key="task.id">
           
            <b>{{task.name}}</b>
             
            <div class="input" v-if="task.hasmaxworkers">
                <label><p>Workers {{task.workers.length}}/{{task.maxamountofworkers}}</p></label>
            </div>
            <div class="input" v-if="!task.hasmaxworkers">
                <label><p>Workers {{task.workers.length}}</p></label>
            </div>
            <div>
                <p>Production per worker :{{task.productionperworker}}</p>
            </div>
            <div>
                <p>Gainwares :{{task.gainwares}}</p>
            </div>
            <div v-if="task.type==getTaskTypes[0].id">
                <p>Resource being exploited: {{getResources.find(t => t.id == task.resourceexploited).name}}</p>
            </div>
            <div class="input">
                <label><p>Efficency</p></label>
                <input class="inputbox" type="number" step="0.01" v-model="task.efficency">
            </div>
            <div v-if="task.type == getTaskTypes[3].id">
                <p>Ware used :{{getWares.find(t => t.id == task.wareusedinmanufacture).name}}</p>
            </div>
            <div v-if="task.type == getTaskTypes[0].id&&task.gainwares">
                <p>Ware gained :{{getWares.find(t => t.id == getResources.find(s => s.id == task.resourceexploited).warewhenexploited).name}}</p>
            </div>
            <div v-if="task.type == getTaskTypes[3].id&&task.gainwares">
                <p>Ware gained :{{getWares.find(t => t.id == task.waregainedfrommanufacture).name}}</p>
            </div>
            <div v-if="task.type == getTaskTypes[3].id">
                <p>Amount produced per unit expended in manufacture :{{task.manufacturemodifier}}</p>
            </div>
            <div v-if="task.type == getTaskTypes[1].id">
                Structure worked on :{{getStructures.find(t => t.id == task.structureworkedon).name}}
                <p>Design used :{{getStructureDesigns.find(t => t.id == getStructures.find(s => s.id == task.structureworkedon).designused).name}}</p>
                <p>Workhours left :{{getStructures.find(t => t.id == task.structureworkedon).workhoursneeded}}</p>
            </div>
            <div v-if="task.hasrevenueorupkeep">
                <p>Per worker</p>
                <div v-if="task.revenueorupkeep>0">
                    Income: {{task.revenueorupkeep}}
                </div>
                <div v-if="task.revenueorupkeep<0">
                    Upkeep: {{Math.abs(task.revenueorupkeep)}}
                </div>
            </div>
            <button v-on:click="removeentry(task)">Remove Task</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getTasks',
            'getTaskTypes',
            'getResources',
            'getWares',
            'getStructureDesigns',
            'getStructures'
        ])
    },
    methods: {
        ...mapMutations([
            'REMOVE_TASK'
        ]),
        removeentry: function(data){
            this.REMOVE_TASK(data)
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

