## How I set up Starter project

## rails setup (back-end)
```
$ rails new quarantine-backyard-app -d postgresql --api
$ cd quarantine-backyard-app
$ rails db:create
```

## add gems
gems third party libraries that do stuff 
- pry-rails => help debug
- devise-token-auth => help with auth on the backend

> NOTE: to add a gem add it to the gemfile, then run bundle to install gem

## devise_token_auth setup
1. add gem to gemfile
```

# using this in our gemfile (might want to use version <6.2 of rails>)
gem 'devise_token_auth', '>= 1.2.0' , git "https://github.com/lynndylanhurley/devise_token_auth"
```

2. create a model 
```
#  this creates a devise 'User' model and some routes
rails g devise_token_auth:install User api/auth
```
3. add extends in model
```
class User < ActiveRecord::Base
extend Devise::Models
...
```

4. add columns to our User via a migration 
```
# this creates a migration file called add_trackable_to_users
rails g migration add_trackable_to_users
```
```
rails db:migrate
```
## front-end setup

in rails project create react-app 
```
yarn create react-app client
```
## add third party libraries

## add proxy
## add Folder structure
```
mkdir src/components
mkdir src/providers
mkir src/hooks
mkdir src/components/auth
mkdir src/components/shared
```
## React router setup

- add routes to index.js/app.js
- index js wrap with browserRouter
- create navbar
