require 'rack'
require 'erb'

class App
  def call env
    [200, {'Content-Type' => 'text/html'}, [template]]
  end

  private

  def template
    ERB.new(File.read("index.html.erb")).result(binding)
  end
end

use Rack::Static, urls: {"/offendatron.js" => "offendatron.js"}

run App.new
