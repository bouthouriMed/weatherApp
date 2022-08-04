import React from 'react';
import { render } from '@testing-library/react';
import CityList from './CityList'

jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return mockState;
        }),
    };
});
describe('City list', () => {
    it('Should render without crashing', () => {
        const { container } = render(<CityList />); 
        expect(container)
          .toBeDefined();
      });
})