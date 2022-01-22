xdescribe('Deve validar o uso do beforeAll', () => {
    var contador = 0

    beforeAll(function(){ 
        contador = 10
    })
    
    afterAll(function(){ 
        contador = 0
    })

    it('teste de o uso do ser igual a 10', ()=> {
        expect(contador).toEqual(10);
    })

    it('teste de o uso do ser igual a 10', ()=> {
        expect(contador).toEqual(10);
    })
})