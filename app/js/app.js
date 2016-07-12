var app = angular.module('buttons', ['angularSpectrumColorpicker']);

app.controller('MainCtrl', ['$scope', function($scope) {

    //Toggle Between Code & Builder
    $scope.page = 1;

    $scope.setPage = function(newTab){
      $scope.page = newTab;
    };

    $scope.pageSet = function(tabNum){
      return $scope.page === tabNum;
    };

    //Toggle Tabs
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

    //Initial values for Font and Button
    $scope.value = "Click Me!";
    $scope.fontsize = '20';
    $scope.color = '#ffffff';
    $scope.bgcolor = '#4bb4d4';
    $scope.height = '100';
    $scope.width = '3000';
    $scope.borderradius = '20';
    $scope.bordercolor = "#000000";
    $scope.fonts = ['Arial', 'Helvetica', 'Georgia', 'Courier New'];
    $scope.font = $scope.fonts[0];
    $scope.borderstyles = ['None','Solid', 'Dotted'];
    $scope.borderstyle = $scope.borderstyles[0];
    $scope.borderwidth = '0';
    $scope.textShadowX = '';
    $scope.textShadowY = '';
    $scope.textShadowColor = '';
    $scope.paddingV = '15';
    $scope.paddingH = '15';
    $scope.letterspacing = '0';

    //Toggle Font Features On & Off
    $scope.$watch('toggleItalic', function(toggleItalic) {
        $scope.italic = toggleItalic ? 'italic' : 'normal';
    });

    $scope.$watch('toggleBold', function(toggleBold) {
        $scope.bold = toggleBold ? 'bold' : 'normal';
    });

    $scope.$watch('toggleUnderline', function(toggleUnderline) {
        $scope.underline = toggleUnderline ? 'underline' : '';
    });

    $scope.$watch('toggleStrike', function(toggleStrike) {
        $scope.lineThrough = toggleStrike ? 'line-through' : '';
    })

    $scope.$watch('activated', function(a) {
        $scope.textShadowX = a ? 0 : '';
        $scope.textShadowY = a ? 0 : '';
    })

}])

