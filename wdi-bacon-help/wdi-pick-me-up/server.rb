module ComplimentApp

	class Server < Sinatra::Base

		get '/' do
		@compliments = Compliments::WORD_LIST

		erb :index
		end # / route

	end # Server
end # ComplimentApp