'use strict';

angular.module('confusionApp')

    .controller('MenuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {

        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;

        $scope.dishes = menuFactory.getDishes();

        $scope.select = function (setTab) {
            $scope.tab = setTab;

            if (setTab === 2) {
                $scope.filtText = "appetizer";
            }
            else if (setTab === 3) {
                $scope.filtText = "mains";
            }
            else if (setTab === 4) {
                $scope.filtText = "dessert";
            }
            else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };
    }])

    .controller('ContactController', ['$scope', function ($scope) {

        $scope.feedback = {mychannel: "", firstName: "", lastName: "", agree: false, email: ""};

        $scope.channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];
        $scope.invalidChannelSelection = false;

    }])

    .controller('FeedbackController', ['$scope', function ($scope) {

        $scope.sendFeedback = function () {

            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel: "", firstName: "", lastName: "", agree: false, email: ""};
                $scope.feedback.mychannel = "";
                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])

    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function ($scope, $stateParams, menuFactory) {

        $scope.dish = menuFactory.getDish(parseInt($stateParams.id, 10));

        $scope.order = "-date";
        $scope.isSingular = function (number) {
            return number == 1;
        }

    }])

    .controller('DishCommentController', ['$scope', function ($scope) {

        $scope.comment = {};
        $scope.comment.rating = 5;

        $scope.submitComment = function () {

            $scope.comment.date = new Date().toISOString();
            console.log($scope.comment);

            $scope.dish.comments.push($scope.comment);

            $scope.comment = {};
            $scope.comment.rating = 5;
            $scope.commentForm.$setPristine();
        }
    }])

    .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function ($scope, menuFactory, corporateFactory){

        $scope.featuredDish = menuFactory.getDish(0);
        $scope.leader = corporateFactory.getLeader(3);
        $scope.promotion = menuFactory.getPromotion(0);
    }])

    .controller('AboutController', ['$scope', 'corporateFactory', function ($scope, corporateFactory) {

        $scope.leaders = corporateFactory.getLeaders();
    }])
;
