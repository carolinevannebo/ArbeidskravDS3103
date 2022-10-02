#!/bin/bash

printf "const spotifyGenres=[" >> generes.txt
while read line
do
  printf "\"%s\"," $line >> generes.txt
done < genre.txt
printf "];" >> generes.txt
