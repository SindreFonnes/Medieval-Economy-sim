<template>
    <div class="ui form">
        <div class="view">
            <addstructure></addstructure>
        </div>
        <div class="view">
            <viewstructures></viewstructures>
        </div>
    </div>
</template>

<script>
import viewstructures from './subcomponents/ViewStructures.vue'
import addstructure from './subcomponents/AddStructure.vue'
export default {
    components: {
        'viewstructures': viewstructures,
        'addstructure': addstructure
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
