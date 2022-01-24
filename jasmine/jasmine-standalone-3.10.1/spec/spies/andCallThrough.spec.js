
describe('Testes do objeto spies - .and.callThrough', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    }

    beforeAll(function() {
        spyOn(calculadora, 'somar').and.callThrough();
        spyOn(calculadora, 'subtrair')
    })

    it('Deve executar o método somar original', function() {
        expect(calculadora.somar(1, 1)).toEqual(2);
    })
    

    it('Não deve executar o método subtrair original', function() {
        expect(calculadora.subtrair(1, 1)).toBeUndefined();
    })
})