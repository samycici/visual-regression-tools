# encoding: utf-8
# !/usr/bin/env ruby

class Home < SitePrism::Page
  elements :pokemons_list, '.panel.panel-default.col-md-3.col-xs-6.ng-scope'
  load_validation { has_pokemons_list? }

end
