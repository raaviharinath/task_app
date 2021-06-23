require 'test_helper'

class HomeController::RoutesTest < ActionController::TestCase
  def test_routes
    assert_routing '/index',   controller: "home", action: "index"
  end
end