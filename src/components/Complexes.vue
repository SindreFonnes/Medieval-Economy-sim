<template>
    <div class="ui form">
        <div class="view">
            <addcomplex></addcomplex>
        </div>
        <div class="view">
            <viewcomplexes></viewcomplexes>
        </div>
    </div>
</template>

<script>
import addcomplex from './subcomponents/AddComplex.vue'
import viewcomplexes from './subcomponents/ViewComplexes.vue'
export default {
    components: {
        'addcomplex': addcomplex,
        'viewcomplexes': viewcomplexes
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
