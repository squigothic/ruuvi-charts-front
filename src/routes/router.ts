import UniversalRouter, { Route } from 'universal-router';
import { ErrorReporter } from '../types/types';

export interface LazyRoute extends Route {
  load?: () => Promise<any>;
  children?: LazyRoute[];
}

// rollbar reporter logs to console in dev/browser
export const logger = {
  debug: console.debug,
  log: console.log,
  info: console.info,
  warning: console.warn,
  error: console.error,
  critical: console.error,
};

/**
 * Creates a new router with handling for async routes with `load() => import()` function.
 * Imported modules should export a single `async action` function.
 */
export default (routes: LazyRoute | LazyRoute[], reporter: ErrorReporter = logger) =>
  new UniversalRouter(routes, {
    context: { reporter },
    resolveRoute: (context: any, params: any) => {
      if (typeof context.route.load === 'function') {
        return context.route.load().then((action: any) => action.default(context, params));
      }
      if (typeof context.route.action === 'function') {
        return context.route.action(context, params);
      }
    },
  });
