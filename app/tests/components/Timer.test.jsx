var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });
    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        var $el = $(ReactDOM.findDOMNode(timer));

        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('started');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
    });
    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        var $el = $(ReactDOM.findDOMNode(timer));

        timer.setState({count: 10})
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        setTimeout(() => {
            expect(timer.state.count).toBe(10);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        }, 1001);
    });
    it('should stop timer on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        var $el = $(ReactDOM.findDOMNode(timer));

        timer.setState({count: 10})
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(() => { 
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        }, 1001)
    });
});