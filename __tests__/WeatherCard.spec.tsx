import React from 'react';
import { shallow } from 'enzyme';

import WeatherCard from '../components/WeatherCard';

describe('WeatherCard', () => {
    it('renders correctly', () => {
        const appWrapper = shallow(<WeatherCard item={null} index={null}/>);

        expect(appWrapper).not.toBeNull();
    });
});

