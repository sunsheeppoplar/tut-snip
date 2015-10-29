module ComplimentApp

	class Server < Sinatra::Base

		get '/next-a-name/:name/then-a-number/:number' do
		@compliments = Compliments::WORD_LIST
		@name = params[:name]
		@number = params[:number]

		erb :index
		end # route

	end # Server
end # ComplimentApp