var Counter = React.createClass({
    componentWillMount: function() {
        console.log('Inint state before first render');
        },
    
    componentDidMount: function() {
        console.log('Query to API');
    },
    componentWillReceiveProps: function() {
        console.log('Counting after update but befor render');
    },

    shouldComponentUpdate: function() {
        console.log('Optimalization, return value and only if boolean is true goes to next one');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Preparing to next state and return only then');
    },

    componentDidUpdate: function() {
        console.log('Using on DOM');
    },

    componentWillUnmount: function() {
        console.log('Delete some options as timers or listener');
    }, 
    
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    render: function() {
        return (React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Plus'),
            React.createElement('button', {onClick: this.decrement}, 'Minus'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        ));
    },
    
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
);

ReactDOM.render(element, document.getElementById('app'));