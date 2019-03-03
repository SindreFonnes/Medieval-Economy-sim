<template>
    <div class="field inputfields">
        <label><b>Resources</b></label>
        <div class="fields">
            <div class="input">
                <Label><b>Money</b></Label>
                <p>In copper</p>
                <input class="inputbox" type="text" v-model="money">
            </div>
            <div class="input">
                <label><b>Wood</b></label>
                <p>Workers</p>
                <input class="inputbox" type="text" v-model="wood.workers">
                <p>Modifier</p>
                <input class="inputbox" type="text" v-model="wood.modifier">
                <p>Production</p>
                <input class="inputbox" type="text" v-model="wood.production">
                <p>Total wood</p>
                <input class="inputbox" type="number" v-model="resources.wood">
            </div>
            <div class="input">
                <label><b>Bricks</b></label>
                <p>Workers</p>
                <input class="inputbox" type="text" v-model="bricks.workers">
                <p>Modifier</p>
                <input class="inputbox" type="text" v-model="bricks.modifier">
                <p>Production</p>
                <input class="inputbox" type="text" v-model="bricks.production">
                <p>Total Bricks</p>
                <input class="inputbox" type="number" v-model="resources.bricks">
            </div>
            <div class="input">
                <label><b>Salt</b></label>
                <p>Workers</p>
                <input class="inputbox" type="text" v-model="salt.workers">
                <p>Modifier</p>
                <input class="inputbox" type="text" v-model="salt.modifier">
                <p>Production</p>
                <input class="inputbox" type="text" v-model="salt.production">
                <p>Total salt</p>
                <input class="inputbox" type="number" v-model="resources.salt">
            </div>
            <!--
            <div class="input">
                <label><p>Resources</p></label>
                <p>Wood</p>
                <input type="text" v-model="resources.wood">
                <p>Bricks</p>
                <input type="text" v-model="resources.bricks">
                <p>Salt</p>
                <input type="text" v-model="resources.salt">
            </div>
            -->
        </div>
        <button v-on:click="calculate">End day</button>
    </div>
</template>

<script>

export default {
    name: "AddCity",
    data() {
        return {
            money: 0,
            wood: {
                production: 0,
                modifier: 1,
                workers: 0
            },
            bricks: {
                production: 0,
                modifier: 1,
                workers: 0
            },
            salt: {
                production: 0,
                modifier: 1,
                workers:0
            },
            resources: {
                wood: 0,
                bricks: 0,
                salt: 0
            }
        }
    },
    methods: {
        calculate : function () {
            this.resources.wood = parseInt(this.resources.wood) + parseInt(this.wood.production*this.wood.workers*this.wood.modifier)
            this.resources.bricks = parseInt(this.resources.bricks) + parseInt(this.bricks.production*this.bricks.workers*this.bricks.modifier)
            this.resources.salt = parseFloat(this.resources.salt) + parseFloat(this.salt.production*this.salt.worker*this.salt.modifier) 
        }
    }
}
</script>

<style scoped>
.initinput {
    float: left;
}
.input {
    padding-left: 5em;
    float: left;
}
.inputfields {
    display: inline-block;
}
.inputbox{
    margin-bottom: 2em;
}
</style>
