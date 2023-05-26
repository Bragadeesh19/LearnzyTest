// import { test, expect } from "@playwright/test";

// test("tutor faq check", async ({ page }) => {
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
//   await page.goto("https://learnzy.onrender.com/faq");
//   await expect(page).toHaveURL("https://learnzy.onrender.com/faq");
//   await expect(page.getByRole("heading", { name: "FAQ" })).toBeEnabled();
//   await expect(page.getByRole("heading", { name: "FAQ" })).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "Frequently Asked Questions Page" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "Frequently Asked Questions Page" })
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "FAQFrequently Asked Questions PageWhat is Learnzy?Lorem ipsum dolor sit amet, co"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "FAQFrequently Asked Questions PageWhat is Learnzy?Lorem ipsum dolor sit amet, co"
//     )
//   ).toBeVisible();
//   await page.getByRole("button", { name: "What is Learnzy?" }).click();
//   await page.getByRole("button", { name: "What is Learnzy?" }).click();
//   await page.getByRole("button", { name: "Important Question" }).click();
//   await page.getByRole("button", { name: "Important Question" }).click();
//   await page.getByRole("button", { name: "Your Favorite Question" }).click();
//   await page.getByRole("button", { name: "Your Favorite Question" }).click();
//   await page.getByRole("button", { name: "Some Random Question" }).click();
//   await page.getByRole("button", { name: "Some Random Question" }).click();
//   //await page.pause();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
//   await page.close();
// });
