class ContactMailer < ApplicationMailer
	default from: "shamritskiy3468@gmail.com"
	
	def contact_mail(user)
    @user = user
    mail(:to => user.email,
         :subject => "The new account #{user.name} is active and this is TEST.")
  end
end