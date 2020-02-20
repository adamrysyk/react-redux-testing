import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils';
import Button from './index';

describe('Button component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw warning', () => {
            const expectedProps = {
                text: 'click me',
                onClick: () => {

                }
            }
            const propsError = checkProps(expectedProps, Button);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Renders without error', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                text: 'click me!',
                onClick: () => {}
            }
            wrapper = shallow(<Button {...props}/>);
        })

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'button');
            expect(button.length).toBe(1);
        })
    })

});
