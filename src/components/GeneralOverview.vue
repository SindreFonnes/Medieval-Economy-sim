<template>
    <div>
        <div class="taxes">
            <label>Tax rate</label>
            <br>
            <input type="range" min="1" max="100" v-model="taxrate" v-on:change="updatetax">
            <br>
            <input type="number" v-model="taxrate" min="1" max="100" v-on:change="updatetax">
        </div>
        <div class="date">
            <label>Date</label>
            <br>
            <input type="number" steps="1" v-model="date" v-on:change="updatedate">
        </div>
        <div class="endturn">
            <div class="dayspassed">
                <label><p><b>Days to pass</b></p></label>
                <input type="number" steps="1" v-model="endturndays">
            </div>
            <div class="endturnbutton">
                <button v-on:click="endturn">Endturn</button>
            </div>
            <p></p>
            <div class="pushbutton">
                <button v-on:click="pushdata">Push data</button>
            </div>
            <p></p>
            <div class="getbutton">
                <button v-on:click="getdata">Fetch data</button>
            </div>
            <p></p>
            <div class="backupbutton">
                <button v-on:click="makebackup">Backup data</button>
            </div>
        </div>
        <div class="money">
            <p><b>Current cash(in coppers): {{getMoney}}</b></p>
            <p>change money by: <input v-model="money"/></p>
            <button v-on:click="updatemoney"><b>Update money</b></button>
        </div>
        <div class="ui four column doubling stackable grid container">
            <div class="view">

            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {

    data() {
        return {
            endturndays:1,
            taxrate: 30,
            date: 0,
            money: 0
        }
    },
    computed: {
        ...mapGetters([
            'getTaxrate',
            'getMoney',
            'getDate'
        ])
    },
    created: function(){
        this.taxrate = this.getTaxrate*100
        this.date = this.getDate
    },
    methods: {
        ...mapMutations([
            'CHANGE_TAXRATE',
            'CHANGE_DATE',
            'END_TURN',
            'PUSH_DATA',
            'MAKE_BACKUP_FILE',
            'FETCH_BACKEND_DATA',
            'ADD_MONEY'
        ]),
        endturn: function(){
            this.endturndays = parseInt(this.endturndays)
            this.END_TURN(this.endturndays)
            this.endturndays = 1
        },
        pushdata: function(){
            this.PUSH_DATA()
        },
        makebackup: function(){
            this.MAKE_BACKUP_FILE()
        },
        getdata: function(){
            this.FETCH_BACKEND_DATA()
        },
        updatetax: function(){
            this.CHANGE_TAXRATE(this.taxrate/100)
        },
        updatedate: function(){
            this.CHANGE_DATE(this.date)
        },
        updatemoney: function(){
            this.ADD_MONEY(parseFloat(this.money))
        }
    }
}
</script>

<style>


.taxes {
    align-self: right;
    display: inline-block;
    border: 0.3em solid grey;
    border-radius: 0.5em;
}
.endturn {
    vertical-align: text-top;
    display: inline-block;
}
.date {
    border: 0.3em solid grey;
    border-radius: 0.5em;
    float: left;
    display: inline-block;
}
.view{
    float: left;
}
</style>
