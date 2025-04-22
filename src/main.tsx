import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Router';
import { RouterProvider } from "react-router"

createRoot(document.getElementById('root') || document.body)
    .render(<RouterProvider router={Routes} />);
