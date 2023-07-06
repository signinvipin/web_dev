Parcel Workflow Steps and Settings:

>create folder - parcelFolder
>open bash terminal cd to parcelFolder
>initialize folder as npm package $ npm init -y
>created a package.json with 'main':"index.js" entry
>install parcel in project: $ npm i -D parcel
>-D stands for devDependency
>create source folder for files for app: $ mkdir src
>create file index.html and put html5 template in it
>edit index.html to use it
>start parcel development server: $ npx parcel src/index.html
>add scripts to use npm to package.json: "start": "parcel src/index.html","build": "parcel build src/index.html"
>Now start dev server: $ npm start
>after it starts, click on localhost address to launch site/index.html in default browser
>Add 'watch' flag to script to automatically rebuild app as we make changes and it also supports hot reloading: "start":"parcel watch src/index.html"
>restart the server, 'ctrl+c' then : $ npm start
>A problem is noticed: output file path doesn't match bundle type "html"
>Remove "main":"index.js" from package.json, then save to omplete the build.
>we can restart the server: $ npm start
>parcel executes files in dist folder(contains parcel bundle)
>goto $ cd src
>create file in src folder: touch main.js
>create file: touch style.css
>add content to them and link css and add script to index.html and save the changes to see effect in browser
>parcel cache everything in .parcel-cache folder, if we restart the dev server parcel will only rebuild files that has new changes. 
> add .parcel-cache to .gitignore
>then push repo to github

code splitting
>add file about.js,
> add code to it : console.log('send export');, 
> import about.js in main.js: import('./about.js').then((page)=>page.render());
> this will check if file is available, and if not, it will move on to next code, in the process of importing it will remove unused export from that module to reduce size.

CREATE React app using parcel
>Create directory: $ mkdir parcel_react
> cd into parcel_react
>initialize folder as npm package: $ npm init -y
>(?why using -y)
> creates package.json with "main":"index.js"
>install $ npm i react react-dom
>install parcel $ npm i -D parcel
>create folder 'src' inside it create files: App.js, index.js, index.html
> add html5 template snippet to index.html 
>add title, add body as react app uses a div tag to put all javascript code:<div id="app"></div>, then add script tag with type="module" src="index.js"(the entrypoint)
>add code to App.js: export function app
>add code to index.js: import react-Dom and app and write some code
>add scripts in package.json: start and build
>start dev server and open localhost address in default browser: $ npm start 
>parcel supports react fast refresh like hot reload.
