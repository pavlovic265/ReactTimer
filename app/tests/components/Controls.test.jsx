var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pausedButton = $el.find('button:contains(Pause)');

            expect($pausedButton.length).toBe(1);
        });
        it('should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls))
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });

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