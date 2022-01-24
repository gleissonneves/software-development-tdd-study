
describe('Testes do objeto spies - .calls.count', function() {
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

    it('Deve transformar o método somar em subtração', function() {
        calculadora.somar(3, 1)
        calculadora.somar(3, 1)
        expect(calculadora.somar.calls.count()).toEqual(2);
    })
})