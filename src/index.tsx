import React from "react"
import ReactDOM from "react-dom"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

var root = document.getElementById("root");
ReactDOM.render(<App />, root)