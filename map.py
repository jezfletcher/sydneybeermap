import os.path
import webapp2
import jinja2

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates')))

class MapPage(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/html'
    template_values = { }
    template = jinja_environment.get_template('map.html')
    self.response.out.write(template.render(template_values))

class AboutPage(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/html'
    template_values = {}
    template = jinja_environment.get_template('about.html')
    self.response.out.write(template.render(template_values))

app = webapp2.WSGIApplication([('/about', AboutPage),
                               ('/.*', MapPage)],
                              debug=True)
