import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes.jsx';
import './styles/globals.css';

// vite-react-ssg entry. It internally wraps the route tree in a HelmetProvider
// and a RouterProvider, then prerenders each route to static HTML (collecting
// the <Head> tags into the document head). `createRoot` drives both the SSG
// build and client hydration.
export const createRoot = ViteReactSSG({ routes });
