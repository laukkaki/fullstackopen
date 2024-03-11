```mermaid
sequenceDiagram
    participant browser
    participant server

    browser ->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server ->>browser: HTML document
    deactivate server

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server ->>browser: HTML document
    deactivate server

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server ->>browser: CSS file
    deactivate server

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server ->>browser: javascript file
    deactivate server

 Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server ->> browser: [{"content": "HTML is easy", "date": "2019-05-23T17:30:31.098Z"} ... ]
    deactivate server

Note right of browser: The browser executes the callback function that renders the notes 
```