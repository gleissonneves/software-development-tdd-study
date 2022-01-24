
describe('Testes do objeto spies - .and.returnValue', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar').and.returnValue(10);
    })

    it('Deve retornar 10 para o método somar', function() {
        expect(calculadora.somar(1, 3)).toEqual(10);
    })

})