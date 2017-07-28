/**
 * Created by Samy
 */
var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey(YOUR_API_KEY);


describe('Pokedex Homepage', function() {
    it('test pokemons scenaries', function() {
        eyes.open(browser.driver, "JavaScript SDK", "Simple Protractor Test");
        browser.get('http://localhost:3000/#/pokemons');
        eyes.checkWindow("List All Pokemons");
        element(by.id('busca')).sendKeys("pikachu");
        eyes.checkWindow("Search Pikachu");
        element(by.css('.btn-primary')).click();
        eyes.checkWindow("Pikachu Details");
        expect(element(by.css('.ng-binding')).getText()).toContain('Pikachu');

        eyes.close(false).then(function (res) {
            console.log(res); //Printing test results
        });
    });
});
