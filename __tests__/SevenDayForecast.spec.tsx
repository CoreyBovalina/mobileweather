import React from 'react';
import { shallow } from 'enzyme';

import SevenDayForecast from '../components/SevenDayForecast';

describe('SevenDayForecast', () => {
    it('renders correctly', () => {
        const appWrapper = shallow(<SevenDayForecast />);

        expect(appWrapper).not.toBeNull();
    });
});

