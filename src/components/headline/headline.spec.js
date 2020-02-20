import React from 'react';
import { shallow } from 'enzyme';

import Headline from './index';
import { findByTestAttr, checkProps } from '../../../utils';

const setup = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test header',
                desc: 'Test desc',
            };
            const propsError = checkProps(Headline, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'test header',
                desc: 'test desc',
            };
            wrapper = setup(props);
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headline');
            expect(component.length).toBe(1);
        });

        it('Should render a header', () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });


        it('Should render a description', () => {
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        });

    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        })

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headline');
            expect(component.length).toBe(0);
        });
    });

});
