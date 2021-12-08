// verifica se o valor é diferente de 'false', '0', '' (ou seja, vazio), 'undefined', 'null', ou 'NaN'
// Dê preferência ao toBeFalsy ao invés de not.toBeTruthy (fora do ambiente de estudo)

describe('Teste do toBeTruthy', () => {
    it('deve demonstrar o uso do toBeTruthy', () => {
        let a = null;
        let b = undefined;
        let c;
        let d = NaN;
        let e = 'Teste';
        let f = 10;
        let g = 0;
        let h = '';
        let i = ()=> 1 + 3;


        expect(a).not.toBeTruthy();
        expect(b).not.toBeTruthy();
        expect(c).not.toBeTruthy();
        expect(d).not.toBeTruthy();
        
        expect(e).toBeTruthy();
        expect(f).toBeTruthy();

        expect(g).not.toBeTruthy()
        expect(h).not.toBeTruthy()
        
        expect(i).toBeTruthy()
    });
})