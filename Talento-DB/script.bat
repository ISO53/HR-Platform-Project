@echo off
REM Batch file to import JSON data into MongoDB

REM Set MongoDB host
SET HOST=mongo

REM Set database name
SET DB=TalentoDB

REM Import User collection
echo Importing User collection...
mongoimport --db %DB% --collection user --file User.json --jsonArray
IF %ERRORLEVEL% NEQ 0 (
    echo Failed to import User collection
    exit /b %ERRORLEVEL%
)

REM Import Advert collection
echo Importing Advert collection...
mongoimport --db %DB% --collection advert --file Advert.json --jsonArray
IF %ERRORLEVEL% NEQ 0 (
    echo Failed to import Advert collection
    exit /b %ERRORLEVEL%
)

REM Import Company collection
echo Importing Company collection...
mongoimport --db %DB% --collection company --file Company.json --jsonArray
IF %ERRORLEVEL% NEQ 0 (
    echo Failed to import Company collection
    exit /b %ERRORLEVEL%
)

echo Data import completed successfully!
pause
