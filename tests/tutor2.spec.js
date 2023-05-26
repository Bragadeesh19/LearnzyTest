// import { test, expect } from "@playwright/test";

// test("routes", async ({ page }) => {
//   await page.goto("https://learnzy.onrender.com/");
//   await page.getByLabel("Email").click();
//   await page.getByLabel("Email").press("Control+c");
//   await page.getByLabel("Email").press("Control+a");
//   await page.getByLabel("Email").fill("anushka@learnzyTutor.com");
//   await page.getByLabel("Password").click();
//   await page.getByRole("button", { name: "Login" }).click();
//   //await page.goto("https://learnzy.onrender.com/dashboard");
//   await page
//     .getByRole("button", { name: "TUTOR", exact: true })
//     .getByRole("button")
//     .click();
//   await page.locator(".pro-inner-item").first().click();
//   await page.locator("button").nth(2).click();
//   await page.locator("button").nth(2).click();
//   // getByRole("button", { name: "My Students" }).getByRole("link");
//   // const link = page
//   //   .getByRole("button", { name: "My Students" })
//   //   .getByRole("link");
//   // await link.click();
//   await page.goto("https://learnzy.onrender.com/mystudents");
//   await page.goto("https://learnzy.onrender.com/notes");
//   await page.goto("https://learnzy.onrender.com/form");
//   await page.getByLabel("First Name").click();
//   await page.getByLabel("Last Name").click();
//   await page.getByLabel("Email").click();
//   await page.goto("https://learnzy.onrender.com/calendar");
//   await page.goto("https://learnzy.onrender.com/faq");
//   await page.goto("https://learnzy.onrender.com/line");
//   //await page.pause();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
//   await page.close();
// });
