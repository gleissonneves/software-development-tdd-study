describe('Teste do toBeLessThan', ()=> {
    it('deve demostrar o uso do toBelessThan', ()=> {
        let pi = 3.1415
        expect(3).toBeLessThan(pi)
        expect(4).not.toBeLessThan(pi) //usar o toBeGreaterThan em ambiente de prod
    })
})