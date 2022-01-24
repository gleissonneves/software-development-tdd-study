
describe('Testes do objeto spies - .calls.Allargs', function() {
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

    it('Deve retornar os argumetos passados nos métodos em array', function() {
        calculadora.somar(1, 1)
        calculadora.somar(3, 1)
        expect(calculadora.somar.calls.allArgs(0)).toEqual([[1, 1], [3, 1]]);
    })
})