import Vue from 'vue'
import Vuex from 'vuex'
import client from './backend/client'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		data: {
			// date: 0,
			// money: 0,
			// taxrate: 0.3,
			// tasks: [],
			// citiesanddivisions: [
			// 	{ id: "0001", name: "Winter's Reach", iscity: true, complexes: [] }
			// ],
			// events: [],
			// professions: [],
			// professiontypes: [
			// 	"Laborer",
			// 	"Craftsman",
			// 	"Professional",
			// 	"Salesman",
			// 	"Servant",
			// 	"Warrior",
			// 	"Artist",
			// 	"Upper Class"
			// ],
			// citizens: [],
			// resources: [],
			// structuredesigns: [],
			// structures: [],
			// complexes: [],
			// wares: [],
			// units: [
			// 	"cubic meters",
			// 	"square meters",
			// 	"liters",
			// 	"kilograms"
			// ],
			// tasktypes: [
			// 	{
			// 		id: 0,
			// 		name: "exploit resource"
			// 	},
			// 	{
			// 		id: 1,
			// 		name: "build structure"
			// 	},
			// 	{
			// 		id: 2,
			// 		name: "build vehicle"
			// 	},
			// 	{
			// 		id: 3,
			// 		name: "manufacture goods"
			// 	},
			// 	{
			// 		id: 4,
			// 		name: "custom task"
			// 	}
			// ],
			// vehicles: []
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
		getProfessionsByType: state => {
			let tmp = [[],[],[],[],[],[],[],[]]
			for(let i = 0; i< state.data.professions.length; i++){
				if(state.data.professions[i].type === state.data.professiontypes[0]) {
					tmp[0].push(state.data.professions[i])
				} else if(state.data.professions[i].type === state.data.professiontypes[1]) {
					tmp[1].push(state.data.professions[i])
				} else if(state.data.professions[i].type === state.data.professiontypes[2]) {
					tmp[2].push(state.data.professions[i])
				} else if(state.data.professions[i].type === state.data.professiontypes[3]) {
					tmp[3].push(state.data.professions[i])
				} else if(state.data.professions[i].type === state.data.professiontypes[4]) {
					tmp[4].push(state.data.professions[i])
				} else if(state.data.professions[i].type === state.data.professiontypes[5]) {
					tmp[5].push(state.data.professions[i])
				} else if(state.data.professions[i].type === state.data.professiontypes[6]) {
					tmp[6].push(state.data.professions[i])
				} else if(state.data.professions[i].type === state.data.professiontypes[7]) {
					tmp[7].push(state.data.professions[i])
				}
			}
			return tmp;
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
		getCitizenByCitySortedByProfessionTypeAndProfession: state => {
			let tmp = []
			//make an array for each city
			for(let i = 0; i< state.data.citiesanddivisions.length; i++){
				tmp.push([])
				//make an array for each professiontype in each city
				for(let j = 0; j<state.data.professiontypes.length; j++){
					tmp[i].push([])
					let counter = -1;
					//check if the profession is the same type as the professiontype pushed, if yes, add to array
					for(let k = 0; k<state.data.professions.length;k++){
						
						if(state.data.professiontypes[j]===state.data.professions[k].type){
							tmp[i][j].push([])
							counter++;
							//Loop through to see if any citizen has the profession
							for(let o = 0; o<state.data.citizens.length; o++) {
								if(state.data.citizens[o].profession ===state.data.professions[k].id) {
									tmp[i][j][counter].push(state.data.citizens[o])
								}
							}
						}
					}
				}	
			}

			return tmp
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
		}
	},
	mutations: {
		CHANGE_DATE: (state, data) => {
			state.data.date = data
			let date = new Date()
			state.log.push('Changed date to: ' + data + '; time: ' + date)
		},
		ADD_DAYS: (state, data) => {
			state.data.date += data
			let date = new Date()
			state.log.push('Added: ' + data + ' days; time: ' + date)
		},
		CHANGE_TAXRATE: (state, data) => {
			state.data.taxrate = data
			let date = new Date()
			state.log.push('Changed taxrate to: ' + data + '; time: ' + date)
		},
		ADD_TASK: (state, data) => {
			if(data.type === state.data.tasktypes[0].id){
				state.data.resources.find(t => t.id == data.resourceexploited).resourceexploited = true;
			}
			state.data.tasks.push(data)
			let date = new Date()
			state.log.push('Added task: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_TASK: (state, data) => {
			for(let i = 0; i < state.data.citizens.length; i++){
				if(state.data.citizens[i].task === data.id) {
					state.data.citizens[i].task = ""
				}
			}
			if(data.type === state.data.tasktypes[0].id){
				state.data.resources.find(t => t.id == data.resourceexploited).resourceexploited = false;
			}
			state.data.wares = state.data.wares.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed ware: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_CITY_OR_DIVISION: (state, data) => {
			state.data.citiesanddivisions.push(data)
			let date = new Date()
			state.log.push('Added cityordivision: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_CITY_OR_DIVISION: (state, data) => {
			state.data.citiesanddivisions = state.data.citiesanddivisions.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed cityordivision: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_EVENT: (state, data) => {
			state.data.events.push(data)
			let date = new Date()
			state.log.push('Added event: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_EVENT: (state, data) => {
			state.data.events = state.data.events.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed event: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_PROFESSION: (state, data) => {
			state.data.professions.push(data)
			let date = new Date()
			state.log.push('Added profession: ' + data.name + ' id: '+ data.id + '; time: ' + date)
		},
		REMOVE_PROFESSION: (state, data) => {
			state.data.professions = state.data.professions.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed profession: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_CITIZEN: (state, data) => {
			state.data.citizens.push(data)
			let date = new Date()
			state.log.push('Added citizen: ' + data.name + ' ' + data.surname + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_CITIZEN: (state, data) => {
			state.data.citizens = state.data.citizens.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed citizen: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		CITIZEN_CHANGE_AVAILABILITY: (state, data) => {
			let i = state.data.citizens.findIndex(t => t.id == data[0].id)
			state.data.citizens[i].available = data[1]
			let date = new Date()
			state.log.push('Changed citizen '+ data[0].id + ' status to ' + data[1] + '; time: ' + date)
		},
		CITIZEN_UPDATE_TASK: (state, data) => {
			let i = state.data.citizens.findIndex(t => t.id == data.id)
			state.data.citizens[i].task = data.task
			for(i = 0; i < state.data.tasks.length; i++){
				state.data.tasks[i].workers = state.data.tasks[i].workers.filter(t => t != data.id)
			}
			if(data.task != "") {
				state.data.tasks.find(t => t.id == data.task).workers.push(data.id);
			}
			state.data.tasks
			let date = new Date()
			state.log.push('Changed citizen ' + data.id + ' current task to: ' + data.task + '; time: ' + date)
		},
		ADD_RESOURCE: (state, data) => {
			state.data.resources.push(data)
			let date = new Date()
			state.log.push('Added resource: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_RESOURCE: (state, data) => {
			state.data.resources = state.data.resources.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed resource: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_STRUCTURE_DESIGN: (state, data) => {
			state.data.structuredesigns.push(data)
			let date = new Date()
			state.log.push('Added structuredesign: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_STRUCTURE_DESIGN: (state, data) => {
			state.data.structuredesigns = state.data.structuredesigns.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed structure design: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_STRUCTURE: (state, data) => {
			state.data.structures.push(data)
			let date = new Date()
			state.log.push('Added structure: ' + data.id + '; time: ' + date)
		},
		REMOVE_STRUCTURE: (state, data) => {
			state.data.structures = state.data.structures.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed structure: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_COMPLEX: (state, data) => {
			state.data.complexes.push(data)
			state.data.citiesanddivisions.find(t => t.id == data.location).complexes.push(data)
			let date = new Date()
			state.log.push('Added complex: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_COMPLEX: (state, data) => {
			state.data.complexes = state.data.complexes.filter(t => t.id != data.id)
			let i = state.data.citiesanddivisions.findIndex(t => t.id == data.location)
			state.data.citiesanddivisions[i] = state.data.citiesanddivisions[i].complexes.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed complex: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_WARE: (state, data) => {
			state.data.wares.push(data)
			let date = new Date()
			state.log.push('Added ware: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_WARE: (state, data) => {
			state.data.wares = state.data.wares.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed : ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		CHANGE_WARE_AMOUNT: (state, data) => {
			state.data.wares.find(t => t.id == data.id).amountowned = parseFloat(data.amountowned)
			let date = new Date()
			state.log.push('Changed wareamount of : ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		ADD_VEHICLE: (state, data) => {
			state.data.vehicles.push(data)
			let date = new Date()
			state.log.push('Added vehicle: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		REMOVE_VEHICLE: (state, data) => {
			state.data.vehicles = state.data.vehicles.filter(t => t.id != data.id)
			let date = new Date()
			state.log.push('Removed vehicle: ' + data.name + ' id: ' + data.id + '; time: ' + date)
		},
		SET_DATA: (state, data) => {
			state.data = data
			let date = new Date()
			state.log.push('Data set!; time: ' + date)
		},
		SET_LOG: (state, data) => {
			state.log = data
			let date = new Date()
			state.log.push('Log fetched!; time: ' + date)
		},
		ADD_MONEY: (state, data) => {
			state.data.money += data
			let date = new Date()
			state.log.push('Added ' + data + ' copper; time: ' + date)
		},
		REMOVE_MONEY: (state, data) => {
			state.data.money -= data
			let date = new Date()
			state.log.push('Removed ' + data + ' copper; time: ' + date)
		},
		CHANGE_MONEY: (state, data) => {
			state.data.money = data
			let date = new Date()
			state.log.push('Changed money to: ' + data + '; time: ' + date)
		},
		FETCH_BACKEND_DATA: (state) => {
			let date = new Date()
			state.log.push('Making backupfile in backend; time: ' + date)
			client.getData()
		},
		MAKE_BACKUP_FILE: (state) => {
			let date = new Date()
			state.log.push('Making backupfile in backend; time: '+ date)
			client.makeBackup()
		},
		PUSH_DATA: (state) => {
			let date = new Date()
			state.log.push('Pushing data to backend; time: ' + date)
			client.pushdata()
		},
		END_TURN: (state ,data) => {
			let date = new Date()
			state.log.push('Ending turn; time: ' + date)
			client.endturn(data)
		}
	},
	actions: {
		
	}
})
