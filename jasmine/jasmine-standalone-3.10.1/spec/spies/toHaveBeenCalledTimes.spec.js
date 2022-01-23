
describe('Testes do objeto spies - toHaveBeenCalledTimes', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar')
    })
 
    it('Deve verificar se o método foi chamado 2 vezes', function() {
        calculadora.somar(1,1)
        calculadora.somar(1,1)
        expect(calculadora.somar).toHaveBeenCalledTimes(2);
    })

})