require 'sinatra/base'
require 'pry'

require_relative 'server'
require_relative 'modules/compliments'

run ComplimentApp::Server