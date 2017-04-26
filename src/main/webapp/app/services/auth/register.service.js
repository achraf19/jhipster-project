(function () {
    'use strict';

    angular
        .module('jhipsterprojectApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
