module ComplimentApp

	class Server < Sinatra::Base

		get '/' do
		@compliments = Compliments::word_list

		erb: index
		end # / route

	end # Server
end # ComplimentApp