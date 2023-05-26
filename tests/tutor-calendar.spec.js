// import { test, expect } from "@playwright/test";

// test("tutor calendar check", async ({ page }) => {
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
//   await page.goto("https://learnzy.onrender.com/calendar");
//   await expect(page).toHaveURL("https://learnzy.onrender.com/calendar");
//   await expect(page.getByRole("heading", { name: "Calendar" })).toBeEnabled();
//   await expect(page.getByRole("heading", { name: "Calendar" })).toBeVisible();
//   await expect(
//     page.getByRole("heading", {
//       name: "Keep track of all your events efficiently",
//     })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", {
//       name: "Keep track of all your events efficiently",
//     })
//   ).toBeVisible();
//   await expect(
//     page.getByText("EventsSprint 1Apr 3, 2023Sprint 2Apr 17, 2023")
//   ).toBeEnabled();
//   await expect(
//     page.getByText("EventsSprint 1Apr 3, 2023Sprint 2Apr 17, 2023")
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "SunMonTueWedThuFriSat30123456789101112131415161718192021222324252627282930311234"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "SunMonTueWedThuFriSat30123456789101112131415161718192021222324252627282930311234"
//     )
//   ).toBeVisible();
//   //await page.pause();
//   await page.getByRole("button", { name: "" }).click();
//   await page.getByRole("button", { name: "" }).click();
//   await page.getByRole("button", { name: "" }).click();
//   await page.getByRole("button", { name: "" }).click();
//   await page.getByRole("button", { name: "week" }).click();
//   await page.getByRole("button", { name: "day", exact: true }).click();
//   await page.getByRole("button", { name: "list" }).click();
//   await page.getByRole("button", { name: "month" }).click();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
//   await page.close();
// });
