import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('Should update the store correctly', () => {
        const expectedState = [{
            title: 'title 1',
            body: 'body 1'
        }, {
            title: 'title 2',
            body: 'body 2'
        }, {
            title: 'title 3',
            body: 'body 3'
        }];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toEqual(expectedState);
            })
    })
})
