# AVEST TECHNICAL TEST


## Explanation

This test is designed to assess your ability to work with React. You should style your components with TailwindCSS. (Bonus points for great UI/UX)
<br /><br/>

### <strong>You are free to use any library/package you want</strong>

<br/>

## Instructions

1. Create an AppContext that will be used to store an authenticated user state. The user should stay logged in even after a page refresh.

2. Create a Login Form component that will be used to authenticate a user.

3. Create a RequireAuth component that will be used to protect routes that require authentication.

4. Create a Dashboard component that will be used to display the authenticated user's infos.

5. Create a Logout component that will be used to logout the authenticated user.

<br/>

### Bonus points (You can pick one or more) :
- Create a ThemeContext to handle dark mode.
- Add a fake loading state to the Login component.

<br/>

## Files

There are 3 files that should help you to complete this test :
- mocks.ts: This file contains the user data that you will use to authenticate a user.
- App.tsx: This file should contains the routes of the app.
- globals.scss: This file contains the TailwindCSS configuration.


## Running the project

1. Clone the project

2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.