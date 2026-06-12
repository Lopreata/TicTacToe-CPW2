export default {
    name: "bot-logic",

    methods: {
        jogarBot(caixas, jogadorAtual, marcarCaixa) {

            setTimeout(() => {

                let jogadas = [];
                for (let i = 0; i < caixas.length; i++) {
                    if (caixas[i].value === '') {
                        jogadas.push(i);
                    }
                }

                if (jogadas.length === 0) return;

                let pos = Math.floor(Math.random() * jogadas.length);
                let jogada = jogadas[pos];

                marcarCaixa(jogada);

            }, 350);
        }
    },

    template: `<div></div>`
};
