import React from 'react';
import { shallow } from 'enzyme';

import ThreeDayForecast from '../components/ThreeDayForecast';

describe('ThreeDayForecast', () => {
    it('renders correctly', () => {
        const appWrapper = shallow(<ThreeDayForecast />);

        expect(appWrapper).not.toBeNull();
    });
});

