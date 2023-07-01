import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import {store} from "../../store";

function renderWithProvider(component: React.ReactElement) {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
}

export default renderWithProvider;