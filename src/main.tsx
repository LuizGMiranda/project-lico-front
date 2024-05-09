import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import Team from './views/Team';
import Home from './views/Home';
import Player from './views/Player';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teams",
    element: <Team />,
  },
  {
    path: "/players",
    element: <Player />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  // </React.StrictMode>,
)
