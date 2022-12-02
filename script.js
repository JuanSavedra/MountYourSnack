const vm = new Vue({
    el: '#app',
    data: {
        inputTypeBread: null,
        inputTypeLettuce: [],
        inputTypeSauce: [],
        inputTypeHamburguer: null,
        stage: 1,
        inputName: null,
        inputAddress: null
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
            if (this.inputTypeLettuce.includes('alface')) {
                return './imagens/alface.png'
            }

            return './imagens/padrao/alface.png'
        },
        ketchup() {
            if (this.inputTypeSauce.includes('ketchup')) {
                return './imagens/ketchup.png'
            }

            return './imagens/padrao/molho.png'
        },
        mayonnaise() {
            if (this.inputTypeSauce.includes('maionese')) {
                return './imagens/maionese.png'
            }

            return './imagens/padrao/molho.png'
        },
        mustard() {
            if (this.inputTypeSauce.includes('mostarda')) {
                return './imagens/mostarda.png'
            }

            return './imagens/padrao/molho.png'
        },
        hamburguer() {
            switch(this.inputTypeHamburguer) {
                case 'bovino':
                    return './imagens/bovino.png'
                    break
                case 'frango':  
                    return './imagens/frango.png'
                    break
                case 'soja':
                    return './imagens/soja.png'
                    break
                default: {
                    return './imagens/padrao/hamburguer.png'
                }
            }
        }
    },
    methods: {
        finalizeOrder() {
            if (this.inputTypeBread && this.inputTypeHamburguer) {
                this.stage = 2
            } else {
                alert("Você precisa selecionar no mínimo o pão e o hambúrguer.")
            }
        }
    }
})