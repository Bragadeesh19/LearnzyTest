// import { test, expect } from "@playwright/test";

// test("tutor line graph check", async ({ page }) => {
//   await page.goto("https://learnzy.onrender.com/");
//   await page.getByLabel("Email").click();
//   await page.getByLabel("Email").press("Control+c");
//   await page.getByLabel("Email").press("Control+a");
//   await page.getByLabel("Email").fill("anushka@learnzyTutor.com");
//   await page.getByLabel("Password").click();
//   await page.getByRole("button", { name: "Login" }).click();
//   //await page.goto("https://learnzy.onrender.com/dashboard");
//   await page.locator("button").nth(2).click();
//   await page.locator("button").nth(2).click();
//   await page.goto("https://learnzy.onrender.com/line");
//   await expect(page).toHaveURL("https://learnzy.onrender.com/line");
//   await expect(page.getByRole("heading", { name: "Line Chart" })).toBeEnabled();
//   await expect(page.getByRole("heading", { name: "Line Chart" })).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "Overall Progress" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "Overall Progress" })
//   ).toBeVisible();
//   await expect(page.locator("rect").first()).toBeEnabled();
//   await expect(page.locator("rect").first()).toBeVisible();
//   //await page.pause();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
//   await page.close();
// });
