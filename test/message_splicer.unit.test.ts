/*
 *   Copyright: xbanki <contact@xbanki.me>
 *   Licensed under the MIT License.
 *   see LICENSE for details.
 */

import { spliceMessage } from '../src/thot';

/*
 * This test focuses on the internal 'spliceMessage', making sure the returned object
 * has the right keys, and the right values based on input, or throwing Error.
 */

describe('Test internal "spliceMessage(message: string)" function', () => {

    // Correct cases

    test('Expect correct result from: "!foo bar, baz"', () => {
        expect(spliceMessage('!foo bar, baz')).toEqual({
            prefix: '!',
            command: 'foo',
            options: ['bar', 'baz'],
            raw: '!foo bar, baz'
        });
    });

    test('Expect correct result from: "!foo           bar,              baz"', () => {
        expect(spliceMessage('!foo           bar,              baz')).toEqual({
            prefix: '!',
            command: 'foo',
            options: ['bar', 'baz'],
            raw: '!foo           bar,              baz'
        });
    });

    test('Expect correct result from: "!foo bar, baz, boz, foo bar ..."', () => {
        expect(spliceMessage('!foo bar, baz, boz, foo bar, baz, boz, foo bar, baz, boz, foo bar, baz, boz')).toEqual({
            prefix: '!',
            command: 'foo',
            options: ['bar', 'baz', 'boz', 'foo bar', 'baz', 'boz', 'foo bar', 'baz', 'boz', 'foo bar', 'baz', 'boz'],
            raw: '!foo bar, baz, boz, foo bar, baz, boz, foo bar, baz, boz, foo bar, baz, boz'
        });
    });
});
