angular
    .module('myApp', ['blueimp.fileupload'])
    .directive('uploader', function() {
        return {
            controller: uploaderController,
            templateUrl: './uploader.directive.html'
        };

        uploaderController.$inject = ['$scope'];

        function uploaderController($scope) {
            $scope.thumbnailUrl = null;
            $scope.options = {
                maxFileSize: 5000000,
                type: "POST",
                url: 'https://upload.wistia.com?api_password=5218e005d8993be736f65a79b73329bad219771f0cbfa86ccee51bcb0acfa8d9',
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
            };

            $scope.$on('fileuploaddone', function(e, data) {
                if (!data.result.error) {
                    $scope.thumbnailUrl = data.result.thumbnail.url;
                }
            });
        }
    });
