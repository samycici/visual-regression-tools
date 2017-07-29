require 'lineup'

base_name = 'base'
new_name = 'new'
resolutions = '600, 800, 1200'
images_path = File.join(File.dirname(__FILE__), 'screenshots')
difference_path = File.join(File.dirname(__FILE__), 'results')
phantomjs = true

lineup = Lineup::Screenshot.new('http://localhost:3000/#/404')
lineup.resolutions(resolutions)
lineup.filepath_for_images(images_path)
lineup.difference_path(difference_path)
lineup.use_phantomjs(phantomjs)

lineup.wait_for_asynchron_pages(5)


# lineup.record_screenshot(base_name)
lineup.record_screenshot(new_name)
lineup.compare('new', 'base')
