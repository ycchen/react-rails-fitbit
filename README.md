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

 http://localhost:3000/#access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2UFg1UkgiLCJhdWQiOiIyMkNaVEMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTI5ODUyMDU0LCJpYXQiOjE1MjkyNDczNjl9.CILT1JLxRykRfn_rr10KHKBIkMUQFO1cRJD4JljSm6Q
 &user_id=6PX5RH
 &scope=location+heartrate+sleep+nutrition+social+weight+activity+settings+profile
 &token_type=Bearer
 &expires_in=604685

# inside of browser console
  window.location.hash.slice(1).split("&")[0]
 =>
 "access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2UFg1UkgiLCJhdWQiOiIyMkNaVEMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTI5ODUyMDU0LCJpYXQiOjE1MjkyNDczNjl9.CILT1JLxRykRfn_rr10KHKBIkMUQFO1cRJD4JljSm6Q"
 window.location.hash.slice(1).split("&")[0].replace("access_token=","")
 =>
 "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2UFg1UkgiLCJhdWQiOiIyMkNaVEMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTI5ODUyMDU0LCJpYXQiOjE1MjkyNDczNjl9.CILT1JLxRykRfn_rr10KHKBIkMUQFO1cRJD4JljSm6Q"
```