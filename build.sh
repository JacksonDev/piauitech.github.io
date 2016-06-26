#!/bin/sh

echo "\033[1;33m What have you done to the site?\033[0m"
read update

npm run bundle
git commit -am "Create new bundle"

TMP_DIR=/tmp/saito-tempo-piaui
mkdir $TMP_DIR
cp ./src/bundle.js $TMP_DIR
cp ./src/index.html $TMP_DIR

git checkout master

git rm -rf *
mv $TMP_DIR/**/* ./ -f
git add --all
git commit -m "$update"
echo "\033[1;31mPushing new site to GitHub repo\n\033[0m"
git push origin master
git checkout develop

rm -rf $TMP_DIR
