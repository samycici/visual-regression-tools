When(/^I enter in Home$/) do
  @home = Home.new
  @home.visit(CONFIG['home'])
end

Then(/^I see a list of Pokemons$/) do
  @home.wait_until_pokemons_list_visible(20)
  Helper.new.take_screenshot('Pokemons_list_actual', 'screenshots/current_images/')
  expect('Pokemons_list_actual').to visual_match('Pokemons_list')
end
