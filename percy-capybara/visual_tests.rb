require_relative 'spec_helper'

describe 'Pokedex Visual Tests', type: :feature, js: true do
    it 'view a list of all pokemons' do
        visit 'http://localhost:3000/#/pokemons'
        expect(page).to have_selector('.infos-container', visible: true)

        Percy::Capybara.snapshot(page, name: 'homepage with dropdown')
    end
    it 'view a 404 Page' do
        visit 'http://localhost:3000/#/teste'
        expect(page).to have_css('h1.text-center', text: 'PAGE NOT FOUND')

        Percy::Capybara.snapshot(page, name: 'page 404')
    end

    it 'search Pikachu' do
        visit 'http://localhost:3000/#/pokemons'
        expect(page).to have_selector('.infos-container', visible: true)
        find('#busca').set('pikachu')

        Percy::Capybara.snapshot(page, name: 'pikachu search')
    end

    it 'see Pikachu details' do
        visit 'http://localhost:3000/#/pokemons'
        expect(page).to have_selector('.infos-container', visible: true)
        find('#busca').set('pikachu')
        click_link 'See details'
        expect(page).to have_content('Name: Pikachu')

        Percy::Capybara.snapshot(page, name: 'pikachu details')
    end

    it 'search Pikachu responsive' do
        visit 'http://localhost:3000/#/pokemons'
        expect(page).to have_selector('.infos-container', visible: true)
        find('#busca').set('pikachu')


        Percy::Capybara.snapshot(page, name: 'pikachu details responsive',  widths: [375, 1280])
    end
end
