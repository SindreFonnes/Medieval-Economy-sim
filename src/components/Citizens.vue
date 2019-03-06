<template>
    <div class="ui form">
        <div class="view">
            <addcitizen></addcitizen>
        </div>
        <div class="view">
            <viewcitizen></viewcitizen>
        </div>
    </div>
</template>

<script>
import addcitizen from './subcomponents/AddCitizen.vue'
import viewcitizen from './subcomponents/ViewCitizen.vue'
export default {
    components: {
        'addcitizen': addcitizen,
        'viewcitizen': viewcitizen
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
