require 'sinatra'

get '/about' do 
	erb :about
end

get '/flyer' do 
	erb :flyer
end

get '/home' do 
	erb :home
end

get '/recipes' do 
	erb :recipes
end