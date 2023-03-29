/** You gotta use the following types for your AppContext */
/** You can add one or more properties if you need to */
type AppContextState = {
    isLoggedIn?: boolean
}

type AppContextActions = { type: 'LOGIN'; payload: AppContextState } | { type: 'LOGOUT' }

type Context = {
    state: AppContextState
    dispatch: React.Dispatch<AppContextActions>
}

/**
 * Create your AppContext and AppProvider here
 */
