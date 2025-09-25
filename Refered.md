<!-- 
NodeJS Version: v22.14.0
Yarn Version: 4.7.0
 -->

<!-- if older yarn version exists -->
npm uninstall -g yarn
rd /s /q %LOCALAPPDATA%\Yarn
corepack disable

<!-- Install latest yarn (Run from admin cmd)-->
npm install -g corepack
corepack enable
yarn --version

<!-- Create React TS Project -->
yarn create vite admin-panel --template react-ts
cd admin-panel

<!-- If you prefer node_modules instead of PnP (Plug’n’Play), run: -->
yarn config set nodeLinker node-modules


<!-- Install dependancies -->
yarn install

<!-- Adding Router 7 -->
yarn add react-router-dom

<!-- useNavigateStable -->
yarn add -D @types/react-router-dom

<!-- Install Tailwind CSS -->
yarn add tailwindcss @tailwindcss/vite
NB: Modify vite.config.ts

<!-- Toast Provider -->
yarn add react-hot-toast

<!-- React icons and lucide-react -->
yarn add lucide-react react-icons

