Comandos utlizados en prueba 2 (testapp)

ionic start testapp blank --type=angular
npm install cordova-sqlite-storage
npm install @awesome-cordova-plugins/sqlite **(instalar)**
ionic g page pages/login
ionic g page pages/principal
ionic g page pages/crearusuario
ionic g service services/api
ionic cap sync
npm install @capacitor/android **(instalar)** / (para iniciar ejecutar ionic cap open android para build de gradle) **ejecutar**
npx cap add android
ionic g page pages/splash
ionic g page pages/perfil
ionic g page pages/contrasena
npm install @capacitor/assets@latest --save-dev
npx capacitor-assets generate
ionic cap run android --livereload --host=ip de tu pc
tener modo desarrollador habilitado en telefono y instalacion de aplicaciones por usb
