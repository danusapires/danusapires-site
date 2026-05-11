#!/bin/bash
# Servidor local para preview do build estático.
# Double-click no Finder pra rodar.
cd "$(dirname "$0")/dist" || exit 1
echo "Servindo dist/ em http://localhost:4321"
python3 -m http.server 4321
