# Web Engineering Coding Playground Template

This repository is designed as the foundation for coding playgrounds in the Web Engineering course. It offers a structured space for experimenting with and mastering various web development technologies and practices. 
The project is based on [this](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Accessibility_troubleshooting) repository from MDN.

The project introduces a lot of code smells for you to tackle. 
**Lets get coding!**

## Submission Details and Deadlines
* Coding playgrounds are **individual** work
* There will be 2 serparate submissions:
  * [Base Playgrounds](#base-coding-playgrounds): Submission Deadline **03.11.2024**
  * [Extended Playgrounds](#extended-coding-playgrounds): Submission Deadline **16.01.2025**
* The playgrounds will be guided through in our sessions - still there will be distance work!
* Use this base template to create your project repository.
* Each playground is linked in the corresponding course section.
* You can find the submissions at the bottom of the Moodle course.
  

## Features

- Wonderful UI-design :heart_eyes:
- Loads bear data using [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) :bear:
  - Original Wikipedia Page can be found [here](https://en.wikipedia.org/wiki/List_of_ursids)
- Worst JS coding practices :cold_sweat:
- No Build and Dependency Management at all :fire:



# Base Coding Playgrounds

## K.O. Criteria
* No JS Frameworks allowed to solve the base coding playgrounds (e.g. Vue.js, Angular, React, Svelte,...) - don't panic we will come to them!
* No CSS Libraries allowed (e.g. Bootstrap, Material, Tailwind, ...)

## Submission
Submit your coding repository link in Moodle. Send me an invitation to your repository if it is set to private:
> GitHub: leonardo1710
> 
> GitLab: leon.freudenthaler@fh-campuswien.ac.at

## 1. JS Playground (10 Pts.)
The provided base project template contains some bugs and bad JS coding practices for you to fix in your first playground. Take a look into the component files and get a grasp of the inner workings of the provided project.
> **ATTENTION: After finishing the JS Playground please create a commit or branch and link it below. Otherwise it is not possible to grade your 1. submission, since we will switch to TypeScript afterwards!**
> 
> **This is my JS Playground commit/branch:** <LINK_TO_YOUR_COMMIT>

**Tasks:**
Fix application code and answer the questions:
* (2) Adapt the code to use ``async/await`` instead of the ``then()``-callback hell and refactor the functions to use arrow function syntax instead of ``function()``-syntax.
* (2) Add proper error handling to the code using ``try/catch`` and provide useful error messages to the users. Additionally, check the image URL availability before rendering the images in HTML. Provide placeholder images if the given URL does not exist.
* (1) Extract the range value from the provided Wikitext (response from the API). Examine the provided Wikitext format inside `extractBears` function. 
* (1) Split the code into separate modules with regards to clean separation of concerns.
* (1) Eliminate all other bad coding practices you can find. 
* (3) Answer the following questions and provide some examples inside the ``Readme.md`` file. 

>  **What bad coding practices did you find? Why is it a bad practice and how did you fix it?**
Summary of Bad Coding Practices and Fixes
1. Callback with then:
 - Issue: Deeply nested .then() calls leading to poor readability and maintainability.
 - Fix: Used async/await for a more readable asynchronous flow.
2. Lack of Error Handling:
 - Issue: No error handling for network failures or unexpected data from API.
 - Fix: Added try/catch blocks to handle errors, provide meaningful messages, and used placeholders for missing data.
 bad example 
   fetch(url).then(function(response) {
    return response.json();
}).then(function(data) {
    fetch(nextUrl).then(function(response) {
        return response.json();
    });
});
   good example
   const fetchData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const nextRes = await fetch(nextUrl);
        const nextData = await nextRes.json();
    } catch (error) {
        console.error('Error:', error);
    }
};
3. No Validation for Form Fields:
 - Issue: Form submission allowed without validating input fields.
 - Fix: Added input validation to ensure the form is only submitted when both fields are filled.
  bad example
form.onsubmit = function (e) {
    e.preventDefault();
    // No validation for nameField and commentField
};
good example
if (!nameValue || !commentValue) {
        alert('Please fill out both name and comment fields.');
        return;
    }
4. Potential for Null/Undefined Values:
 - Issue: Assumed data would always be available, leading to potential runtime errors.
 - Fix: Used optional chaining and fallback values (like placeholders) when data is missing.
  bad example
const imageUrl = Object.values(pages)[0].imageinfo[0].url;
good example 
const imageUrl = Object.values(pages)[0]?.imageinfo?.[0]?.url || 'placeholder-image-url.jpg';
5. Poor Separation of Concerns:
 - Issue: Combined multiple functionalities (comment handling, API calls, UI updates) into a single
block of code.
 - Fix: Separated concerns by modularizing the code, making each function handle a specific task.
6. Hard-Coded Values Without Fallback:
 - Issue: Used hard-coded placeholder text like "TODO" without extracting real data.
 - Fix: Properly extracted the range value from the API data and used fallback text when data is
missing.
const rangeMatch = row.match(/\|range=(.*?)\n/);
const bear = {
    name: nameMatch[1],
    binomial: binomialMatch[1],
    image: imageUrl,
   bad example =>     range: "TODO extract correct range"
   good example=>    range: rangeMatch ? rangeMatch[1] : 'Range data not available'
};


console.log('Make use of markdown codesnippets to show and explain good/bad practices!')
```


## 2. Dependency- and Build Management Playground (10 Pts.)
Build the application with ``npm`` and a build and a dependency management tool of your choice (e.g. [Vite](https://vitejs.dev/), [Webpack](https://webpack.js.org/), or others). 

Here are some additional resources: [Package Management and Bundling](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2-Package-Management,-Build-Management-and-Modules), [Vite Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2.1-Vite-Web-Application-Setup), [Webpack Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2.2-Webpack-Web-Application-Setup).

**Tasks:**
* (1) Integrate `npm` and a build management tool into your project.
* (2) Configure your project to use Typescript as your primary development language and adapt the code and file extensions respectively.
* (2) Use ESLint and Prettier inside your project - rulesets can be found below.
* (1) Keep your builds clear and add dependencies to the right build (e.g. do not add dev dependencies inside the production build and vice versa).
* (1) Define the following tasks within `npm scripts`:
  * `dev`: starts the development server
  * `build`: runs the typescript compiler and bundles your application - bundling depends on your chosen build tool (e.g. Vite, Webpack) but typically bundles multiple files into one, applies optimizations like minification and obfuscation and outputs final results to a `dist` or `build` directory.
  * `lint`: runs ESLint on all  `.js` and `.ts` files in your projects `/src` directory
  * `lint:fix`: runs and also fixes all issues found by ESLint
  * `format`: formats all `.js` and `.ts` files in your projects `/src` directory
  * `format:check`: checks if the files in the `/src` directory are formatted according to Prettier's rules.
* (1) Configure a pre-commit hook that lints and formats your code using [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged). A tutorial can be found [here](https://dev.to/shashwatnautiyal/complete-guide-to-eslint-prettier-husky-and-lint-staged-fh9).
* (2) Answer the question at the end of this section inside ``Readme.md`` file: 


**ESLint Configurations**

Use ESLint configs [standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript) and [TypeScript ESLint Plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
Your `.eslintrc` file should have the following extensions:
```.eslintrc.yml
...
extends:
  - standard-with-typescript
  - plugin:@typescript-eslint/recommended
  - plugin:prettier/recommended
  - prettier
...
```
 
**Prettier Configurations**

Apply the following ruleset for Prettier:
``` .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80
}
```

>  **What improvements in your codebase were introduced by using TS instead of JS? Name at least 3 and explain why.**
1- Type Safety
 when querying the DOM elements using querySelector, you specify the type of the element, ensuring that the correct type is used when interacting with them.
example :
> const showHideBtn = document.querySelector(
  '.show-hide'
) as HTMLButtonElement | null;
const commentWrapper = document.querySelector(
  '.comment-wrapper'
) as HTMLDivElement | null;
Benefit:  reducing the chances of runtime errors due to invalid types

2-Improved Readability and Maintainability through Interfaces
Defining an explicit structure for the bears’ data allows the developer to understand the data flow better and enforces consistency throughout the code
example: 
interface Bear {
  name: string;
  binomial: string;
  image: string;
  range: string;
}

const bears: Bear[] = [];
Benefit:  Interfaces make the code more predictable by specifying the expected shape of objects.
This improves the ability to refactor code, as TypeScript will automatically highlight where the interface is not adhered to.

3- Better Error Handling and Fallbacks
In the case of fetchImageUrl, TypeScript helps enforce that the function will always return a string, even if the fetch fails (due to the fallback of the placeholder image).
example: 
const fetchImageUrl = async (fileName: string): Promise<string> => {
  const imageParams: Record<string, string> = {
    action: 'query',
    titles: `File:${fileName}`,
    prop: 'imageinfo',
    iiprop: 'url',
    format: 'json',
    origin: '*',
  };

  try {
    const res = await fetch(url);
    const data = await res.json();
    const imageUrl = Object.values(data.query.pages)[0]?.imageinfo?.[0]?.url;
    return imageUrl || 'placeholder-image-url.jpg'; // Fallback in case of missing image
  } catch (error) {
    console.error('Failed to fetch image URL:', error);
    return 'placeholder-image-url.jpg'; // Return placeholder on error
  }
};
Benefit:  This makes error handling more robust and ensures that the function never returns undefined or an unexpected value.

4- Enhanced Code Intellisense and Auto-Completion
 This is particularly helpful when working with complex objects, third-party libraries
 example:
 const list = document.querySelector(
  '.comment-container'
) as HTMLUListElement | null;

if (list) {
  list.appendChild(listItem); // TypeScript provides auto-completion here
}
Benefit:  With JavaScript, you might not get helpful suggestions when interacting with the DOM or third-party APIs, increasing the likelihood of errors (e.g., calling methods that don't exist or misusing data).
TypeScript enhances the IDE experience by suggesting the correct methods and properties based on the types, making it easier to discover available functionality.


## 3.	CI/CD Pipeline Playground (5 Pts.)
Implementation of a CI/CD pipeline to automate the development and deployment process – write automated tests.

Here are some additional resources: [GitHub Actions Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/3.2-CI-CD-Pipeline-with-Github-Pages-and-Github-Actions) and [GitHub Actions Docs](https://docs.github.com/en/actions).

**Tasks:**
* (1.5) Write at least 2 meaningful unit tests (use [Vitest](https://vitest.dev/) or [Jest](https://jestjs.io/)) for your project and configure the following tasks in ``npm scripts``:
  * `test`: runs all files that include `.test.` or `.spec.`, e.g.: `example.test.ts`
  * `test:coverage`: runs tests like `test` but also creates a test coverage report
* (1) Configure **2 Workflows** in GitHub Actions, one for development and one for deployment:
  * Create a `development` branch inside your repository
  * (1) Development Workflow should at least test and lint your code when developers push to branch `development`
  * (1) Deployment Workflow is triggered when developers push into `main` branch. It should at least test, lint and build your source code. Afterwards the build artifacts of your application should be automatically deployed to Github Pages (or another hosting provider of your choice). 
* (0.5) Reuse existing workflows or jobs whenever possible! 

## 4.	Accessibility Playground (5 Pts.)
You might have noticed that the base project has a number of accessibility issues - your task is to explore the existing site and fix them.
Use the tools presented in our accessibility workshop to test the accessibility in your project.

**(0.5) Color** 

Test the current color contrast (text/background), report the results of the test, and then fix them by changing the assigned colors.

Findings:
- Using the WebAIM Color Contrast Checker, I tested the color contrast for different text and background combinations:
  - Black Text on Dark Green Background: #000000 on #004d40, with a contrast ratio of 3.3:1. This fails WCAG AA for normal text.
  - White Text on Teal Background: #ffffff on #00796b, with a contrast ratio of 4.5:1, which passes WCAG AA for normal text.

Fixes:
- Dark Green Background: Changed the text color to white (#ffffff) for better contrast, achieving a contrast ratio of 12.6:1, which meets both WCAG AA and AAA standards for normal text.
- Teal Background: No change was necessary, as it already met accessibility standards.

**(0.5) Semantic HTML**

Report on what happens when you try to navigate the page using a screen reader. Fix those navigation issues.

Findings:
- When navigating the page with a screen reader, several accessibility issues became apparent:
  - Lack of semantic landmarks (e.g., <header>, <main>, <footer>) made it difficult to navigate page sections.
  - Missing heading structure made it hard to identify content hierarchy.
  - Non-descriptive links in the navigation menu provided unclear information about their destinations.

Fixes:
- Added Semantic Landmarks: Used <header>, <main>, and <footer> to define the page structure, helping screen readers recognize each section.
- Improved Heading Structure: Replaced <font> tags with <h1>, <h2>, and <h3> tags to create a logical content hierarchy.
- Descriptive Links: Added aria-label attributes to links, providing clear descriptions for screen reader users.

**(0.5) Audio** 

The ``<audio>`` player isn't accessible to hearing impaired (deaf) people — can you add some kind of accessible alternative for these users?

Findings:
- The <audio> player lacked an accessible alternative for hearing-impaired users, leaving them without access to the audio content.

Fixes:
- Added a Transcript: Included a <div class='audio-transcript'> element to display a written transcript of the audio content, making it accessible to those who cannot hear.
- Descriptive Label for the Audio Player: Added an aria-label to the <audio> element to provide context for screen readers.

**(1) Forms** 
  * The ``<input>`` element in the search form at the top could do with a label, but we don't want to add a visible text label that would potentially spoil the design and isn't really needed by sighted users. Fix this issue by adding a label that is only accessible to screen readers.
  * The two ``<input>`` elements in the comment form have visible text labels, but they are not unambiguously associated with their labels — how do you achieve this? Note that you'll need to update some of the CSS rule as well.

Findings:
- The <input> element in the search form did not have an accessible label, making it difficult for screen reader users to understand its purpose.
- The <input> elements in the comment form had visible labels, but they were not clearly associated with their input fields.

Fixes:
- Visually Hidden Label for Search Input: Added a label with a .visually-hidden class to make it screen reader-accessible without affecting visual design.
- Associated Labels for Comment Form Inputs: Added for attributes in <label> elements and corresponding id attributes in <input> elements to ensure screen readers correctly associate each label with its input. Updated CSS to align the fields properly.

**(0.5) Comment section**

The show/hide comment control button is not currently keyboard-accessible. Can you make it keyboard accessible, both in terms of focusing it using the tab key, and activating it using the return key?

Findings:
- The 'Show comments' button was not keyboard-accessible, meaning users couldn’t navigate or activate it with the keyboard alone.

Fixes:
- Keyboard Accessibility: Added tabindex='0' to make the button focusable via the tab key.
- Keyboard Interaction: Added JavaScript to listen for the keydown event, allowing users to activate the button with the return (Enter) key.

**(1) The table**

The data table is not currently very accessible — it is hard for screen reader users to associate data rows and columns together, and the table also has no kind of summary to make it clear what it shows. Can you add some features to your HTML to fix this problem?

Findings:
- The data table lacked a clear summary and descriptive headers, making it hard for screen readers to associate data rows and columns.

Fixes:
- Added a Caption: Included a <caption> to give the table a visible title.
- Descriptive Summary: Used an aria-describedby attribute on the table to link it to a visually hidden description, providing context for screen readers.
- Column Headers with Scope: Applied scope='col' to each column header, helping screen readers associate cells with their headers.

**(1) More Findings**

What other accessibility issues did you find? Explain how you did fix them.
Additional Issues:
- Image Descriptions: Images lacked descriptive alt text, which could be confusing for screen reader users.
- Search Form Label: The search input didn’t have a visible label for screen reader users.

Fixes:
- Meaningful Alt Attributes for Images: Added descriptive alt text to all images, enhancing context for screen readers.
- Visually Hidden Label for Search Form: Used the .visually-hidden class to add an accessible label to the search form without disrupting the design.


# Extended Coding Playgrounds
Please create a new independent Repository for these playgrounds and submit a link to it in the Moodle submission. 
Additionally, provide a description of how to start your frontend and backend services inside the `README.md`.

## Submission
Submit your coding repository link in Moodle. Send me an invitation to your repository if it is set to private:
> GitHub: leonardo1710
> 
> GitLab: leon.freudenthaler@fh-campuswien.ac.at

## 5. Migrate to a Frontend Framework (10 pts.)
In this playground you will migrate your application to a frontend framework of your choice.

**Tasks**:
* Migrate your application to a frontend framework of your choice (e.g. React, Angular, Vue.js, Svelte,...)
  * All previous features should still work
  * The application still should use build and dependency management
* Adapt your `npm scripts` if necessary

## 6. Integrate a Backend Framework (10 pts.)
In this playground you will use a backend framework of your choice and connect it with an API to your frontend application. 

**Tasks**:
* (3) Setup a backend framework of your choice
* (2) Create an API your frontend will be connected to (REST, GraphQL, gRPC, you choose...)
* (2) Your backend should now request the bear data from presented Wikipedia API
* (3) Replace the frontend Wikipedia API calls with calls to your backend - the functionality of your frontend should work as before!
* (Optional): you may want to introduce some sort of caching layer for Wikipedia API requests


## 7. Containerize your application (10 pts.)
Dockerize your frontend and backend applications. It should be possible to start all services in the corresponding mode (development, production) with a single command (e.g. use Docker Compose for this).

**Tasks**:
* (6) Create **multi-stage Dockerfiles** for your applications (depending on your frameworks):
  * The frontend Dockerfile should: 1. run the app in a development environment 2. build the app 3. serve build artefacts over Nginx
  * The backend Dockerfile should: 1. run the app in a development environment 2. build the app if there is a build step in your framework (optional) 3. serve the app 
* (4) Create two docker-compose files to orchestrate you applications in ``development`` and ``production`` mode:
  * Define ports and dependencies
  * Define corresponding stage (development, production)
  * Use environment variables if possible
* Your application should start with the following commands:
  * Development: `docker-compose -f docker-compose.yml up --build`
  * Production: `docker-compose -f docker-compose.prod.yml up --build`
