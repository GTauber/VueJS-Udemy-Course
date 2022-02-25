new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        enemyLife: 100,
    },
    computed: {
        playerLifePercentage() {
            return { width: `${this.playerLife}%` }
         },
         enemyLifePercentage() {
             return { width: `${this.enemyLife}%`}
         }
    },
    watch: {

    },
    methods: {
        normalAtack() {
            this.playerLife -= Math.round(Math.random() * (14 - 10)) + 10
            this.enemyLife -= Math.round(Math.random() * (14 - 8)) + 8;
            console.log(this.playerLife)
            
        }
    }
})