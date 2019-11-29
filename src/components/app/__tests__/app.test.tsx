import React from 'react'
import { mount } from 'enzyme'
import { App } from '../app'
import { NavBar } from '../../nav/nav'

describe('App', () => {
    it('renders the NavBar component', () => {
        const wrapper = mount(<App />)
        expect(wrapper.find(NavBar)).toHaveLength(1)
    })
})
