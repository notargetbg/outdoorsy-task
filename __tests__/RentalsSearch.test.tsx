import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RentalsSearch from '../core/components/containers/RentalsSearch/RentalsSearch';
import { RentalsContext, RentalsState } from '../core/contexts/RentalsContext';
import { Meta, Relationships } from '../core/types/Types';

const defaultMessage = 'Type a keyword and press "Enter"';
const searchPlaceholderText = 'Search here...';

describe('<RentalsSearch />', () => {
    beforeEach(() => {
        render(<RentalsSearch />);
    });
    
    it('renders a search input ', () => {
        const searchInput = screen.getByPlaceholderText(searchPlaceholderText);

        expect(searchInput).toBeInTheDocument();
    });

    it('renders a default message if no search is done', () => {
        const message = screen.getByText(defaultMessage);

        expect(message).toBeInTheDocument();
    });
});

describe('<RentalsSearch /> with provider', () => {
    let rentals: RentalsState;
    // creates an empty array and populates it with mocked data
    const rentalsData = Array(8).fill(1).map((initialValue, idx) => {
        return {
            id: initialValue + idx,
            type: 'van',
            attributes: {
                vehicle_title: `Van ${initialValue + idx}`
            },
            relationships: {} as Relationships,
        };
    });

    beforeEach(() => {
        rentals = {
            data: rentalsData,
            included: [],
            meta: {} as Meta,
            searchText: 'van',
            dispatch: jest.fn()
        };

        render(<RentalsContext.Provider value={rentals}>
            <RentalsSearch />
        </RentalsContext.Provider>);
    });

    it('renders a list of items if search results are available', () => {
        const rentalItem = screen.getByText('Van 1');
        expect(rentalItem).toBeInTheDocument();
    });

    it('renders a list of items when user has searched', () => {
        const searchInput = screen.getByPlaceholderText(searchPlaceholderText);

        fireEvent.change(searchInput, { target: { value: 'van' } });
        fireEvent.keyDown(searchInput, {
            key: 'Enter'
        });

        const rentalItem = screen.getByText('Van 1');
        expect(rentalItem).toBeInTheDocument();
    });

    it('dispatches rentals data from new search', async () => {
        const searchInput = screen.getByPlaceholderText(searchPlaceholderText);

        fireEvent.change(searchInput, { target: { value: 'van 2' } });
        fireEvent.keyDown(searchInput, {
            key: 'Enter'
        });

        await waitFor(() => {
            expect(rentals.dispatch).toHaveBeenCalled();
        });
    });
});
