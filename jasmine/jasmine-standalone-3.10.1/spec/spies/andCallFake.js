
describe('Testes do objeto spies - .and.callFake', function() {
    var calculadora = {
        somar: function(n1 , n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    }

    

    beforeAll(function() {
        spyOn(calculadora, 'somar').and.callFake(function(n1, n2) {
            return n1 - n2;
        });
    })

    it('Deve transformar o método somar em subtração', function() {
        expect(calculadora.somar(3, 1)).toEqual(2);
    })

})