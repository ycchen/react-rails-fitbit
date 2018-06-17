# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

rails new reactfit --webpack=react
./bin/webpacker-dev-server

app/javascript/packs/hello_react.jsx

app/views/home/home.html.erb
<%= javascript_pack_tag 'hello_react' %>

app/javascript/packs/dashboard.jsx

app/views/root/index.html.erb
<%= javascript_pack_tag 'dashboard' %>

* Add bootstrap and axios using yarn
```ruby
yarn add bootstrap
yarn add axios

# after import bootstrap.css, add stylesheet to root/index.html.erb
# app/views/root/index.html.erb
<%= javascript_pack_tag 'dashboard' %>
<%= stylesheet_pack_tag 'dashboard' %>

```

* Add Fitbit auth by created an account with Fitbit.com and enable developer API
```ruby
 # Make sure the OAuth 2.0 Application Type set to "Client"
 # Use OAuth 2.0 tutorial page to generate authorization URL for you
 -- Flow type: Implicit Grant Flow
 
```