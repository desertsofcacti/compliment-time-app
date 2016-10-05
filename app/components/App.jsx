import React from 'react'
import ReactDom from 'react-dom'
import Fetch from 'react-fetch'

export default class App extends React.Component{
    
    render() {
        return (
        <Fetch url="https://compliment-time.firebaseio.com/compliments.json">
            <ComplimentComponent />
        </Fetch>
        )
    }
}

class ComplimentComponent extends React.Component{
    
    render() {
        console.log(this.props)
        return (
        <div>GO YOU</div>
        )
    }
}
