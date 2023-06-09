import React from "react";
import {render as rtlRender} from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from '../features/store';

const renderWithProviders = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);

export default renderWithProviders;