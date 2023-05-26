// import { test, expect } from "@playwright/test";

// test("admin dashboard check", async ({ page }) => {
//   await page.goto("https://learnzy.onrender.com/");
//   await page.getByLabel("Email").click();
//   await page.getByLabel("Email").press("Control+c");
//   await page.getByLabel("Email").press("Control+a");
//   await page.getByLabel("Email").fill("admin@learnzyAdmin.com");
//   await page.getByLabel("Password").click();
//   await page.getByRole("button", { name: "Login" }).click();
//   await expect(page).toHaveURL("https://learnzy.onrender.com/dashboard");
//   await expect(
//     page.getByRole("heading", { name: "DASHBOARD", exact: true })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "DASHBOARD", exact: true })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "Welcome to your dashboard" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "Welcome to your dashboard" })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("button", { name: "admin@learnzyAdmin.com" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("button", { name: "admin@learnzyAdmin.com" })
//   ).toBeVisible();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^StudentsNo\. of students enrolled with Learnzy$/ })
//       .first()
//   ).toBeEnabled();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^StudentsNo\. of students enrolled with Learnzy$/ })
//       .first()
//   ).toBeVisible();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^TutorsTutors onboarded with Learnzy$/ })
//       .first()
//   ).toBeVisible();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^TutorsTutors onboarded with Learnzy$/ })
//       .first()
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "Tutor Growthjanfebmaraprmayjunjulaugsepoctnovdec200400600800GKenglishsciencemath"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "Tutor Growthjanfebmaraprmayjunjulaugsepoctnovdec200400600800GKenglishsciencemath"
//     )
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "Student Growthjanfebmaraprmayjunjulaugsepoctnovdec200400600800GKenglishsciencema"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "Student Growthjanfebmaraprmayjunjulaugsepoctnovdec200400600800GKenglishsciencema"
//     )
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "Quote of the Day!“The man who does not read books has no advantage over the one "
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "Quote of the Day!“The man who does not read books has no advantage over the one "
//     )
//   ).toBeVisible();
//   await expect(
//     page
//       .locator("div")
//       .filter({
//         hasText:
//           /^ADMINAdminDashboardDataAll TutorsAll StudentsPagesApprove Tutors$/,
//       })
//       .nth(3)
//   ).toBeEnabled();
//   await expect(
//     page
//       .locator("div")
//       .filter({
//         hasText:
//           /^ADMINAdminDashboardDataAll TutorsAll StudentsPagesApprove Tutors$/,
//       })
//       .nth(3)
//   ).toBeVisible();
//   await page
//     .getByRole("button", { name: "ADMIN", exact: true })
//     .getByRole("button")
//     .click();
//   await page.getByRole("list").getByRole("button").first().click();
//   await page.getByRole("main").getByRole("button").nth(1).click();
//   await page.getByRole("main").getByRole("button").nth(1).click();
//   //await page.pause();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
//   await page.close();
// });
