#!/bin/bash

mongoimport --host mongo --db TalentoDB -c User --type json --file /User.json --jsonArray
mongoimport --host mongo --db TalentoDB -c Advert --type json --file /Advert.json --jsonArray
mongoimport --host mongo --db TalentoDB -c Company --type json --file /Company.json --jsonArray