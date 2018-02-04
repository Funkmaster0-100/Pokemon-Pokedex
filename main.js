$(function () {
    var pokemonSearch;
    var defaultPokemon = '7';
    var defaultPokemonData;

    var initFunc = function () {
        defaultPokemonData = $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + defaultPokemon,
            method: 'GET',
        })
        defaultPokemonData.done(function (data) {
            defaultPokemonData = data
            $('.pokedex h3').text(data.name.toUpperCase())
            $('.poke-img img').attr('src', data.sprites.front_default)
            console.log(defaultPokemonData)
        })
        defaultPokemonData.fail(function (jqXHR, textStatus, error) {
            console.log('Request Failed' + textStatus + '' + error)
        })
    }
    initFunc()

    $('.btn').on('click', function () {
        pokemonSearch = $('.pokedex input[type = "text"]').val()
        var request = $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonSearch,
            method: 'GET'
        })
        request.done(function (data) {
            $('.pokedex h3').text(data.name.toUpperCase())
            $('.poke-img img').attr('src', data.sprites.front_default)
            console.log(data)
        })
        request.fail(function (jqXHR, textStatus, error) {
            console.log('Request Failed' + textStatus + '' + error)
        })
    })
})
