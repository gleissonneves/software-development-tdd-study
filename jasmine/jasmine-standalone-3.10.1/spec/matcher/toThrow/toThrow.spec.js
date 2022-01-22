describe('Teste do toThrow', ()=> {
    it('Deve demostrar o uso do toThrow', ()=> {
        function mult(){
            numero * 10;
        }

        expect(mult).toThrow();
    })
})