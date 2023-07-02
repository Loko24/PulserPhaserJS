import { gameHeight, gameWidth } from '../../consts';
import back from '../assets/img/fondo.jpg'
import imgDoClick from '../assets/img/cara3.png'
import imgSuperman from '../assets/img/cara4.png'
import imgSpiderman from '../assets/img/cara2.png'

class Init extends Phaser.Scene {

    preload() {
        //Add background
        this.load.image('mainBack', back);
        //Add images to click
        this.load.image('addPower', imgDoClick);
        this.load.image('superman', imgSuperman);
        this.load.image('spiderman', imgSpiderman);
    }

    create() {
        // Crea las teclas específicas para el jugador 2
        this.keyAPlayer2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyLPlayer2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

        // Inicializa las variables de puntuación para cada jugador
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
        // Asigna los controladores de eventos para cada tecla
        this.keyAPlayer2.on('down', this.incrementScorePlayer1, this);
        this.keyLPlayer2.on('down', this.incrementScorePlayer2, this);


        //Load background at the half of the screen
        this.add.sprite(gameWidth / 2, gameHeight / 2, 'mainBack');

        //Load images to click on the respective screen of background
        this.imgDoClick = this.add.sprite(480, 100, 'addPower').setScale(1, 1);
        this.imgSuperman = this.add.sprite(225, 350, 'superman').setScale(0.5, 0.5);
        this.imgSpiderman = this.add.sprite(740, 350, 'spiderman').setScale(0.5, 0.5);

        this.topeDeTiempo = 10;
        this.tiempo = this.topeDeTiempo;
        this.tiempoTXT = this.add.text(835, 130, this.tiempo, {
            fontFamily: 'font1',
            fontSize: 64,
            color: '#00ff00',
        });
        this.tiempoTXT.rotation = 20 * Math.PI / 180;
        this.temporizador();


        //Set hero pulsed to get power
        this.imgSuperman.setInteractive();
        this.imgSuperman.on('pointerdown', () => this.selectHeroPower(this.imgSuperman));
        this.imgSpiderman.setInteractive();
        this.imgSpiderman.on('pointerdown', () => this.selectHeroPower(this.imgSpiderman));
        //Set winner text
        this.winner = 'winner';
        this.superPower = this.add.text(415, 310, this.winner, {
            fontFamily: 'font1',
            fontSize: 50,
            color: '#00ff00',
            align: 'right'
        });
        //Set power text
        this.winner = 'N/A';
        this.thewinneris = this.add.text(535, 360, this.winner, {
            fontFamily: 'font1',
            fontSize: 30,
            color: '#00ff00',
            align: 'right'
        });
        //Set timer text
        this.superman = 'Timer';
        this.superPower = this.add.text(60, 25, this.superman, {
            fontFamily: 'font1',
            fontSize: 30,
            color: '#00ff00',
            align: 'right'
        });
        //Set timer value text
        this.tiempo = 10;
        this.tiempoTXT = this.add.text(65, 60, this.tiempo, {
            fontFamily: 'font1',
            fontSize: 60,
            color: '#00ff00',
            align: 'right'
        });
        this.thewinneris.setOrigin(1, 0);
    }

    // Controlador de evento para incrementar la puntuación del jugador 1
    incrementScorePlayer1() {
        this.scorePlayer1 += 100;
    }

    // Controlador de evento para incrementar la puntuación del jugador 2
    incrementScorePlayer2() {
        this.scorePlayer2 += 100;
    }

    temporizador() {
        --this.tiempo;
        this.tiempoTXT.setText(this.tiempo);
        if (this.tiempo === 0) {
            alert('Se acabó el tiempo');
            this.heroFigth();
        }
        else {
            this.time.delayedCall(1000, this.temporizador, [], this);
        }
    }

    heroFigth() {
        if (this.scorePlayer1 < this.scorePlayer2) {
            this.thewinneris.setText('Spiderman');
        }
        else if (this.scorePlayer1 > this.scorePlayer2) {
            this.thewinneris.setText('Superman');
        }
        else {
            this.thewinneris.setText('Empate');
        }
    }
}

export default Init;