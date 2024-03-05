sequenceDiagram
    participant browser
    participant server

    brovser ->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
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

    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server ->> browser: [{"content": "HTML is easy", "date": "2019-05-23T17:30:31.098Z"} ... ]
    deactivate server