require 'sinatra'

module ComplimentApp

	class Server < Sinatra::Base

		get '/' do
			erb :index
		end # index route

		get '/next-a-name/:name/then-a-number/:number' do
			@compliments = Compliments::WORD_LIST
			@name = params[:name]
			@number = params[:number]

			erb :porkymessage
		end # custom route

	end # Server
end # ComplimentApp