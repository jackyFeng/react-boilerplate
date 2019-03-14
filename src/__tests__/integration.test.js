import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install(); // it will intercept the api calls made from axios
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall(); // to make sure not intercept subbed request after tests
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');
    
    // use wait() because moxios needs a tiny time to kick in

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done(); // if the done is pass in the callback, the jest will wait until done() to complete the test
        wrapped.unmount();
    });
});