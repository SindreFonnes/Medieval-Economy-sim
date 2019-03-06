<template>
    <div class="ui form">
        <div class="view">
            <addcityordivision />
        </div>
        <div class="view">
            <viewcitiesordivisions />
        </div>
    </div>
</template>

<script>
import addcityordivision from './subcomponents/AddCityOrDivision.vue'
import viewcitiesordivisions from './subcomponents/ViewCitiesOrDivisions'
export default {
    components: {
        'addcityordivision': addcityordivision,
        'viewcitiesordivisions': viewcitiesordivisions
    }
    
}
</script>
