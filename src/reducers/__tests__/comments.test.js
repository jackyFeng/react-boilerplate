import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'action/types';

it('handles actions of type SAVE_COMMENTS', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'NEW COMMENT'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['NEW COMMENT']);
});

it('handles actions of unknown type', () => {
    const action = {
        type: 'unknow',
        payload: 'nothing'
    };

    expect(commentsReducer([], action)).toEqual([]);
});