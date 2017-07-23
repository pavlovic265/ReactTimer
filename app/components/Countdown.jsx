var React = require('react');

var Clock = require('Clock');
var CountdownForm =  require('CountdownForm');
var Controls =  require('Controls');


var Countdown = React.createClass({

    getInitialState: function(){
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },

    componentDidUpdate: function(prevPrps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus){
                case 'started':
                    this.statTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                     clearInterval(this.timer);
                    break;
            }
        }
    },

    statTimer: function(){
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            newCount = newCount < 0 ? 0 : newCount;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if(newCount === 0) {
               this.setState({countdownStatus: 'stopped'}); 
            }
        }, 1000);
    },

    handleSetCountdown: function(seconds = 0){
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    handleStatusChange: function(newStatus) {
        this.setState({countdownStatus: newStatus});
    },

    componentWillUnmount : function(){
        clearInterval(this.timer);
        // console.log('componentDidUnmount');
        this.timer = null;
    },

    componentWillMount: function() {
        // console.log('componentWillMount');
    },

    componentDidMount: function() {
        // console.log('componentDidMount');
    },

    render: function(){
        var {count, countdownStatus} = this.state;

        var renderControlArea = () => {
            if(countdownStatus !== 'stopped' && count > 0) {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />
            }
        }

        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count || 0}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;