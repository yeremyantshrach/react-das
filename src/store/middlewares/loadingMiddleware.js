import { startLoading, stopLoading } from '../ui/actions';

const loadingMiddleware = store => next => (action) => {
    const nextAction = next(action);
    if (nextAction instanceof Promise) {
        const toggleLoading = (state) => {
            state ? store.dispatch(startLoading()) : store.dispatch(stopLoading())
        };

        toggleLoading(true);
        return (async () => {
            try {
                const resp = await nextAction;
                toggleLoading(false);
                return resp;
            } catch(e) {
                toggleLoading(false);
                throw Error(e);
            }
        })()
    }
    return nextAction;
};

export default loadingMiddleware;