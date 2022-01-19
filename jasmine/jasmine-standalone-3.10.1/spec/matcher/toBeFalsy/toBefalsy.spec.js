/*
existem seis valores "falsy" (que se traduzem em falso quando avaliados em um
contexto booleano): 
false, 0, '', null, undefined e NaN. 
Todo o resto é "truthy"
*/

describe('Teste do toBefalsy', ()=> {
    it('Deve retornar false caso haja café na cafeteira.', ()=> {
        const isCofferMakerEmpyt = false;

        expect(isCofferMakerEmpyt).toBeFalsy();
    })


    it('Deve retornar null caso ocorra erro ao fazer café.', ()=> {
        const anyProblemMakingCoffee = null

        expect(anyProblemMakingCoffee).toBeFalsy();
    })


    it('Deve retornar 0 caso a cafereita esteja desligada.', ()=> {
        const isCoffeeMakerOn = 0

        expect(isCoffeeMakerOn).toBeFalsy();
    })
})