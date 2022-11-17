install vscode extension "@"Path Autocomplete"
v1.22.1
Mihai Vilcu

press f1, type "open settings (JSON)", add:

"path-autocomplete.pathMappings": {
"@img": "${folder}/src/img",
"@scss": "${folder}/src/scss",
"@js": "${folder}/src/js"
}

После скачивания архива, оставить папки:
gulp
src
gulpfile.js
package.json
.prettierrc
ReadMe.md

npm i
