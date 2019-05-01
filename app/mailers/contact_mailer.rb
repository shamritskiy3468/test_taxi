class ContactMailer < ApplicationMailer
	before_action :authenticate_user!
	
	def contact_mail(contact_data)
		mail(to: "shamritskiy3468@gmail.com", subject: 'Welcome to My Awesome Site')
	end
end
