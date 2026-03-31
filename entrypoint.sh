#!/bin/sh

echo "🔧 Iniciando sustitución de variables en archivos JS y HTML..."

for file in /usr/share/nginx/html/*.js /usr/share/nginx/html/*.html; do
  sed -i "s|__LOGIN__|$LOGIN|g" "$file"
  sed -i "s|__PERSONA_REGISTRO__|$PERSONA_REGISTRO|g" "$file"
  sed -i "s|__USUARIO_REGISTRAR__|$USUARIO_REGISTRAR|g" "$file"
  sed -i "s|__USUARIO_SEGUNDOFA_GENERAR__|$USUARIO_SEGUNDOFA_GENERAR|g" "$file"
  sed -i "s|__USUARIO_SEGUNDOFA_ACTIVAR__|$USUARIO_SEGUNDOFA_ACTIVAR|g" "$file"
  sed -i "s|__FEATURE_FLAG__|$FEATURE_FLAG|g" "$file"
done

echo "✅ Sustitución terminada. Arrancando Nginx..."
exec nginx -g 'daemon off;'