git add -A
git commit -am "update"
git push origin master
set output=%TEMP%\story-output
fis release -Doumpd %output%
pause