
describe('Testes do objeto spies - .calls.all', function() {
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

    it('Deve retornar informações sobre a função', function() {
        calculadora.somar(1, 1)
        var inforFunc = calculadora.somar.calls.all();
        expect(inforFunc[0].object).toEqual(calculadora)
        expect(inforFunc[0].args).toEqual([1, 1])
        expect(inforFunc[0].returnValue).toBeUndefined()
        
    })
})