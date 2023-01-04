import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
    it('renders a main section', () => {
        render(<Home />);
        const main = screen.getByRole('main');

        expect(main).toBeInTheDocument();
    });
});
