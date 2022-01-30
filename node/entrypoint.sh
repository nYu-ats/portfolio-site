#!/bin/sh

if [ ! -e '/check' ]; then
  touch /check
#   npm install -g create-react-app && create-react-app react-app
  echo "set up"
else
  echo "already set up"
fi

exec "$@"
