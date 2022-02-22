new Vue({
	el: '#exercise04',
	data: {

		ex1class: 'highlight',
		ex3class: '',
		ex4class: '',
		ex4Value: false,
		ex5styles: ''

	},
	methods: {
		startEffect() {
			setInterval(() => {
				this.ex1class = this.ex1class == 'highlight' ? 'shrink' : 'highlight'
			}, 10)
		},
		startProgress() {

		},
		checkEx4Value(event) {
			console.log(event, event.target.value)
			this.ex4Value = event.target.value == 'true' ?  true : false
		}
	}
})
