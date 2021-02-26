import React from 'react'

//const App = () => {
//    return (
//        <div>
//            <h1>Hello from App Component!</h1>
//        </div>
//    );
//};
    
    class App extends React{
    constructor(props) {
        super(props);
        
        this.state = {
            chirps: [
                {
                    name: "Sir",
                    message: "Words"
                },
                {
                    name: "Chris",
                    message: "Evvvvvvven more words"
                },
                {
                    name: "maliek",
                    message: " Too many words at this point its getting wild"
                }
            ]
        }
    }

    render() {
        return this.state.chirps.map(chirps => {
            return (
                <>
                    <h1>{chirps.name}</h1>
                    <p> {chirps.message}</p>
                </>
            )
        })
        
    }
}

export default App;