
describe('Testes do objeto spies - .and.throwError', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    }


    beforeAll(function() {
        spyOn(calculadora, 'somar').and.throwError('error')
    })

    it('Deve retornar um erro ao somar', function() {
        expect(function(){ calculadora.somar(3, 1) }).toThrowError('error');
    })

})