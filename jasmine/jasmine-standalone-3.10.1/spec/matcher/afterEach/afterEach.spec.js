xdescribe('Deve validar o uso do After', () => {
    var testeB = 0;

    beforeEach(function(){
        testeB++    
    })
    
    afterEach(function(){ 
        testeB = 0
    })
    

    it('teste de o uso do ser 1', ()=> {
        expect(testeB).toEqual(1);
    })

    it('teste de o uso do ser 1', ()=> {
        expect(testeB).toEqual(1);
    })
})