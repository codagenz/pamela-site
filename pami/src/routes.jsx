import App from './App.jsx';
import Home from './pages/Home.jsx';
import PamiWorld from './pages/PamiWorld.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import NotFound from './pages/NotFound.jsx';

// Route table shared by the client router and vite-react-ssg's crawler.
// Every concrete path here is prerendered to its own static HTML file.
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pami-world', element: <PamiWorld /> },
      { path: 'pami-glow', element: <CollectionPage slug="pami-glow" /> },
      { path: 'pami-style', element: <CollectionPage slug="pami-style" /> },
      { path: 'pami-corner', element: <CollectionPage slug="pami-corner" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
