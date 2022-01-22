describe('Deve validar o uso do fail', () => {
    it('teste de o uso do fail ', ()=> {
        let a = (item, call) => {
            if(item) call()
        }

        a(false, ()=> fail('não execute'))
    })
})