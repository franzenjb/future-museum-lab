import { expect, test } from "@playwright/test";

test("core routes render", async ({ page }) => {
  for (const path of ["/", "/paper", "/outline", "/lab", "/conversation"]) {
    await page.goto(path);
    await expect(page.getByRole("link", { name: "Future Museum Lab" })).toBeVisible();
  }
});

test("homepage is a threshold into the essay", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "The Future Art Museum" }),
  ).toBeVisible();
  await expect(page.getByText("Technology is dismantling all three")).toBeVisible();
  await page.getByRole("link", { name: "Enter the Lab" }).click();
  await expect(page.locator("#essay")).toBeInViewport();
});

test("slow looking room stages prompts", async ({ page }) => {
  await page.goto("/slow-looking");
  await expect(page.getByRole("heading", { name: /Stay with one image/i })).toBeVisible();
  await expect(page.getByText("What do you notice first?")).toBeVisible();
  await page.getByRole("button", { name: "Begin" }).click();
  await expect(page.getByText("00:59")).toBeVisible({ timeout: 2500 });
});
