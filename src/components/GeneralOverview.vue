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
        <div class="ui four column doubling stackable grid container">
            <div class="view">
                <viewtasks></viewtasks>
            </div>
        </div>
    </div>
</template>

<script>
import viewtasks from './subcomponents/ViewTasks';
import client from './../backend/client'
import backmain from './../backend/BackMain'
import clonedeep from 'lodash.clonedeep'
export default {
    components:{
        'viewtasks':viewtasks
    },
    data() {
        return {
            endturndays:1,
            taxrate: 30,
            date: 0
        }
    },
    created: function() {
        this.date = backmain.getData().date
    },
    methods: {
        endturn: function(){
            this.endturndays = parseInt(this.endturndays)
            client.endturn(this.endturndays)
            this.endturndays = 1;
        },
        pushdata: function(){
            client.pushdata()
        },
        makebackup: function(){
            client.makeBackup()
        },
        getdata: function(){
            client.getData()
        },
        updatetax: function(){
            let tmp = backmain.getData()
            tmp.taxrate = parseFloat(this.taxrate)/100
            backmain.setData(clonedeep(tmp))
        },
        updatedate: function(){
            let tmp = backmain.getData()
            tmp.date = parseInt(this.date)
            backmain.setData(clonedeep(tmp))
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
