new Vue({
	el: '#exercise04',
	data: {

		ex1class: 'highlight',
		ex3class: '',
		ex4class: '',
		ex4Value: false,
		ex5styles: '',
		ex5Progress: '0%'

	},
	methods: {
		startEffect() {
			setInterval(() => {
				this.ex1class = this.ex1class == 'highlight' ? 'shrink' : 'highlight'
			}, 10)
		},
		startProgress() {
			let value = 0
			const timer = setInterval(() => {
				value += 1
				this.ex5Progress = `${value}%`
				console.log(this.ex5Progress)
				if(value == 100) clearInterval(timer)
			}, 1)
			
		},
		checkEx4Value(event) {
			console.log(event, event.target.value)
			this.ex4Value = event.target.value == 'true' ?  true : false
		}
	}
})
