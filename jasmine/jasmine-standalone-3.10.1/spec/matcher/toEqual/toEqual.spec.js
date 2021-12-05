// faz uma comparação usando os valores

describe('Teste do toEqual (1)', () => {
    it('deve validar o uso do toEqual', () => {
        expect(true).toEqual(true)
    })
})

describe('Teste do toEqual (2)', () => {
    it('deve validar se os valores dos objs são iguais', ()=> {
        let a = {valor: true}
        let b = {valor: true}
        
        expect(a).toEqual(b)
    })
})