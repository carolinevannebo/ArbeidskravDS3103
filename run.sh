#!/bin/bash

printf "const spotifyGenres=[" >> generesAsArray.txt
while read -r line
do
  printf "\"%s\"," "$line" >> generesAsArray.txt
done < genres.txt
printf "];" >> generesAsArray.txt
