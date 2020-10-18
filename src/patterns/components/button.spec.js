import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('Button', () => {
    const props = {
        label: 'Sign in',
        id: 'signin'
    }
    const shallowComponent = shallow(<Button {...props} />)

    it('renders the button label and id properly', () => {
        expect(shallowComponent.find('button').text().trim()).toEqual('Sign in');
    });
});