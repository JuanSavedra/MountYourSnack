const vm = new Vue({
    el: '#app',
    data: {
        inputTypeBread: null
    },
    computed: {
        bread() {
            switch(this.inputTypeBread) {
                case 'gergelim':
                    return ['./imagens/pao_gergelim_superior.png', './imagens/pao_gergelim_inferior.png']
                    break
                case 'australiano':  
                    return ['./imagens/pao_australiano_superior.png', './imagens/pao_australiano_inferior.png']
                    break
                default: {
                    return ['./imagens/padrao/pao_superior.png', './imagens/padrao/pao_inferior.png']
                }
            }
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