
describe('Deve testar o toContain', ()=> {
    const feira = ['maçã', 'goiaba', 'peira', 'limão']

    it('Deve retornar true se na feira exitir limão', () => {
        expect(feira).toContain('limão');
    })

    it('Deve retornar true se na não feira exitir uva', () => {
        expect(feira).not.toContain('uva');
    })

    it('Deve retornar true se feirante se apresentar pelo nome', () => {
        const feirante = (nome) => `olá, me chamo ${nome}`
        
        // toContain é caseSencitive
        expect(feirante('Rafael')).toContain('Rafael');
        expect(feirante('Rafael')).not.toContain('rafael');    
    })
})