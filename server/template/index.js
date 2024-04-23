export function htmlTemplate(appState = {}) {
	return `
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <style>
            :root {
                --primaryColor: rgb(148 25 27);
            }

            @font-face {
                font-family: "something";
                src: url('/fonts/something.ttf');
              }

        </style>        
    </head>

    <body>

        <div id="app"></div>

        <!-- SERIALIZED GLOBAL APP STATE -->
        <script>
            window.APP_DATA = ${JSON.stringify(appState)}
        </script>

        <script src="/public/client/client.bundle.js"></script>

    </body>

    </html>
    `;
}
