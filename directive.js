angular.module('bowerTest', []).
directive('tInput', function() {
    return {
        restrict: 'E',
        scope: {},
        template: '<input title="Bower test" placeholder="Input bower test" >',
        link: function(scope, element, attrs) {
        }
    };
});
