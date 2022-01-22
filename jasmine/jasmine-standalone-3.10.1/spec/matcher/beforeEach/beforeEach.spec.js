xdescribe('Deve validar o uso do beforeEach', () => {
    var testeA = 0

    beforeEach(function(){ 
        testeA++ 
    })
    
    it('o incrementador deve ser 1', ()=> {
        expect(testeA).toEqual(1);
    })

    it('o incrementador deve ser 1', ()=> {
        expect(testeA).toEqual(2);
    })
})