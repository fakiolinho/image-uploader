angular
    .module('myApp', ['blueimp.fileupload'])
    .config(['$httpProvider', function($httpProvider) {
        // $httpProvider.defaults.transformRequest = function(data) {
        //     if (data === undefined) {
        //         return data;
        //     }
        //     return jQuery.param(data);
        // };
        //
        // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    }])
    .directive('uploader', ['$http', function($http) {
        return {
            link: link,
            templateUrl: './uploader.directive.html'
        };

        function link(scope, el, attrs) {
            scope.thumbnailUrl = null;
            scope.options = {
                maxFileSize: 5000000,
                type: "POST",
                url: 'https://upload.wistia.com?api_password=5218e005d8993be736f65a79b73329bad219771f0cbfa86ccee51bcb0acfa8d9',
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
            };

            scope.$on('fileuploaddone', function(e, data) {
                if (!data.result.error) {
                    scope.thumbnailUrl = data.result.thumbnail.url;
                }
            });
        }
    }]);
