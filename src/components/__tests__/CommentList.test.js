import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['comment 1', 'comment 2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

it('creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows text for each comment', () => {
    // enzyme render() method returns a cheerio wrapper
    // cheerio js is like jQuery which allows dom manipulation
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
})