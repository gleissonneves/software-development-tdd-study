
describe('Testes do objeto spies - toHaveBeenCalled', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar')
    })

    it('Deve possuir o método somar como não definido', function() {
        expect(calculadora.somar(1, 1)).toBeUndefined();
    })
    
    it('Deve verificar se o método somar foi chamado ao menos uma vez', function() {
        calculadora.somar(1, 1)
        expect(calculadora.somar).toHaveBeenCalled();
    })
})