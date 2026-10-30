# CloudNotes — Beginner AWS Project

## What this project does
A small notes website where a user can create, view, and delete notes.

## Important architecture note
This starter version stores notes in the browser using `localStorage`. It does **not** send note content to AWS or sync notes between devices. AWS is used to host the website publicly (AWS Amplify Hosting). This is a deliberately simple first AWS project. A later version can add Amazon DynamoDB + AWS Lambda + API Gateway for real cloud data storage.

## Run locally on Windows
1. Extract the ZIP.
2. Open the `CloudNotes_AWS_Project` folder.
3. Double-click `index.html`, or right-click → Open with → Chrome/Edge.
4. Add a title and note, then click **Save note**.
5. Refresh the page; notes should remain in the same browser.

No Python or package installation is needed.

## Host the website on AWS Amplify (simple route)
1. Create a GitHub account if you do not already have one.
2. Create a new GitHub repository named `cloudnotes`.
3. Upload `index.html`, `style.css`, and `app.js` from this folder to the repository root.
4. Sign in to AWS Console and search for **AWS Amplify**.
5. Choose **Create new app** / **Host web app** and connect GitHub.
6. Select the `cloudnotes` repository and its branch (usually `main`).
7. For a plain HTML/CSS/JS site, use the default build settings or configure it as a static site with no build command and publish directory `/`.
8. Save and deploy. Amplify will provide an HTTPS website URL.
9. Open that URL and test creating and deleting notes.

AWS console labels may change. Review current AWS pricing and Free Tier eligibility before deploying; usage can incur charges.

## Project files
- `index.html` — page structure
- `style.css` — design
- `app.js` — create, render, delete, and browser storage logic

## Limitations and next version
- Notes are saved only in the browser that created them.
- Clearing browser site data can remove notes.
- This is a learning/demo project, not a secure multi-user notes service.
- For genuine cloud-synced notes, add authentication and a backend using Amazon Cognito, API Gateway, AWS Lambda, and DynamoDB. Do not put AWS secret keys in frontend JavaScript.
