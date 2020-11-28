import UniversalRouter, { Route } from 'universal-router';
import { AppState } from '../types';

/**
 * Creates a new router with handling for async routes with `load() => import()` function.
 * Imported modules should export a single `async action` function.
 */
export default (routes: Route[], store: AppState) =>
  new UniversalRouter(routes, {
    context: { store },
    resolveRoute: (context: any, params: any) => {
      if (typeof context.route.load === 'function') {
        return context.route.load().then((action: any) => action.default(context, params));
      }
      if (typeof context.route.action === 'function') {
        return context.route.action(context, params);
      }
    },
  });
