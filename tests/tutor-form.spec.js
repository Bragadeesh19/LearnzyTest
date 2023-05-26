// import { test, expect } from "@playwright/test";

// test("tutor profile form check", async ({ page }) => {
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
//   await page.goto("https://learnzy.onrender.com/form");
//   await expect(page).toHaveURL("https://learnzy.onrender.com/form");
//   //await page.pause();
//   await expect(
//     page.getByRole("heading", { name: "UPDATE PROFILE" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "UPDATE PROFILE" })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "UPDATE PROFILE" })
//   ).toHaveCount(1);
//   await expect(
//     page.getByRole("heading", { name: "Update your Profile" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "Update your Profile" })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "Update your Profile" })
//   ).toHaveCount(1);
//   await expect(page.getByLabel("First Name")).toBeEnabled();
//   await expect(page.getByLabel("First Name")).toBeVisible();
//   await expect(page.getByLabel("First Name")).toBeEditable();
//   await expect(page.getByLabel("Last Name")).toBeEnabled();
//   await expect(page.getByLabel("Last Name")).toBeVisible();
//   await expect(page.getByLabel("Last Name")).toBeEditable();
//   await expect(page.getByLabel("Email")).toBeEnabled();
//   await expect(page.getByLabel("Email")).toBeVisible();
//   await expect(page.getByLabel("Email")).toBeEditable();
//   await expect(page.getByLabel("Contact Number")).toBeEnabled();
//   await expect(page.getByLabel("Contact Number")).toBeVisible();
//   await expect(page.getByLabel("Contact Number")).toBeEditable();
//   await expect(page.getByLabel("Address 1")).toBeEnabled();
//   await expect(page.getByLabel("Address 1")).toBeVisible();
//   await expect(page.getByLabel("Address 1")).toBeEditable();
//   await expect(page.getByLabel("Address 2")).toBeEnabled();
//   await expect(page.getByLabel("Address 2")).toBeVisible();
//   await expect(page.getByLabel("Address 2")).toBeEditable();
//   await expect(page.getByRole("button", { name: "Update" })).toBeEnabled();
//   await expect(page.getByRole("button", { name: "Update" })).toBeVisible();
//   await page.getByLabel("First Name").click();
//   await page.getByLabel("Last Name").click();
//   await page.getByLabel("Email").click();
//   await page.getByLabel("Contact Number").click();
//   await page.getByLabel("Address 1").click();
//   await page.getByLabel("Address 2").click();
//   //await page.pause();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
//   await page.close();
// });
