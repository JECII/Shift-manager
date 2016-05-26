(function () {
    angular.module('shiftManager')
        .component('addStaffComponent', {
            templateUrl: 'app/components/add-staff/add-staff.html',
            controller: AddStaffController,
        })
        
        function AddStaffController(){
            
            var asc = this;
            
            asc.test = "hi from add staff controller"
            
        }
} ())