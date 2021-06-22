class HomeController < ApplicationController

	skip_before_action :verify_authenticity_token
  
  def index
  end


  def create
    respond_to do |format|
      message_text = "You just submitted the form - the color of the box was #{params[:color]}"
      format.turbo_stream { render turbo_stream: turbo_stream.replace('message', { partial: "message", locals: { message: message_text} }) }
    end
  end

end
