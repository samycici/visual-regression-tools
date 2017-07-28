/**
 * Created by Samy
 */
var vr = browser.params.visualreview;


describe('Pokedex Homepage', function() {

    beforeAll(function() {
        browser.manage().window().setSize(1200, 2000);
    });
    it('test pokemons scenaries', function() {
        browser.get('http://localhost:3000/#/pokemons');
        vr.takeScreenshot('Pokedex-Homepage');
        element(by.id('busca')).sendKeys("pikachu");
        vr.takeScreenshot('Search-Pikachu');
        element(by.css('.btn-primary')).click();
        vr.takeScreenshot('Pikachu-Details');
        expect(element(by.css('.ng-binding')).getText()).toContain('Pikachu');
    });
});
