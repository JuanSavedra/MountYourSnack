const vm = new Vue({
    el: '#app',
    computed: {
        bread() {
            return ['./imagens/padrao/pao_superior.png', './imagens/padrao/pao_inferior.png']
        },
        lettuce() {
            return './imagens/padrao/alface.png'
        },
        ketchup() {
            return './imagens/padrao/molho.png'
        },
        mayonnaise() {
            return './imagens/padrao/molho.png'
        },
        mustard() {
            return './imagens/padrao/molho.png'
        },
        hamburguer() {
            return './imagens/padrao/hamburguer.png'
        }
    }
})