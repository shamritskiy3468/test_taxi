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
	
	def mail_user_with_information
		ContactMailer.contact_mail(current_user.email).deliver
	end
end
