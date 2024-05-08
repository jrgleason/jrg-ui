#!/bin/bash
npm i
npm run build
scp -r /Users/jackiegleason/Code/personal/jrg-ui/build/* jackie@10.0.0.11:/home/jackie/site
