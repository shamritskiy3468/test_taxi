class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  def index
    now_user_id = current_user.id
    @trips = Trip.all.where("user_id = #{now_user_id}")
  end

  def show
  end

  def new
    @trip = Trip.new
  end

  def edit
  end

  def create
    binding.pry
    @trip = Trip.new(trip_params) 
    respond_to do |format|
      if @trip.save
        format.html { redirect_to @trip, notice: 'Place was successfully created.' }
        format.json { render :show, status: :created, location: @trip }
      else
        format.html { render :new }
        format.json { render json: @trip.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @trip.update(trip_params)
        format.html { redirect_to @place, notice: 'Place was successfully updated.' }
        format.json { render :show, status: :ok, location: @trip }
      else
        format.html { render :edit }
        format.json { render json: @trip.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @trip.destroy
    respond_to do |format|
      format.html { redirect_to trips_url, notice: 'Place was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:car_id, :driver_id, :name, :user_id, place_attributes: [:latitude, :longitude], destination_attributes: [:latitude, :longitude])
    end
end
