<template>
    <div class="ui form">
        <div class="view">
            <addware></addware>
        </div>
        <div class="view">
            <viewwares></viewwares>
        </div>
    </div>
</template>

<script>
import viewwares from './subcomponents/ViewWares.vue'
import addware from './subcomponents/AddWare.vue'
export default {
    components: {
        'viewwares': viewwares,
        'addware': addware
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
