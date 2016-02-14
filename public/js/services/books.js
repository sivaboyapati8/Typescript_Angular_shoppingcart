angular.module('booksService', [])
    .factory('Books', ['$http', function ($http) {
        return {
            get: function () {
                return $http.get('/api/books');
            },
            create: function (booksData) {
                return $http.post('/api/books', booksData);
            },
            delete: function (_id) {
                return $http.delete('/api/books/' + _id);
            }
        };
    }]);
//# sourceMappingURL=books.js.map