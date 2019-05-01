class PagesController < ApplicationController
	before_action :authenticate_user!, only: :contact

  def about
  end

  def index
  end

  def contact
  end

  def home
  end
end
