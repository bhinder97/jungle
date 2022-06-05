class Admin::DashboardController < ApplicationController

  name = ENV['NAME']
  password = ENV['PASSWORD']

  http_basic_authenticate_with :name => "user", :password => "password"

  def show
  end
end