import db from './Database'
import shortid from './Shortid'

db.defaults({
    money: 0, 
    date: 0, //Current date from startdate. Bases event out from startdate.
    cities:[], //cities have structures attached to them 
    profession:[], 
    population: {}, //hashmap? or array?
    undead: {}, //hashmap? or array?
    resources: {},
    Tasks: {}, //tasks to complete, assign people to them. Some tasks have max manpower, some don't 
    //tasks also either has en upkeep, an upfront cost or a cost as soon as they finish, make a dropdown button for this.
    Events: {} //adds a list of events that trigger when the date reaches a certain point.
    //add animals?
})
