set output=%TEMP%\story-output
qrsync %CHONGZI_HOME%\.story-conf.json
rd /s /q %output%
pause