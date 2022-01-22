xdescribe('Deve validar o uso do beforeAll', () => {
    var contador = 0

    beforeAll(function(){ 
        contador = 10;
    })
    
    beforeEach(function(){ 
        contador++ 
    })

    it('teste de o uso do ser igual a 11', ()=> {
        expect(contador).toEqual(12);
    })

    it('teste de o uso do ser igual a 12', ()=> {
        expect(contador).toEqual(11);
    })
})