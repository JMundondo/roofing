# R & S Constructions LLC Website 

R & S Constructions is a full-service residential design and build remodeling firm in Maryland. Specializing in new construction, custom home building and residential renovations. Dream big, dream small or dream one project at a time. R & S Constructions has a diverse team of qualified professionals that can bring your vision to life. We have been in business for over 6 years and strive toward sustainable, eco-friendly construction using best practices. Our home remodeling contractors offer complete home remodeling, additions and alterations, kitchen remodeling, bathroom remodeling, basement finishing and much more for homes in Maryland. R & S Constructions is a fully licensed and insured Certified General Contractor in the State of Maryland (MHIC #05-136714).

**Domain:** https://randsconstructions.com/

This fully responsive website is built using **HTML**, **JavaScript** and **CSS** using the **React JavaScript Framework**. 

# Hostinger - Web Hosting Provider & Internet Domain Registrar

**URL:** https://www.hostinger.com/

**Business Shared Hosting Plan Includes:**
* Domain
* Domain Nameservers
* SSL Certificate - encrypted connection to provide security on web server
* Cloudflare Protected Nameservers
* Cloudflare CDN - speeds up and protects millions of websites, APIs, SaaS services, and other properties connected to the Internet

# SEO (Search Engine Optimization) Practices 

## Sitemap

A sitemap is made in XML (Extensible Markup Language) and is primarily used as a way for AI to index your site easier. Search engines like Google use XML sitemaps to store your site’s pages more efficiently, producing better results when people search for related terms.

**R &amp; S Constructions Sitemap URL:** https://randsconstructions.com/sitemap.xml

**Posted Sitemap on Google Search Console:** https://search.google.com/search-console/about

## Google Search Console 

Google Search Console is a web service by Google which allows webmasters to check indexing status, search queries, crawling errors and optimize visibility of their websites.

* Log into account -> Enter domain name of website -> Copy TXT record into the DNS configuration for https://randsconstructions.com/ in Hostinger

* Once sitemap.xml is created go to -> Sitemaps tab -> Add a new sitemap URL and it should be good to go 

## Adding sitemap to Hostinger Web Provider

* Business Shared Hosting -> Manage -> Advanced -> DNS Zone Editor -> Create DNS record 

## Robots.txt

A robots.txt file tells search engines what your website's rules of engagement are. A big part of doing SEO is about sending the right signals to search engines, and the robots.txt is one of the ways to communicate your crawling preferences to search engines.

**URL:** https://randsconstructions.com/robots.txt

# Application Programming Interface (APIs)

### `EmailJS`

Utilized EmailJS service to allow sending emails directly from client-side JavaScript code. 

**EmailJS URL:** https://www.emailjs.com/

### `Google Maps`

Place an interactive map or Street View panorama on your web page with Maps Embed API using a simple HTTP request. 

**URL:** https://developers.google.com/maps/documentation/embed/get-started?_gl=1*1ibep48*_ga*MTgwNTI2ODcyNS4xNjU5MjkyMzYz*_ga_NRWSTWS78N*MTY1OTI5MjM2My4xLjEuMTY1OTI5MjQ1MS4w

### `Google My Maps`

Google My Maps is a feature in Google Maps that allows its users to create custom maps for personal use or share with others. 

**URL:** https://mymaps.google.com

# React Information 

## React Dependencies

### `EmailJS`

EmailJS helps to send emails using client-side technologies only. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use EmailJS's Javascript library to trigger an email.

**Installation for dependency:** *npm install @emailjs/browser*

### `Font Awesome SVG Core`

In contrast, the fontawesome-svg-core package is for more specialized situations or for forming the underlying API to power other components or libraries.

**Installation for dependency:** *npm install @fortawesome/fontawesome-svg-core*

### `Free Brands SVG Icons`

**Installation for dependency:** *npm install @fortawesome/free-brands-svg-icons*

### `Free Solid SVG Icons`

**Installation for dependency:** *npm install @fortawesome/free-solid-svg-icons*

### `React - Fontawesome`

Font Awesome is a toolkit for websites that provides icons and social logos. React is a coding library that is used for creating user interfaces. While the Font Awesome team has made a React component to promote integration. 

**Installation for dependency:** *npm install fortawesome/react-fontawesome*

### `Node Modules`

Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders.

**Installation for dependency:** *npm install node-modules*

### `ReactDOM`

This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

**Installation for dependency:** *npm install react-dom*

### `React Helmet Async`

React Helmet Async is a component which lets you control your document head using their React component. With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

**Installation for dependency:** *npm install react-helmet-async*

### `React Router DOM - v6`

React Router DOM enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.

**Installation for dependency:** *npm install react-router-dom@6*

### `React Scripts`

react-scripts are simply scripts to run the build tools required to transform React JSX syntax into plain JavaScript programmatically

**Installation for dependency:** *npm install react-scripts*

### `Styled Components (React)`

Styled-components is a popular library that is used to style React applications. It allows you to build custom components by writing actual CSS in your JavaScript.

**Installation for dependency:** *npm install styled-components*

### `Web Vitals`

Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web. Google has provided a number of tools over the years to measure and report on performance.

**Installation for dependency:** *npm install web-vitals*

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
Only occurence of bootstrap that is being used for this website build. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)