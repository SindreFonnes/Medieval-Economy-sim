<template>
    <div class="ui form">
        <div class="view">
            <addresource />
        </div>
        <div class="view">
            <viewresources />
        </div>
    </div>
</template>

<script>
import viewresources from './subcomponents/ViewResources.vue'
import addresource from './subcomponents/AddResource.vue'
export default {
    components: {
        'viewresources': viewresources,
        'addresource': addresource
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