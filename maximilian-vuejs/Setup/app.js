new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function () {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function () {
			var damage = this.calculateDamage(3, 10);		
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'The Player hit the Monster for ' + damage
				});
			if (this.checkWin()) {
				return;
			}
			this.monsterAttack();
		},
		specialAttack: function () {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'The Player hit the Monster hard for ' + damage
				});
			if (this.checkWin()) {
				return;
			}

			this.monsterAttack();
		},
		heal: function () {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'The Player heals for 10'
				});
			this.monsterAttack();
		},
		giveUp: function () {
			this.gameIsRunning = false;
		},
		calculateDamage: function (min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		monsterAttack: function () {
			var damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'The Monster hit the Player for ' + damage
				});
			this.checkWin();
		},
		checkWin: function () {
			if (this.monsterHealth <= 0) {	
				if (confirm('You won, New Game?')) {
					this.startGame();
				
				} else {
					this.gameIsRunning = false;
				}
				return true;
				
			} else if (this.playerHealth <= 0) {
				if (confirm('You lose, New Game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});