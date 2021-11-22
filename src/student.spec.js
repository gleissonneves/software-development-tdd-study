const student = require('./student')

describe('teste para alunos', ()=> {
    it('aluno apovados com 10', () => {
        const note = [4, 3, 3]
        expect(student.sum(note)).toEqual(10)
    })

    it('deve ser zero quando uma das notas for zero', () => {
        const note = [1, 3, 0]
        expect(student.sum(note)).toEqual(0)
    })

    it('Deve dobra a nota quando o aluno tiver mais de cinco notas', ()=> {
        const note = [1, 3, 2, 3, 1, 1, 1]
        expect(student.sum(note)).toEqual(24)
    })
})