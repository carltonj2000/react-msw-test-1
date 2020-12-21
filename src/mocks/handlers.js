// src/mocks/handlers.js
import { rest } from "msw";

console.log("handlers");

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    console.log("login");
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", true);

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.post("/logout", (req, res, ctx) => {
    console.log("logout");
    // Persist user's authentication in the session
    sessionStorage.removeItem("is-authenticated");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    console.log("user");
    // Persist user's authentication in the session
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
