import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../core/components/common/Search/SearchInput';

describe('<SearchInput />', () => {
    const placeholderText = 'Search here...';
    let fn: () => void;

    beforeEach(() => {
        fn = jest.fn();

        render(<Search onSearch={fn} />);
    });

    it('calls search handler if user has pressed "enter"', () => {
        const searchInput = screen.getByPlaceholderText(placeholderText);

        fireEvent.change(searchInput, { target: { value: 'van' } });
        fireEvent.keyDown(searchInput, {
            key: 'Enter'
        });
        
        expect(fn).toHaveBeenCalled();
    });

    it('does not call search handler if user has not pressed "enter"', () => {
        const searchInput = screen.getByPlaceholderText(placeholderText);

        fireEvent.change(searchInput, { target: { value: 'van' } });
        fireEvent.keyDown(searchInput, {
            key: 'a'
        });
        
        expect(fn).not.toHaveBeenCalled();
    });
});
