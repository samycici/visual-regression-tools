(function(){
    angular.module('pokedex.directives',[])
    .directive('navegacao', Navegacao);

    Navegacao.$inject = ['Historico', '$rootScope', '$state'];
    function Navegacao(Historico, $rootScope, $state){
        var directive = {
            templateUrl: "src/templates/navegacao.html",
            restrict: "E",
            link: link
        }

        return directive;

        function link($scope, $element, $attrs, $controller){
            $scope.back = function(steps){
                Historico.popState(steps);
                window.history.go(steps * -1);
            }

            $scope.navegacao = Historico.getHistorico();
            $rootScope.$on('historico.changed',function(){
                $scope.navegacao = Historico.getHistorico();
            })
        }
    }

})();
