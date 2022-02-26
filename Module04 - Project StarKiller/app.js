new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        enemyLife: 100,
        gameStarted: false,
        gameEnded: false,
        result: '',
        playerLog: [],
        playerAtack: 0,
        enemyAtack: 0,
        healAmount: 0,
        movement: '',
    },
    computed: {
        playerLifePercentage() {
            return { width: `${this.playerLife}%` };
        },
        enemyLifePercentage() {
            return { width: `${this.enemyLife}%` };
        },
        lifeControls() {
            return `${this.playerLife}|${this.enemyLife}`;
        },
        dmgControl() {
            return `${this.playerAtack}|${this.enemyAtack}|${this.healAmount}`
        }
    },
    watch: {
        lifeControls(newVal, oldVal) {
            const [oldPlayerlife, oldEnemyLife] = oldVal.split('|');
            const newLifes = [newPlayerLife, newEnemyLife] = newVal.split('|');
            console.log(newLifes)

            if (newLifes[0] <= 0 || newLifes[1] <= 0) {
                if (newLifes[0] <= newLifes[1]) {
                    
                    this.gameEnded = true;
                    this.gameStarted = false;
                    this.result = "You'd Lost this battle.";

                    /* Do not change the position of the next 2 lines, since the update on 
                    these variables will call this watcher again, and change in the wrong order 
                    will make you lose. */
                    this.enemyLife = newLifes[1] <= 0 ? 1 : newLifes[1];
                    this.playerLife = 0;
                }
                else {
                    this.gameEnded = true;
                    this.gameStarted = false;
                    this.result = "Congratulations, you'd WON!";

                    /* Do not change the position of the next 2 lines, since the update on 
                    these variables will call this watcher again, and change in the wrong order 
                    will make you lose. */
                    this.playerLife = newLifes[0] <= 0 ? 1 : newLifes[0];
                    this.enemyLife = 0;
                }
            }
        },
        dmgControl(newVal, oldVal) {
           // const [newPlayerAtack, newEnemyAtack, newHealAmount] = newVal.split('|');
           // const [oldPlayerAtack, oldEnemyAtack, oldHealAmount] = oldVal.split('|');

            if (this.movement == 'Atack' | this.movement == 'Special Atack') {
                this.playerLog.push({causedBy: 'Jedi', atkDmg: this.playerAtack, event: this.movement},
                {causedBy: 'Vader', atkDmg: this.enemyAtack, event: this.movement})
            }
            else {
               this.playerLog.push({causedBy: 'Vader', atkDmg: this.enemyAtack, event: 'Atack'},
                {causedBy: 'Jedi', healAmount: this.healAmount, event: this.movement})
            } 
        }
    },
    methods: {

        normalAtack(e) {
            // this.playerLife -= Math.round(Math.random() * (14 - 10)) + 10;
            // this.enemyLife -= Math.round(Math.random() * (14 - 8)) + 8;
            this.enemyAtack = Math.round(Math.random() * (14 - 10)) + 10;
            this.playerAtack = Math.round(Math.random() * (14 - 8)) + 8;
            this.playerLife -= this.enemyAtack;
            this.enemyLife -= this.playerAtack;
            this.movement = e.target.innerText;

        },
        specialAtack(e) {
            // this.playerLife -= Math.round(Math.random() * (14 - 9)) + 9;
            // this.enemyLife -= Math.round(Math.random() * (15 - 11)) + 11;
            this.playerAtack = Math.round(Math.random() * (15 - 11)) + 11;
            this.enemyAtack = Math.round(Math.random() * (14 - 9)) + 9;
            this.playerLife -= this.enemyAtack;
            this.enemyLife -= this.playerAtack;
            this.movement = e.target.innerText;
        },
        heal(e) {
            // this.playerLife += Math.round(Math.random() * (14 - 9)) + 9;
            // this.playerLife -= Math.round(Math.random() * (13 - 8)) + 8;
            this.healAmount = Math.round(Math.random() * (14 - 9)) + 9;
            this.enemyAtack = Math.round(Math.random() * (13 - 8)) + 8;
            this.playerLife -= this.enemyAtack;
            this.playerLife += this.healAmount;
            this.movement = e.target.innerText;
        },
        giveUp() {
            gameEnded = true;
            this.playerLife = 0;
            this.enemyLife = 100;
            this.result = "You'd lost this battle.";
        },
        startGame() {
            this.gameEnded = false;
            this.enemyLife = 100;
            this.playerLife = 100;
        }
    }
})