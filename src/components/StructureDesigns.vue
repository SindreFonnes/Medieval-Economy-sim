<template>
    <div class="ui form">
        <div class="view">
            <addstructuredesign></addstructuredesign>
        </div>
        <div class="view">
            <viewstructuredesigns></viewstructuredesigns>
        </div>
    </div>
</template>

<script>
import viewstructuredesigns from './subcomponents/ViewStructureDesigns.vue'
import addstructuredesign from './subcomponents/AddStructureDesign.vue'
export default {
    components: {
        'viewstructuredesigns': viewstructuredesigns,
        'addstructuredesign': addstructuredesign
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