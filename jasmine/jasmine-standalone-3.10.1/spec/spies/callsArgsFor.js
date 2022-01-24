
describe('Testes do objeto spies - .calls.argsFor', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar');
    })

    it('Deve retornar os argumetos passados nos métodos', function() {
        calculadora.somar(1, 1)
        calculadora.somar(3, 1)
        expect(calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
        expect(calculadora.somar.calls.argsFor(1)).toEqual([3, 1]);
    })
})