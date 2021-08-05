import { Home } from "../pages/Home";
import { Results } from "../pages/Results";

export enum RoutePaths {
    Home = '/',
    Results = '/results',

};

export const Routes = [
    {
        name: 'Home',
        path: RoutePaths.Home,
        component: <Home />
    },
    {
        name: 'results',
        path: RoutePaths.Results,
        component: <Results />
    },
];