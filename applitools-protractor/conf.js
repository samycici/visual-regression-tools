exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    ignoreUncaughtExceptions: true,
    restartBrowserBetweenTests: false,
    specs: ['pokedex_visual_test.js'],
    allScriptsTimeout: 10000,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions']
        }

    },
    beforeLaunch: function() {
        setTimeout(function() {
            browser.driver.executeScript(function() {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then(function(result) {
                browser.driver.manage().window().setSize(result.width, result.height);
            });
        });

    },

    onPrepare: function() {
        browser.ignoreSynchronization = false;
    },


}
