import { expect } from 'chai'
import DataMatrix from 'DataMatrix'

let dataMatrix: DataMatrix

describe('DataMatrix', () => {

    describe('rectangular', () => {
        beforeEach(() => {
            dataMatrix = new DataMatrix('Something important can be encoded here', true)
        })

        it('should initialise that DataMatrix', () => {
            expect(!!dataMatrix).to.be.true
            expect(dataMatrix.content).to.equal('Something important can be encoded here')
        })

        it('should know the amount of bitmap rows created', () => {
            expect(dataMatrix.rowsCount).to.equal(18)
        })

        it('should know the amount of bitmap columns created', () => {
            expect(dataMatrix.columnsCount).to.equal(50)
        })

        it('should NOT have the same amount of rows as columns', () => {
            expect(dataMatrix.columnsCount).to.be.above(dataMatrix.rowsCount)
        })

        it('should set the bitmap rows during creation', () => {
            expect(dataMatrix.bitmapRows).to.deep.equal([
                '00000000000000000001010101010101010101011101000100',
                '00110111001110110010000100011001001110000100110110',
                '10101101010101011101101010011001101011010001010100',
                '01010001101001101000101010100101010011010111110101',
                '01101111100001010101011001010100100110010110001001',
                '10011000011001000111011101101010111100011111111111',
                '11111100000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '00000000000000000000000000000000000000000000000000',
                '0000000000000000000000000'
            ])
        })
    })

    describe('non-rectangular', () => {
        beforeEach(() => {
            dataMatrix = new DataMatrix('Something important can be encoded here', false)
        })

        it('should initialise that DataMatrix', () => {
            expect(!!dataMatrix).to.be.true
            expect(dataMatrix.content).to.equal('Something important can be encoded here')
        })

        it('should know the amount of bitmap rows created', () => {
            expect(dataMatrix.rowsCount).to.equal(28)
        })

        it('should know the amount of bitmap columns created', () => {
            expect(dataMatrix.columnsCount).to.equal(28)
        })

        it('should have the same amount of rows as columns', () => {
            expect(dataMatrix.columnsCount).to.equal(dataMatrix.rowsCount)
        })

        it('should set the bitmap rows during creation', () => {
            expect(dataMatrix.bitmapRows).to.deep.equal([
                '0000000000000000000000000000',
                '0101010101010101010101010100',
                '0101110100010001100111010010',
                '0111001110110010111000010100',
                '0100011001001110011011000110',
                '0100110110101101110010010100',
                '0101010111010001000101001010',
                '0110011010101010001001011000',
                '0101000101010110010000001110',
                '0110100011111010111000101000',
                '0101001110011111100000100110',
                '0110100101100010111111010000',
                '0100010000110100000100010110',
                '0110100110010110001110101000',
                '0111000100100001100010101110',
                '0111001001000111101001001000',
                '0100011101000000010100111110',
                '0110100001110011000101010000',
                '0100011111101110110000110110',
                '0110011110001011100010000000',
                '0100101010000110001100100110',
                '0110110001000111101000001000',
                '0111011011101111111001111110',
                '0110111001010111110000001000',
                '0101010100000111101101101010',
                '0110101011111100101010001100',
                '0111111111111111111111111110',
                '0000000000000000000000000000'
            ])
        })
    })
})
