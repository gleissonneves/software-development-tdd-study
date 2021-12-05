// verifica se um valor foi definido e é diferente de undefined

describe('Teste do toBeDefined', () => {
    it('deve demostrar o uso do toBeDefined', ()=> {
        let n2;
        let n3 = undefined;

        expect(10).toBeDefined()
        expect(null).toBeDefined()
        expect(NaN).toBeDefined()
        expect(n2).not.toBeDefined()
        expect(n3).not.toBeDefined()
    })
})