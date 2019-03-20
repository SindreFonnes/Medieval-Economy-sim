<template>
    <div class="ui form">
        <div class="view">
            <addprofession />
        </div>
        <br>
        <br>
        <div class="view">
            <viewprofession />
        </div>
    </div>
</template>

<script>
import addprofession from './subcomponents/AddProfession.vue'
import viewprofession from './subcomponents/ViewProfession'
export default {
    components: {
        'addprofession': addprofession,
        'viewprofession': viewprofession
    }
    
}
</script>
