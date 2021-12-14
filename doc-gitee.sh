#!/bin/env bash

rm -rf dist doc &&
yarn doc &&
cd doc &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:mairuihong/paddy-ui-website.git &&
git push -f -u origin master &&
cd -