
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS: Aggiungere un’immagine presa anch’essa da un data.


var app = new Vue({

    el: '#selettore',



    data: {

        testo: 'Benvenuto Vue!!!',

        immagine: 'img/Curva Sud.jpg',

        colore: 'rosso'

    },

    methods: {

    cambioColore: function() {

        if (this.colore == 'rosso') {

            this.colore = 'blu';

        } else
        {
            this.colore = 'rosso';
        }


    }

    },

});
