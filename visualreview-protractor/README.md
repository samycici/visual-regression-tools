# VisualReview-protractor example project

Example on how to test ng-pokedex with visual regression using the VisualReview protractor API.


### Prerequisites
* Install [NodeJS](http://nodejs.org/)
* Install a [Java JRE](http://java.com/nl) (or [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html))

## Try it

First install the dependencies:

```shell
npm install
```

Install selenium server used by protractor:

```shell
node node_modules/protractor/bin/webdriver-manager update
```

Start the [VisualReview server](https://github.com/xebia/VisualReview) by downloading the [latest release](https://github.com/xebia/VisualReview/releases), extracting it and run `./start.sh`.

### Run

Now send the screenshots for the end to end test by running:

```shell
npm test
```

To see the screenshots, open the VisualReview web app ([http://localhost:7000](http://localhost:7000)).
Navigate to `myProject` -> `mySuite` and open the latest run.
