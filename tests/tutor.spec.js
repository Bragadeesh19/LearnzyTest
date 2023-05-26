// import { test, expect } from "@playwright/test";

// test("components check", async ({ page }) => {
//   await page.goto("https://learnzy.onrender.com/");
//   await page.getByLabel("Email").click();
//   await page.getByLabel("Email").press("Control+c");
//   await page.getByLabel("Email").press("Control+a");
//   await page.getByLabel("Email").fill("anushka@learnzyTutor.com");
//   await page.getByLabel("Password").click();
//   await page.getByRole("button", { name: "Login" }).click();
//   await expect(page).toHaveURL("https://learnzy.onrender.com/dashboard");
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^My Students12\/20$/ })
//       .first()
//   ).toBeVisible();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^My Students12\/20$/ })
//       .first()
//   ).toBeEnabled();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^My Students12\/20$/ })
//       .first()
//   ).toHaveCount(1);
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^My Rating8\/10$/ })
//       .first()
//   ).toBeVisible();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^My Rating8\/10$/ })
//       .first()
//   ).toBeEnabled();
//   await expect(
//     page
//       .locator("div")
//       .filter({ hasText: /^My Rating8\/10$/ })
//       .first()
//   ).toHaveCount(1);
//   await expect(
//     page.getByText(
//       "Rating over Timejanfebmaraprmayjunjulaugsepoctnovdec200400600800GKenglishscience"
//     )
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "Rating over Timejanfebmaraprmayjunjulaugsepoctnovdec200400600800GKenglishscience"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "Rating over Timejanfebmaraprmayjunjulaugsepoctnovdec200400600800GKenglishscience"
//     )
//   ).toHaveCount(1);
//   await expect(
//     page.getByText(
//       "My Students12/20My Rating8/10My StudentsPreethiEnglish5RasmikaMath5BragadeeshGK4"
//     )
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "My Students12/20My Rating8/10My StudentsPreethiEnglish5RasmikaMath5BragadeeshGK4"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "My Students12/20My Rating8/10My StudentsPreethiEnglish5RasmikaMath5BragadeeshGK4"
//     )
//   ).toHaveCount(1);
//   await expect(
//     page.getByText(
//       "TUTORAnushkaEnglishDashboardDataMy StudentsNotesPagesProfile FormCalendarFAQ Pag"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "TUTORAnushkaEnglishDashboardDataMy StudentsNotesPagesProfile FormCalendarFAQ Pag"
//     )
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "TUTORAnushkaEnglishDashboardDataMy StudentsNotesPagesProfile FormCalendarFAQ Pag"
//     )
//   ).toHaveCount(1);
//   await expect(
//     page.getByRole("heading", { name: "DASHBOARD", exact: true })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "DASHBOARD", exact: true })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "DASHBOARD", exact: true })
//   ).toHaveCount(1);
//   await expect(
//     page.getByRole("heading", { name: "Welcome to your dashboard" })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("heading", { name: "Welcome to your dashboard" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("heading", { name: "Welcome to your dashboard" })
//   ).toHaveCount(1);
//   await expect(
//     page.getByRole("button", { name: "anushka@learnzyTutor.com" })
//   ).toBeEnabled();
//   await expect(
//     page.getByRole("button", { name: "anushka@learnzyTutor.com" })
//   ).toBeVisible();
//   await expect(
//     page.getByRole("button", { name: "anushka@learnzyTutor.com" })
//   ).toHaveCount(1);
//   await expect(
//     page.getByText(
//       "anushka@learnzyTutor.comLOGOUTDASHBOARDWelcome to your dashboardMy Students12/20"
//     )
//   ).toBeVisible();
//   await expect(
//     page.getByText(
//       "anushka@learnzyTutor.comLOGOUTDASHBOARDWelcome to your dashboardMy Students12/20"
//     )
//   ).toBeEnabled();
//   await expect(
//     page.getByText(
//       "anushka@learnzyTutor.comLOGOUTDASHBOARDWelcome to your dashboardMy Students12/20"
//     )
//   ).toHaveCount(1);
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
//   // await page.goto("https://learnzy.onrender.com/mystudents");
//   // await page.goto("https://learnzy.onrender.com/notes");
//   // await page.goto("https://learnzy.onrender.com/form");
//   // await page.goto("https://learnzy.onrender.com/calendar");
//   // await page.pause();
//   await page.getByRole("button", { name: "LOGOUT" }).click();
//   await page.close();
// });
