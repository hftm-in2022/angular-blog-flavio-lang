# Angular Blog App

This repository documents the development of a simple blog app using the angular framework. It is meant to showcase the fundamentals of Angular 18 and how a project can be structured efficiently and professionally.

## Features

- Role based authentication and authorization via Keycloak and angular-auth-oidc-client.
- Overview of all blog entries.
- Create new Blog entry.
- Rudimentary responsive design.
- Global error handling for API errors and non existant routes.
- Easy deployment as Azure Static Web App.

## Technologies used

- Angular 18
- Angular Material
- RxJS
- KeyCloak for OIDC auth
- Azure Static Web Apps
- ESLint
- Prettier
- Husky
- CommitLint

## Project Structure

```
.
├── app
│   ├── app.component.*          # Base Component for the app
│   ├── app.config.ts            # Global Config
│   ├── app.routes.ts            # Clientside routing config
│   ├── auth                     # Config for keycloak auth
│   ├── components               # Globally reusable components
│   ├── core                     # Core features like guards, helpers, interceptors, and services
│   │   ├── guards               # Route guards (currently used for authentication)
│   │   ├── handlers             # Global error handler
│   │   ├── interceptors         # HTTP interceptor for logging
│   │   ├── resolvers            # Route data resolvers
│   │   ├── schemas              # Schemas for validation
│   │   └── services             # API Services
│   ├── features                 # Application features
│   │   ├── add-blog             # Add blog component
│   │   ├── blog-detail          # Blog detail component
│   │   └── blog-list            # Blog list component
│   └── state                    # Global state management
├── assets
│   ├── images                   # Static assets like images
│   └── styles                   # Global SCSS variables
├── environments                 # Environment config for development and production
├── styles.scss                  # Global styles
├── favicon.ico                  # Application favicon
├── index.html                   # Entry point for the application
├── main.ts                      # Bootstrap file for the Angular app
```

## Design Patterns

### State Management

The state of the App is managed globally and can be read by accessing the `blog.selector.ts`. This provides us with a single source of truth regarding our application state and allows quality-of-life features such as a global `isLoading` state.

### Smart and Dumb Components

The Blog Overview and Blog Card implement the Smart and Dumb Components pattern. This allows the Blog Overview to simply pass the data on to the Blog Card without worrying about actually displaying it. The Blog Card then communicates back via signals when an action has taken place (for example when a blog has been selected). This keeps the business logic and the presentation seperate and allows the Blog Card to be reused.

## How to run the project locally

1. Clone the project into the folder of your choice using `git clone`
2. Enter the folder and install the dependencies with `npm install`
3. Start the dev server with `ng serve`

## Deployment to Azure Static Web Apps

Deployment is easy with the provided GitHub actions. The app is automatically deployed to Azure Static Web Apps every time something gets pushed to the `main` branch of the Project.

Deployment Link Here
