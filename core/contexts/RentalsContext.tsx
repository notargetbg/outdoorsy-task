import React, { createContext, useContext, useReducer } from 'react';
import { RentalsResponse, SearchActionType } from '../types/Types';

export interface RentalsState extends RentalsResponse {
  searchText: string;
  dispatch?: React.Dispatch<RentalsAction>;
}

type RentalsAction =
  { type: SearchActionType.Added, records: RentalsResponse, searchText: string }
  | { type: SearchActionType.New, records: RentalsResponse, searchText: string };

const initialSearchText = {
  searchText: '',
};

const initialRentals: RentalsResponse = {
  data: [],
  included: [],
  meta: {
    total: 0,
    start_position: 0,
    stop_position: 0
  },
};

const initialState = {
  ...initialRentals,
  ...initialSearchText
};

export const RentalsContext = createContext<RentalsState>(initialState);

export function RentalsProvider({ children }: { children: React.ReactNode }) {
  const [rentals, dispatch] = useReducer(
    rentalsReducer,
    initialState
  );

  // set the provider value and add dispatch in order to use it easily across the components
  return (
    <RentalsContext.Provider value={{
      ...rentals,
      dispatch
    }}>
      {children}
    </RentalsContext.Provider>
  );
}

export function useRentals() {
  return useContext(RentalsContext);
}

function rentalsReducer(state: RentalsResponse, action: RentalsAction) {
  switch (action.type) {
    case SearchActionType.Added: {
      const data = action.records.data || [];
      const included = action.records.included || [];

      return {
        data: [...state.data, ...data],
        included: [...state.included, ...included],
        meta: action.records.meta,
        searchText: action.searchText
      };
    }
    case SearchActionType.New: {
      return {
        ...state,
        ...action.records,
        searchText: action.searchText
      };
    }
    default: {
      throw Error('Unknown action: ' + (action as RentalsAction).type);
    }
  }
}
