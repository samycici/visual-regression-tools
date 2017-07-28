require 'lineup'

base_name = 'base'
new_name = 'new'
resolutions = '600, 800, 1200'
images_path = '/Users/samantacicilia/Documents/Talks/visual_regression/visual-regression-tools/lineup-ruby/screenshots'
difference_path = '/Users/samantacicilia/Documents/Talks/visual_regression/visual-regression-tools/lineup-ruby/results'
json_path = '/Users/samantacicilia/Documents/Talks/visual_regression/visual-regression-tools/lineup-ruby/results'
phantomjs = true

lineup = Lineup::Screenshot.new('http://localhost:3000/#/404')
lineup.resolutions(resolutions)
lineup.filepath_for_images(images_path)
lineup.difference_path(difference_path)
lineup.use_phantomjs(phantomjs)

lineup.wait_for_asynchron_pages(5)


# lineup.record_screenshot(base_name)
# do sth. (eg. deploy new software)
lineup.record_screenshot(new_name)
lineup.compare('new', 'base')
# lineup.save_json(json_path)
