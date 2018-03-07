(function(){
    angular.module('pokedex.services',[])
        .factory('Pokemons',Pokemons)
        .factory('Historico', Historico)
        .constant('PokeapiURL','https://pokeapi.co/api/v1/');


    Pokemons.$inject = ['$http', '$q', 'PokeapiURL'];
    function Pokemons($http, $q, PokeapiURL){
        var service = {
            getAll: getAll,
            getMove: getMove,
            getAbilitie: getAbilitie,
            get: get
        }

        return service;

        function get(id){
            var defered = $q.defer();
            var url = PokeapiURL + 'pokemon/'+id;
            $http.get(url, {cache: true})
                .success(function(response){
                    var evolutions = response.evolutions;
                    var seenEvolutions = {};
                    evolutions = evolutions.filter(function(evo){
                        return seenEvolutions.hasOwnProperty(evo.to) ? false : (seenEvolutions[evo.to] = true);
                    });
                    response.evolutions = evolutions.map(buildPokemon);
                    defered.resolve(buildPokemon(response))
                })
                .error(function(){
                    defered.reject([]);
                });
            return defered.promise;
        }

        function getMove(id){
            var defered = $q.defer();
            var url = PokeapiURL + 'move/'+id;
            $http.get(url, {cache: true})
                .success(function(response){
                    defered.resolve(response)
                })
                .error(function(){
                    defered.reject([]);
                });
            return defered.promise;
        }

        function getAbilitie(id){
            var defered = $q.defer();
            var url = PokeapiURL + 'ability/'+id;
            $http.get(url, {cache: true})
                .success(function(response){
                    defered.resolve(response)
                })
                .error(function(){
                    defered.reject([]);
                });
            return defered.promise;
        }

        function buildPokemon(pokemon){
            var partes = pokemon.resource_uri.split('/');
            var id = partes[partes.length - 2];
            pokemon.id = parseInt(id);
            var name = '';
            if(!pokemon.name){
                name = pokemon.to.toLowerCase();
            }else{
                name = pokemon.name.toLowerCase();
            }
            pokemon.img = "https://img.pokemondb.net/sprites/x-y/normal/"+name+".png"
            if (pokemon.name == 'basculin-red-striped'){
              pokemon.img = "https://img.pokemondb.net/sprites/x-y/normal/basculin-red.png"
            }
            return pokemon;
        }

        function filtrarMegaPokemons(pokemon){
            return pokemon.id < 10000;
        }

        function filtrarNovosPokemons(pokemon){
            return pokemon.id < 650;
        }

        function comparatorPokemons(pokemonA, pokemonB){
            return pokemonA.id < pokemonB.id ? -1 : 1;
        }

        function getAll(){
            var defered = $q.defer();
            var url = PokeapiURL + 'pokedex/1/';
            $http.get(url, {cache: true}).success(function(response){
                var pokemons = response.pokemon;
                pokemons = pokemons.map(buildPokemon);
                pokemons = pokemons.filter(filtrarMegaPokemons);
                pokemons = pokemons.filter(filtrarNovosPokemons);
                pokemons = pokemons.sort(comparatorPokemons);
                defered.resolve(pokemons);
            }).error(function(){
                defered.reject([]);
            });
            return defered.promise;
        }
    };

    Historico.$inject = ['$rootScope'];
    function Historico($rootScope){
        var service = {
            pushState: pushState,
            popState: popState,
            getHistorico: getHistorico,
            clear: clear
        }

        var historico = [];
        if(localStorage.historico){
            historico = JSON.parse(localStorage.historico);
        }

        return service;

        function pushState(name){
            var state = window.location.hash;
            var atual = estadoAtual();
            if(!atual || atual.state !== state){
                historico.push({name: name, state: state});
                salvar();
            }
        }

        function estadoAtual(){
            return historico[historico.length-1];
        }

        function popState(steps){
            for (var i = steps; i >= 0; i--) {
                historico.pop()
            }
            salvar();
        }

        function clear(){
            historico = [];
            salvar();
        }

        function salvar(){
            localStorage.setItem('historico', JSON.stringify(historico));
            $rootScope.$emit('historico.changed');
        }

        function getHistorico(){
            return angular.copy(historico);
        }

    }
})();
