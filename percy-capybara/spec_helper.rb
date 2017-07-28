require 'capybara'
require 'capybara/rspec'
require 'percy/capybara'

RSpec.configure do |config|
    config.include Capybara::DSL
    config.before(:suite) do
        Capybara.register_driver :selenium do |app|
            Capybara::Selenium::Driver.new(app, browser: :chrome)
        end
        Percy::Capybara.initialize_build
    end
    config.after(:suite) { Percy::Capybara.finalize_build }
end
