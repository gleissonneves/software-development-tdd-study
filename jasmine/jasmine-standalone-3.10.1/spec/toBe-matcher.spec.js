describe('toBe matcher', () => {
    it('teste de equivalência, ao somar 1 + 2 é igual a 3 ', ()=> {
        expect(1 + 2).toBe(3)
    })
})

describe('Teste de objeto', () => {
    it('Obj 1 é a mesma coisa que o Obj 2', () => {
        let a = {valor: true}
        let b = a

        expect(a).toBe(b)
    })
})