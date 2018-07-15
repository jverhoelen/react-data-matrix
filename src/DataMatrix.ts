import { Datamatrix } from 'tualo-datamatrix'

export default class DataMatrix {
    public readonly bitmapRows: string[] = []

    constructor(public readonly content: string, rectangular: boolean) {
        // will just create something like "001\n011\n111" that represents the content as bitmap
        const dataBitmap: string = new Datamatrix().getDigit(content, rectangular)
        this.bitmapRows = dataBitmap.split('\n')
    }

    get rowsCount(): number {
        return this.bitmapRows.length
    }

    get columnsCount(): number {
        return this.bitmapRows.length > 0 ? this.bitmapRows[0].length : 0
    }
}
