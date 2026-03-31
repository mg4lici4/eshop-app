#!/bin/sh

# Sustituir variables en todos los archivos JS generados por Angular
for file in /usr/share/nginx/html/*.js; do
  envsubst '$LOGIN $PERSONA_REGISTRO $USUARIO_REGISTRAR $USUARIO_SEGUNDOFA_GENERAR $USUARIO_SEGUNDOFA_ACTIVAR $FEATURE_FLAG' \
    < "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

exec nginx -g 'daemon off;'