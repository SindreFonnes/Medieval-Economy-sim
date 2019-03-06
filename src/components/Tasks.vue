<template>
    <div class="ui form">
        <div class="view">
            <addtask></addtask>
        </div>
        <div class="view">
            <viewtask></viewtask>
        </div>
    </div>
</template>

<script>
import viewtask from './subcomponents/ViewTasks.vue'
import addtask from './subcomponents/AddTask.vue'
export default {
    components: {
        'viewtask': viewtask,
        'addtask': addtask
    }
    
}
</script>

<style>
.view{
    margin: auto;
    width: 100%;
    padding: 2em;
}
</style>
