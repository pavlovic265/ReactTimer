var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });
    describe('handleSetCountdown', () => {
        it('should call set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var $el = $(ReactDOM.findDOMNode(countdown));

            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        });
        it('should never set count less then 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var $el = $(ReactDOM.findDOMNode(countdown));

            countdown.handleSetCountdown(1);

            setTimeout(() => { 
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        });
        it('should pause countdown on pause status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var $el = $(ReactDOM.findDOMNode(countdown));

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 2000)
        });
        it('should reset the count on stopped', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            var $el = $(ReactDOM.findDOMNode(countdown));

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 2000)
        });
    });
});