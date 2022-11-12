import {
	defineStore
} from 'pinia'

export const useItemStore = defineStore('item', {
	state: () => {
		return {
			itemArr: [{
				id: 51,
				classid: 231,
				picurl: 'dfasdfasd',
				title: "good time",
				looktime: "2020-10-22"
			}],
			count: 0
		};
	},

	// computed 计算属性
	getters: {

	},
	// methods 同步 异步 提交state
	actions: {
		updataItemArr(item) {
			console.log(item)
			// this.itemArr.unshift(item)
		}
	}
})
