
describe('Testes do objeto spies - .calls.any', function() {
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

    it('Deve transformar o método somar em subtração', function() {
        calculadora.somar(3, 1)
        expect(calculadora.somar.calls.any()).toBeTruthy();
    })
})