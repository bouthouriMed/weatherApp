import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CityItem from './CityItem'
import store from '../redux/configureStore'


describe('City Item', () => {
    const defaultProps = {
        city: {
            cityName: 'London'
        }
    }

    it('Should render without crashing', () => {
        const { container } = render(<Provider store={store}><CityItem {...defaultProps} /></Provider>); 
        expect(container)
          .toBeDefined();
      });
})