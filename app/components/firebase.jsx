import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
            <compliment-component>
                go you
            </compliment-component>
      </div>
    );
  }
}

var ComplimentComponent = React.createClass({
    mixins: [ReactFireMixin],
    
    getInitialState: function() {
        return {
            compliments: []
//            var randomIndex = Math.floor(Math.random() * textArray.length);
//            var randomElement = textArray[randomIndex];
//            document.getElementById("compliment-element").innerHTML = randomElement;
        };
    },
    
    componentWillMount: function() {
        var ref = new Firebase("https://compliment-time.firebaseio.com/compliments");
        this.bindAsArray(ref, "compliments");
    },
    
    render: function() {
        var compliments = this.state.compliments.map(function(compliment) {
            return (
            <li key={ compliment['.key'] }>{ compliment.name } says { compliment.value } </li>
            );
        });
        
        return (
            <ul>{ compliments }</ul>
            );
        
    }
    
});
