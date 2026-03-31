#!/bin/sh

# Sustituir variables en todos los archivos JS generados por Angular
for file in /usr/share/nginx/html/*.js; do
  envsubst < "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

exec nginx -g 'daemon off;'