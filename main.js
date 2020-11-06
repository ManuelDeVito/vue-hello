
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data.


var app = new Vue ({

    el: '#contenitore',

    data: {

        indice: 0,

        testo: 'Benvenuto Vue!!!',

        colore: 'rosso',

        array_foto: ['img/Hulk.jpg', 'img/Superman.jpg', 'img/Hulk2.jpg', 'img/Arciere.jpg', 'img/Gladiatore.jpg', 'img/Dadi.jpg', 'img/LunaRossa.jpg', 'img/Luna.jpg', 'img/Brasile.jpg', 'img/Palme.jpg', 'img/Maldive.jpg',]
    },


    methods: {

        cambio_foto: function() {

            if (this.indice == this.array_foto.length -1) {

                this.indice = 0;

            }else
            {
                this.indice++;
            }
        }

        }

});
