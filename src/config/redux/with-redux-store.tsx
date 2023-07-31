import { NextComponentType } from "next";
import App from "next/app";
import { initializeStore } from "./store";
import { Provider } from "react-redux";

// Higher-Order Function for integrating Redux with Next.js
export const withRedux = (PageComponent: NextComponentType | App | any, { ssr = true } = {}) => {
    const WithRedux = ({ initialReduxState, ...props }: any) => {
        // Get or initialize the Redux store based on the provided initialReduxState.
        const store = getOrInitializeStore(initialReduxState);

        return (
            // Wrap the PageComponent with the Redux Provider to provide access to the Redux store.
            <Provider store={store}>
                <PageComponent {...props} />
            </Provider>
        )
    }

    // If server-side rendering (SSR) is enabled or the PageComponent has a getInitialProps method,
    // add a getInitialProps method to the WithRedux component.
    if (ssr || PageComponent.getInitialProps) {
        WithRedux.getInitialProps = async (context: any) => {
            // Get or initialize the Redux store.
            const reduxStore = getOrInitializeStore();

            // Attach the Redux store to the context to access it in other components.
            context.reduxStore = reduxStore;

            // Fetch the initial props of the PageComponent (if it has a getInitialProps method).
            const pageProps = typeof PageComponent.getInitialProps === "function" ? await PageComponent.getInitialProps(context) : {};

            // Return the merged page props along with the initial Redux state.
            return {
                ...pageProps,
                initialReduxState: reduxStore.getState()
            }
        }
    }

    // Return the WithRedux component with enhanced functionality.
    return WithRedux
}

// Type definition for the initial Redux state.
type initialStateType = {
    [key: string]: object
}

let reduxStore: any;

// Function to get or initialize the Redux store.
const getOrInitializeStore = (initialState: initialStateType = {}) => {
    // If the code is running on the server, initialize a new Redux store with the given initial state.
    if (typeof window === "undefined") {
        return initializeStore(initialState);
    }

    // If the code is running on the client and the Redux store hasn't been initialized yet,
    // initialize it and assign it to the reduxStore variable to ensure it's shared across the client.
    if (!reduxStore) {
        reduxStore = initializeStore(initialState);
    }

    // Return the initialized or existing Redux store.
    return reduxStore;
}