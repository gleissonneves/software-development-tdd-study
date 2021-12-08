// verifica se o valor é igual a null

describe('Teste do toBeNull', () => {
    it('deve demonstrar o uso do toBeNull ', () => {
        let a = null;
        let b = undefined;
        let c;
        let d = NaN;
        let e = 'Teste';

        expect(a).toBeNull();
        expect(b).not.toBeNull();
        expect(c).not.toBeNull();
        expect(d).not.toBeNull();
        expect(e).not.toBeNull()
    });
})