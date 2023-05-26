// import { test, expect } from "@playwright/test";

// test("login logout check", async ({ page }) => {
//   await page.goto("https://learnzy.onrender.com/");
//   await expect(page).toHaveTitle("Learnzy");
//   await expect(page).toHaveURL("https://learnzy.onrender.com/");
//   await expect(
//     page.getByRole("heading", { name: "Learnzy", exact: true })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "Learnzy", exact: true })
//   ).toHaveCount(1);
//   await expect(
//     page.getByRole("heading", { name: "Learnzy", exact: true })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "Learnzy", exact: true })
//   ).toHaveAttribute("class", /.*css-1t056n9/);
//   await expect(
//     page.getByRole("heading", {
//       name: "Welcome to Learnzy, A friendly tutoring portal",
//     })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", {
//       name: "Welcome to Learnzy, A friendly tutoring portal",
//     })
//   ).toHaveCount(1);
//   await expect(
//     page.getByRole("heading", {
//       name: "Welcome to Learnzy, A friendly tutoring portal",
//     })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("heading", {
//       name: "Welcome to Learnzy, A friendly tutoring portal",
//     })
//   ).toHaveAttribute("class", /.*css-wizyrl/);
//   await expect(page.getByRole("img")).toBeEnabled();
//   await expect(page.getByRole("img")).toHaveCount(1);
//   await expect(page.getByRole("img")).toBeVisible();
//   await expect(page.getByLabel("Email")).toBeEnabled();
//   await expect(page.getByLabel("Email")).toBeVisible();
//   await expect(page.getByLabel("Email")).toBeEditable();
//   await expect(page.getByLabel("Password")).toBeEnabled();
//   await expect(page.getByLabel("Password")).toBeVisible();
//   await expect(page.getByLabel("Password")).toBeEditable();
//   await expect(page.getByRole("button", { name: "Login" })).toBeEnabled();
//   await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
//   //await page.pause();
//   await page.getByLabel("Email").click();
//   await page.getByLabel("Email").press("Control+c");
//   await page.getByLabel("Email").press("Control+a");
//   await page.getByLabel("Email").fill("anushka@learnzyTutor.com");
//   await page.getByLabel("Password").click();
//   await page.getByRole("button", { name: "Login" }).click();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
// });
