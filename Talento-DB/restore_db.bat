@echo off
REM Batch file to import JSON data into MongoDB

REM Define the database name
set DATABASE_NAME=TalentoDB

REM Import all the collections on the DB with --drop option to overwrite duplicates
echo Importing all the collections on the DB and overwriting duplicates...
mongorestore -d %DATABASE_NAME% --drop dump\%DATABASE_NAME%

echo Data imported successfully!
pause