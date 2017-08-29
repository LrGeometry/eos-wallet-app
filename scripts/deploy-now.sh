#!/usr/bin/env bash

APP_NAME=staging-eos-wallet
DEPLOY_URL=eos-wallet-staging.tandem.ly

# install now
npm install -g now

# Switch to Zeit team for deploy
now switch --token $NOW_TOKEN tandemly

# deploy view now
now --token $NOW_TOKEN --public --no-clipboard --name $APP_NAME 

# get this latest deploy unique url
latest=$(now ls --token=$NOW_TOKEN $APP_NAME | awk '/ url/,EOF' | head -2 | tail -1 | awk '{ print $1 }')

echo
echo "pointing deployment for $APP_NAME: $latest to $DEPLOY_URL"

# alias new deploy to our subdomain
if [[ "$latest" != "" ]]; then
  now alias --token=$NOW_TOKEN $latest $DEPLOY_URL 
else
  echo "Unable to get latest deploy url"
  exit 1
fi