import { test, expect } from "@playwright/test";

test("Login validations check", async ({ page }) => {
  const user = [
    "gayatri@learnzy.com",
    "ritvik@learnzy.com",
    "anushka@learnzyTutor.com",
    "admin@learnzyAdmin.com",
  ];
  const pass = "@test@234123fvINDO45(*g";
  await page.goto("https://learnzy.onrender.com/");
  for (let i = 0; i < user.length; i++) {
    await page.getByLabel("Email").click();
    //await page.getByLabel("Email").press("Control+c");
    await page.getByLabel("Email").press("Control+a");
    await page.getByLabel("Email").fill(user[i]);
    await page.getByLabel("Password").click();
    //await page.getByLabel("Password").press("Control+c");
    await page.getByLabel("Password").press("Control+a");
    await page.getByLabel("Password").fill(pass);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://learnzy.onrender.com/dashboard");
    await page.getByRole("button", { name: "LOGOUT" }).click();
  }
  const w_user = ["bragadeesh@learnzy.com", "preethi@learnzy.com"];
  const w_pass = ["Bragadeesh", "Preethi"];
  for (let i = 0; i < w_user.length; i++) {
    await page.getByLabel("Email").click();
    //   //await page.getByLabel("Email").press("Control+c");
    await page.getByLabel("Email").press("Control+a");
    await page.getByLabel("Email").fill(w_user[i]);
    await page.getByLabel("Password").click();
    //   //await page.getByLabel("Password").press("Control+c");
    await page.getByLabel("Password").press("Control+a");
    await page.getByLabel("Password").fill(w_pass[i]);
    //await page.pause();
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Incorrect email")).toBeVisible();
    await expect(page.getByText("Incorrect email")).toBeEnabled();
    //await expect(page).toHaveURL("https://learnzy.onrender.com/dashboard");
    //await page.getByRole("button", { name: "LOGOUT" }).click();
  }
  await page.close();
});
