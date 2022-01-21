describe('Teste do toBeGreaterThan', ()=> {
    it('deve demostrar o uso do  toBeGreaterThan', ()=> {
        expect(6).toBeGreaterThan(4)
        expect(6).toBeGreaterThan(3)
        expect(6).toBeGreaterThan(1)
        expect(6).toBeGreaterThan('2')
    })
})