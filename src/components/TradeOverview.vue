<template>
    <div>
        <div class="money">
            <p><b>Current cash in gold: {{getMoney/100}}</b></p>
            <p>change money by: <input v-model="money"/></p>
            <button v-on:click="updatemoney"><b>Update money</b></button>
        </div>
        <div>
            <p><b>Current trade ratio: {{traderatio}}%</b></p>
            <div class="input">
                <Label><p>Adjust ratio to:</p></Label>
                <input type="range" min="1" max="200" v-model="traderatio">
                <p><input type="number" v-model="traderatio" min="1" max="200"></p>
            </div>
        </div>
        <div class="ui four column doubling stackable grid container">
            <div class="view">
                <tradewares></tradewares>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import tradewares from './subcomponents/TradeWares.vue'

export default {

components: {
        'tradewares': tradewares,
    },
    data() {
        return {
            money: 0,
            traderatio: 80
        }
    },
    computed: {
        ...mapGetters([
            'getMoney'
        ])
    },
    methods: {
        ...mapMutations([
            'ADD_MONEY'
        ]),
        updatemoney: function(){
            this.ADD_MONEY(parseFloat(this.money))
            this.money = 0;
        }
    }
}
</script>

<style>


.taxes {
    display: inline-block;
    border: 0.3em solid grey;
    border-radius: 0.5em;
}
.endturn{
    vertical-align: text-top;
    display: inline-block;
    float: right;
    border: 0.3em solid grey;
    border-radius: 0.5em;
}
.date {
    border: 0.3em solid grey;
    border-radius: 0.5em;
    float: left;
    display: inline-block;
}
.money{
    margin-left: 3em;
    margin-bottom: 5em;
    border: 0.3em solid grey;
    border-radius: 0.5em;
    display: inline-block;
}


</style>