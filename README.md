# CNRFRProjects
This Repo will host source code for displaying student projects

# Description
For each center, for each camp, compile whatever projects can be deployed into one location

# Stack
Next.js, TypeScript, React
Serverless API can be used by creating a routes folder

# Getting started
1. Clone this repo into a folder on your local computer
2. ```npm install``` in the root directory (you need npm on your computer).
3. ```npm run dev``` to to open a localhost of the application

# Advice
1. Next.js uses the src/ folder to navigate pages. Because of this, making a new page is easy. Create a folder in app named whatever the subpage name should be, then add a page.tsx file. That page.tsx file will render when you go to your suburl. 
2. React is component based. For components that are commonly used, like ProgressBars, put them in the components folder and import them to the page you want.
3. If you decide to use any API's, keep the API Keys secret using a .env
