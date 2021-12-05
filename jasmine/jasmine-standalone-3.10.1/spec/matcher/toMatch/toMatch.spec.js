// faz uma comparação usando expressões regulares

describe('Teste toMatch', ()=> {
    it('deve validar o uso do toMatch', ()=> {
        let a = 'texto para encontra o nome Gleisson'

        expect(a).toMatch('Gleisson')
        expect(a).toMatch(/gleisson/i)
    })

    it('deve o cep', ()=> {
        let a = '12345-123'
        let regex = /^\d{5}-\d{3}$/

        expect(a).toMatch(regex)
    })

    it('deve o formato do cpf', ()=> {
        let a = '000.000.000-00'
        let regex = /^\d{3}.\d{3}.\d{3}-\d{2}$/
        
        expect(a).toMatch(regex)
    })

    it('deve validar o formato do cnpj', ()=> {
        let a = '00.000.000/0000-00'
        let regex = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/

        expect(a).toMatch(regex)
    })

    it('valida o formato do cpf ou do cnpj', ()=> {
        let cpf = '000.000.000-00'
        let cnpj = '00.000.000/0000-00'
        let regex = /(^\d{3}.\d{3}.\d{3}-\d{2}$)|(^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$)/

        expect(cpf).toMatch(regex)
        expect(cnpj).toMatch(regex)
    })

    it('deve validar o formato da data para exibição em pt-br', () => {
        let a = '12/12/2012'
        let regex = /^\d{2}\/\d{2}\/\d{4}$/

        expect(a).toMatch(regex)
    })

    it('deve valida o formato da da data para armazenamento', ()=> {
        let a = '2001-11-23'
        let regex = /^\d{4}-\d{2}-\d{2}/

        expect(a).toMatch(regex)
    })
})