import React from 'react';

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
        var compliments = this.state.compliments.map(function(compliments) {
            return (
            <li key={ compliments['.key'] }>{ compliments.name } says { compliments.value } </li>
            );
        });
        
        return (<ul>{ compliments }</ul>
        
    );
    }
    
});