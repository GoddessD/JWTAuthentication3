import React, { useContext } from 'react'
import { Context } from '../store/appContext'


// Private component that can only be accessed by authenticated users
export function Private() {

    const { store, actions } = useContext(Context)
    console.log(store.characters, "These are the Characters.")
    return (
        <div>
            <h1 className="Private bold">Welcome to the Private Page!</h1>
            <p>{store.currentUser ? store.currentUser : "user is not loaded yet"}</p>
            <img src="https://loremflickr.com/320/240/starwars/all"></img>
            <p><italic> Welcome, private members, to the Star Wars universe!
                Here, you can create your own favorite group of characters, vehicles,
                and planets for epic quests against other members.
                Whether you're a Jedi Knight or a Sith Lord, a smuggler or a bounty hunter,
                the galaxy is yours to explore and conquer. Build your own team of rebels,
                command your own fleet of starships, and discover new worlds in your quest for dominance.
                May the Force be with you!</italic></p>
            {/* <button onClick={() => actions.getPrivate()}> Get current user </button> */}
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
