#!/bin/sh

echo "🔧 Iniciando sustitución de variables en archivos JS y HTML..."

for file in /usr/share/nginx/html/*.js /usr/share/nginx/html/*.html; do
  echo "Procesando $file..."
  envsubst < "$file" > "$file.tmp"
  mv "$file.tmp" "$file"
done

echo "✅ Sustitución terminada. Arrancando Nginx..."
exec nginx -g 'daemon off;'