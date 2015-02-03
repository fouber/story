output=${HOME}/temp/story-output
fis release -Doumpd ${output}
qrsync ${HOME}/.story-conf.json
rm -rf ${output}