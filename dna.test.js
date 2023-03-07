

const dna = require('./dna')


test('dna string',()=>{
    expect(dna("CTGAcdfTA")).toBe('CTGAAAATA')
})

test('dna string',()=>{
    expect(dna("")).toBe("")
})
