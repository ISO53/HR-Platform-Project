@echo off
REM Batch file to import JSON data into MongoDB

REM Export all the collections on the DB
echo Exporting all the collections on the DB...
mongodump -d TalentoDB

echo Data exported successfully!
pause
