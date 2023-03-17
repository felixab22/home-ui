import App from "@components/App";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@styles/App.css'

const rootElement = document.getElementById('main');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
