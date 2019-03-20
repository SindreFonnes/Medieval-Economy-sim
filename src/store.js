import Vue from 'vue'
import Vuex from 'vuex'
import client from './backend/client'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		data: {
			date: 0,
			money: 0,
			taxrate: 0.3,
			tasks: [],
			citiesanddivisions: [
				{ id: "0001", name: "Winter's Reach", iscity: true, complexes: [] }
			],
			events: [],
			professions: [],
			professiontypes: [
				"Laborer",
				"Craftsman",
				"Professional",
				"Salesman",
				"Servant",
				"Warrior",
				"Artist",
				"Upper Class"
			],
			citizens: [],
			resources: [],
			structuredesigns: [],
			structures: [],
			complexes: [],
			wares: [],
			units: [
				"cubic meters",
				"square meters",
				"liters",
				"kilograms"
			],
			tasktypes: [
				{
					id: 0,
					name: "exploit resource"
				},
				{
					id: 1,
					name: "build structure"
				},
				{
					id: 2,
					name: "build vehicle"
				},
				{
					id: 3,
					name: "manufacture goods"
				},
				{
					id: 4,
					name: "custom task"
				}
			],
			vehicles: []
		},
		log : []
	},
	getters: {
		getData: state => {
			return state.data;
		},
		getDate: state => {
			return state.data.date
		},
		getTaxrate: state => {
			return state.data.taxrate
		},
		getTasks: state => {
			return state.data.tasks
		},
		getTaskByTasktype: state => {
			let taskbytasktype = [[],[],[],[],[]]
			for(let i = 0; i< state.data.tasks.length; i++){
				if(state.data.tasks[i].type === 0){
					taskbytasktype[0].push(state.data.tasks[i])
				} else if(state.data.tasks[i].type === 1){
					taskbytasktype[1].push(state.data.tasks[i])
				} else if(state.data.tasks[i].type === 2){
					taskbytasktype[2].push(state.data.tasks[i])
				} else if(state.data.tasks[i].type === 3){
					taskbytasktype[3].push(state.data.tasks[i])
				} else if(state.data.tasks[i].type === 4){
					taskbytasktype[4].push(state.data.tasks[i])
				}
			}
			return taskbytasktype;
		},
		getCitiesAndDivisions: state => {
			return state.data.citiesanddivisions
		},
		getCities: state => {
			return state.data.citiesanddivisions.filter(city => city.iscity)
		},
		getEvents: state => {
			return state.data.events
		},
		getProfessions: state => {
			return state.data.professions
		},
		getProfessionTypes: state => {
			return state.data.professiontypes
		},
		getCitizens: state => {
			return state.data.citizens
		},
		getAvailableCitizens: state => {
			return state.data.citizens.filter(citizen => citizen.available)
		},
		getCitizensByProfessionType: state => {
			let citizensbyprofessiontype = [[],[],[],[],[],[],[],[]]
				for(let i = 0; i<state.data.citizens.length; i++) {
					if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[0]) {
						citizensbyprofessiontype[0].push(state.data.citizens[i])
					} else if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[1]) {
						citizensbyprofessiontype[1].push(state.data.citizens[i])
					} else if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[2]) {
						citizensbyprofessiontype[2].push(state.data.citizens[i])
					} else if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[3]) {
						citizensbyprofessiontype[3].push(state.data.citizens[i])
					} else if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[4]) {
						citizensbyprofessiontype[4].push(state.data.citizens[i])
					} else if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[5]) {
						citizensbyprofessiontype[5].push(state.data.citizens[i])
					} else if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[6]) {
						citizensbyprofessiontype[6].push(state.data.citizens[i])
					} else if(state.data.professions.find(t => t.id == state.data.citizens[i].profession).type==state.data.professiontypes[7]) {
						citizensbyprofessiontype[7].push(state.data.citizens[i])
					}
				}
			return citizensbyprofessiontype
		},
		getResources: state => {
			return state.data.resources
		},
		getStructureDesigns: state => {
			return state.data.structuredesigns
		},
		getStructures: state => {
			return state.data.structures
		},
		getUnderConstruction: state => {
			return state.data.structures.filter(underConstruction => underConstruction.underconstruction)
		},
		getComplexes: state => {
			return state.data.complexes
		},
		getWares: state => {
			return state.data.wares
		},
		getBuildingMaterials: state => {
			return state.data.wares.filter(material => material.buildingmaterial)
		},
		getUnits: state => {
			return state.data.units
		},
		getTaskTypes: state => {
			return state.data.tasktypes
		},
		getVehicles: state => {
			return state.data.vehicles
		},
		getLog: state => {
			return state.log
		},
		getMoney: state => {
			return state.data.money
		},
		fetchBackendData: () => {
			client.getData()
		},
		makeBackupFile: () => {
			client.makeBackup()
		},
		pushData: () => {
			client.pushdata()
		},
		endturn: () => {
			client.endturn()
		}
	},
	mutations: {
		changeDate: (state, data) => {
			state.data.date = data
			let date = new Date()
			state.log.push('Changed date to: ' + data + '; time: ' + date)
		},
		addDays: (state, data) => {
			state.data.date += data
			let date = new Date()
			state.log.push('Added: ' + data + ' days; time: ' + date)
		},
		changeTaxrate: (state, data) => {
			state.data.taxrate = data
			let date = new Date()
			state.log.push('Changed taxrate to: ' + data + '; time: ' + date)
		},
		addTask: (state, data) => {
			state.data.tasks.push(data)
			let date = new Date()
			state.log.push('Added task: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		addCityOrDivision: (state, data) => {
			state.data.citiesanddivisions.push(data)
			let date = new Date()
			state.log.push('Added cityordivision: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		addEvent: (state, data) => {
			state.data.events.push(data)
			let date = new Date()
			state.log.push('Added event: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		addProfession: (state, data) => {
			state.data.professions.push(data)
			let date = new Date()
			state.log.push('Added profession: ' + data.name + ' id: '+ data.id + '; time: ' + date)
		},
		addCitizen: (state, data) => {
			state.data.citizens.push(data)
			let date = new Date()
			state.log.push('Added citizen: ' + data.name + ' ' + data.surname + ' id: ' + data.id + '; time: ' + date)
		},
		addResource: (state, data) => {
			state.data.resources.push(data)
			let date = new Date()
			state.log.push('Added resource: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		addStructureDesign: (state, data) => {
			state.data.structuredesigns.push(data)
			let date = new Date()
			state.log.push('Added structuredesign: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		addStructure: (state, data) => {
			state.data.structures.push(data)
			let date = new Date()
			state.log.push('Added structure: ' + data.id + '; time: ' + date)
		},
		addComplex: (state, data) => {
			state.data.complexes.push(data)
			let date = new Date()
			state.log.push('Added complex: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		addWare: (state, data) => {
			state.data.ware.push(data)
			let date = new Date()
			state.log.push('Added ware: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		addVehicle: (state, data) => {
			state.data.vehicles.push(data)
			let date = new Date()
			state.log.push('Added vehicle: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		setData: (state, data) => {
			state.data = data
			let date = new Date()
			state.log.push('Data set!; time: ' + date)
		},
		setLog: (state, data) => {
			state.log = data
			let date = new Date()
			state.log.push('Log fetched!; time: ' + date)
		},
		addMoney: (state, data) => {
			state.data.money += data
			let date = new Date()
			state.log.push('Added ' + data + ' copper; time: ' + date)
		},
		removeMoney: (state, data) => {
			state.data.money -= data
			let date = new Date()
			state.log.push('Removed ' + data + ' copper; time: ' + date)
		},
		changeMoney: (state, data) => {
			state.data.money = data
			let date = new Date()
			state.log.push('Changed money to: ' + data + '; time: ' + date)
		}
	},
	actions: {
		
	}
})
