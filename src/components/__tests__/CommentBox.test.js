import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

// called before every single it statement
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>); // fake component will be created in JS DOM
});

// called after every single it statement
afterEach(() => {
    wrapped.unmount();
});

it('shows a text area and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => { // describe function provided by jest is not only used to group test, but also limit the scope of beforeEach()
    beforeEach(() => {
        // simulate the change event
        wrapped.find('textarea').simulate('change', { // simulate is enzyme metheod, and 'change' is the html event name
            target: {value: 'new comment'} // this object will be merged into 'event' object passed to the event handler function
        });
    
        // force the component to update
        wrapped.update(); // enzyme method
    
    });

    it('has a text area user can type in', () => {
        // verify the correct prop is received
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    // simulate the submit event on the form instead of simulating the submit button
    it('empty the textarea when the form is submitted', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

