import React from 'react';
import './styles/index.css';
import App from './comp/App';
import { createRoot } from 'react-dom/client';
import { MissionProvider } from './ctxt/mission';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <MissionProvider>
      <App />
    </MissionProvider>
);
