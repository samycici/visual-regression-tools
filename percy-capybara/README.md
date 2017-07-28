# Percy-capybara example project

Example on how to test ng-pokedex with visual regression using the Percy Capybara API.


### Prerequisites
* Create a trial account in [Percy site](https://percy.io/)
* Install [Ruby](https://www.ruby-lang.org/pt/)
* Install bundler
```shell
gem install bundler
```
* Create a organization and project
* Export your PERCY_TOKEN and PERCY_PROJECT


## Try it

First install the dependencies:

```shell
bundle install
```

### Run

Now send the screenshots for the end to end test by running:

```shell
rspec visual_tests.rb
```

To see the screenshots, open the Percy web app.
Navigate to your list of tests and open the latest run.
