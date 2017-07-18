var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109b';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    // describe('render', () => {
    //     it('should render Countdown to outout', () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    //         var $el = $(ReactDOM.findDOMNode(clock));
    //         var actualText = $el.find('.clock-text').text();
    //         var expected = '01:02';

    //         expect(actualText).toBe(expected);
    //     });
    // });

    // describe('formatSeconds', () => {
    //     it('should foramt seconds', () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock/>);
    //         var seconds = 615;
    //         var expected = '10:15';
    //         var actual = clock.formatSeconds(seconds); 
    //         expect(actual).toBe(expected);
    //     });
        
    //     it('should foramt seconds when min/sec less then 10', () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock/>);
    //         var seconds = 61;
    //         var expected = '01:01';
    //         var actual = clock.formatSeconds(seconds); 
    //         expect(actual).toBe(expected);
    //     });

    // });
});