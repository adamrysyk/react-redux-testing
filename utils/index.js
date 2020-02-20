import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/reducers';
import { middleware } from '../src/createStore';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErrors = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErrors;
};

export const testStore = (initialState) => {
    const creteStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return creteStoreWithMiddleware(rootReducer, initialState);
};
