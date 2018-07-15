import * as React from 'react'
import { expect } from 'chai'
import { mount, ReactWrapper } from 'enzyme'
import DataMatrixView from 'DataMatrixView'

const element = (
    <DataMatrixView content={ 'Something' } displayConfig={ { rectangular: false, bitSize: 1 } } />
)
let wrapper: ReactWrapper<DataMatrixView, any>
let root: Element

beforeEach(() => {
    wrapper = mount(element)
    root = wrapper.getDOMNode()
})

describe('DataMatrixView component', () => {
    it('should render an svg', () => {
        expect(root.tagName).to.equal('svg')
    })

    it('should span a big rectangle for the small data frames as container', () => {
        const bitsWrapper = wrapper.find('.bits-container')
        const { height, width, fill, x, y } = bitsWrapper.props()

        expect(bitsWrapper.getDOMNode().tagName).to.equal('rect')
        expect(width).to.equal(18)
        expect(height).to.equal(18)
        expect(y).to.equal('0')
        expect(x).to.equal('0')
        expect(fill).to.equal('#FFFFFF')
    })

    it('should render a lot of rects representing the bits', () => {
        expect(wrapper.find('rect.bit')).to.have.length(136)
    })

    it('should render only bits that are black, white ones will be visible through container', () => {
        expect(wrapper.find('rect.bit.black')).to.have.length(136)
    })
})
