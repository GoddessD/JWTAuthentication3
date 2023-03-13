import React, { useContext } from 'react'
import { Context } from '../store/appContext'

// Private component that can only be accessed by authenticated users
export function Private() {

    const { store, actions } = useContext(Context)
    return (
        <div>
            <h1>Welcome to the private page!</h1>
            <p>{store.currentUser ? store.currentUser : "user is not loaded yet"}</p>

            <button onClick={() => actions.getPrivate()}> Get current user </button>
        </div>
    );
}

// Higher-order component that checks if user is authenticated
// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const isAuthenticated = true; // Replace with your authentication logic
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 isAuthenticated ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect to={{ pathname: '/login' }} />
//                 )
//             }
//         />
//     );
// };

// // Route that renders the Private component only for authenticated users
// const App = () => {
//     return (
//         <div>
//             <Switch>
//                 <PrivateRoute path="/private" component={Private} />
//         // Other routes...
//             </Switch>
//         </div>
//     );
// };
