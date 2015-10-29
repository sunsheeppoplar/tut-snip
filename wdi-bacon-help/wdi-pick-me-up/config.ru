require 'sinatra/base'
require 'pry'

require_relative 'server'
require_relative 'module/compliments'

run ComplimentApp::Server