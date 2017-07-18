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
    });
    // it('should not call onSetCountdown if invalid seconds entered', () => {
    //     var spy = expect.createSpy();
    //     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    //     var $el = $(ReactDOM.findDOMNode(countdownForm));

    //     countdownForm.refs.seconds.value = '109b';

    //     TestUtils.Simulate.submit($el.find('form')[0]);

    //     expect(spy).toNotHaveBeenCalled();
    // });
});