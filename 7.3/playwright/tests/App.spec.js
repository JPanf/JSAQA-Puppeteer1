const { email } = require("../user");
const { password } = require("../user"); 
import { test, expect } from "@playwright/test";

test("Successfully authorization", (async () => {
    const browser = await chromium.launch({
      headless: false,
      slowMo: 5000,
      devtools: true
    });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  expect(page.getByRole("heading", { name: "Мои курсы и профессии" })).toBeVisible;
  await page.waitForLoadState('load');
}),

test("Unsuccess authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("test@test.com");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("1q2w3e4r");
  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByTestId("login-error-hint")).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );
}))