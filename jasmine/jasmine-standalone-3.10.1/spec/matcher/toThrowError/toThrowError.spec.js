describe('Teste do toThrow', ()=> {
    it('Deve demostrar o uso do toThrow', ()=> {
        function somar(x, y){
            if(x <= 0 || y <= 0) {
                throw new TypeError('Deve ser maior que 0')
            }
            return x + y;
        }

        expect(function() { somar(0, 0) }).toThrowError();
        expect(function() { somar(0, 0) }).toThrowError('Deve ser maior que 0');
        expect(function() { somar(0, 0) }).toThrowError(/maior que 0/);
    })
})