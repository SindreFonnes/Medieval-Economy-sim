<template>
    <div class="ui four column doubling stackable grid container">
        <div class="view">
            <viewtasks></viewtasks>
        </div>
    </div>
</template>

<script>
import viewtasks from './subcomponents/ViewTasks';
export default {
    components:{
        'viewtasks':viewtasks
    }
}
</script>

<style>
.view{
    float: left;
}
</style>
