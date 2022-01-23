
describe('Testes do objeto spies - toHavecalledWith', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar')
    })
 
    it('Deve chamar o método somar com os pâmetros válidos', function() {
        calculadora.somar(1,1)
        expect(calculadora.somar).toHaveBeenCalledWith(1, 1);
    })

})