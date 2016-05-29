(function () {
    angular.module('shiftManager')
        .component('alertsComponent', {
            templateUrl: 'app/components/alerts/alerts-component.html',
            controller: AlertController,
        })

    function AlertController() {
        var ac = this;
        // var bookstoreRef = new Firebase('https://favs15.firebaseio.com/books');
        // bs.store = $firebaseArray(bookstoreRef);

        ac.addAlert = function (alert) {
            ac.alerts.$add(alert)
            ac.newAlert = ""
        }
        ac.removeAlert = function (alert) {
            ac.alerts.$remove(alert)
        }
        
        ac.changeRating = function(alert){
            ac.alerts.$save(alert)
        }
    }
} ())