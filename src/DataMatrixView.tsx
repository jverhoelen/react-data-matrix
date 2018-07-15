import * as React from 'react'
import DataMatrix from 'DataMatrix'

export interface DisplayConfig {
    rectangular?: boolean
    bitSize?: number 
}

export interface DataMatrixViewProps {
    content: string
    displayConfig?: DisplayConfig
}

export default class DataMatrixView extends React.Component<DataMatrixViewProps, {}> {
    private readonly dataMatrix: DataMatrix

    constructor(props: DataMatrixViewProps) {
        super(props)
        const displayConfig = props.displayConfig || {}
        this.dataMatrix = new DataMatrix(props.content, !!displayConfig.rectangular)
    }

    public render() {
        const { bitmapRows, columnsCount } = this.dataMatrix
        const displayConfig = this.props.displayConfig || {}
        const bitSize = displayConfig.bitSize || 1

        const renderedRows = bitmapRows.map((row, rowIndex) => {
            return row.split('')
                .filter(char => char === '1')
                .map((char, index): JSX.Element => {
                    const xPosition = index * bitSize
                    const yPosition = rowIndex * bitSize

                    return <rect
                        className='black bit'
                        width={ bitSize }
                        height={ bitSize}
                        x={ xPosition }
                        y={ yPosition }
                        fill='#000000'
                    />
                })
        })

        const containerWidth = columnsCount * bitSize

        return (
            <svg width='50' height='50' viewBox={`0 0 ${containerWidth} ${containerWidth}`}>
                <rect className='bits-container' width={ containerWidth } height={ containerWidth } x='0' y='0' fill='#FFFFFF'/>
                { renderedRows }
            </svg>
        )
    }
}
