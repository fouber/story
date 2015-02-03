output=~/temp/story-output
rm -rf ${output}
fis release -Doumpd ${output}
qrsync ~/.story-conf.json