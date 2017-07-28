(function(){
    var app = angular.module('pokedex',[
        'pokedex.controllers',
        'pokedex.services',
        'pokedex.directives',
        'ui.bootstrap',
        'ui.router'
    ]);

    app.config(RouterConfiguration);

    RouterConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfiguration($stateProvider, $urlRouterProvider){
         $stateProvider.state('pokemons', {
            url: "/pokemons",
            templateUrl: "src/templates/pokemons.html",
            controller: 'PokemonsController'
        });

         $stateProvider.state('pokemon', {
            url: "/pokemon/:id",
            views: {
                '' :{
                    templateUrl: "src/templates/pokemon.html",
                    controller: 'PokemonDetailController'
                },
                'evo@pokemon':{
                    templateUrl: "src/templates/evo.html"
                },
                'moves@pokemon':{
                    templateUrl: "src/templates/moves.html",
                    controller: 'MovesController'
                },
                'abilities@pokemon':{
                    templateUrl: "src/templates/abilities.html",
                    controller: 'AbilitiesController'
                }
            }
        });
        $stateProvider.state('404', {
           url: "/404",
           templateUrl: "src/templates/404.html"
       });

         $urlRouterProvider.otherwise("/404");
    }

})();
