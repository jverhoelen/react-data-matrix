declare module 'tualo-datamatrix' {
    namespace dm {
        export class Datamatrix {
            public getDigit(text: string, rectangular: boolean): string
        }
    }

    export = dm
}
