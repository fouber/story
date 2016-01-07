git add -A
git commit -am "update"
git push
set output=%TEMP%\story-output
fis release -Doumpd %output%
pause