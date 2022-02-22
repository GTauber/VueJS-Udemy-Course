new Vue({
    el: '#exercise04',
    data: {
        value: 0,
    }, 
    computed: {
        result() {
            return this.value == 37 ? "Correct Value" : "Wrong Value"
        }
    },
    watch:{
        result(newVal, oldVal) {
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
});