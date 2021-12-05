// verifica se o valor é undefined

describe('Teste do toBeUndefined', ()=> {
    it('deve validar o uso do matcher toBeUndefined', () => {
        let a;
        let b = undefined;

        let c = 'sad'
        let d = false

        expect(a).toBeUndefined()
        expect(b).toBeUndefined()

        expect(c).not.toBeUndefined()
        expect(d).not.toBeUndefined()
        expect(null).not.toBeUndefined()
    });
})