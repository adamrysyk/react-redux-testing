import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils';
import ListItem from './index';

describe('ListItem component', () => {
    describe('Check prop types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'my title',
                desc: 'my description'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'my title',
                desc: 'my description'
            };
            wrapper = shallow(<ListItem {...props} />);
        });
        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'listItem');
            expect(component.length).toBe(1);
        })

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'title');
            expect(title.length).toBe(1);
        })

        it('Should render a description', () => {
            const description = findByTestAttr(wrapper, 'desc');
            expect(description.length).toBe(1);
        })
    });

    describe('Should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'my description'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should not render with no title', () => {
            const component = findByTestAttr(wrapper, 'listItem');
            expect(component.length).toBe(0);
        })
    });

});
