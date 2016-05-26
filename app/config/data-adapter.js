(function() {

    angular.module('shiftManager')
        .run(function(DS, DSHttpAdapter) {
            DS.registerAdapter('http', DSHttpAdapter, { default: true });
        })

} ())