import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appPath = path.resolve(__dirname, '../index.html');
const appUrl = 'file://' + appPath;

test('loads, renders canvas, and exposes production controls', async ({ page }) => {
  await page.goto(appUrl);
  await expect(page.locator('h1')).toContainText('KNOT Boundary Field Lab');
  await expect(page.locator('#fieldCanvas')).toHaveAttribute('role', 'img');
  await expect(page.locator('#timeline')).toHaveAttribute('role', 'log');
  await expect(page.locator('#performanceModeBtn')).toBeVisible();
  await expect(page.locator('#themeToggle')).toBeVisible();
  await expect(page.locator('#restoreAutosave')).toBeVisible();
  await expect(page.locator('#hFps')).toBeVisible();
});

test('self-test and production-test panels are separated', async ({ page }) => {
  await page.goto(appUrl);
  await page.locator('#runSelfTest').click();
  await expect(page.locator('#tests')).toContainText('summary');
  await page.locator('#prodTest').click();
  await expect(page.locator('#productionTests')).toContainText('test result arrays separated');
  await expect(page.locator('#tests')).toContainText('finite conservation run');
  await expect(page.locator('#tests')).toContainText('numeric recovery counter works');
});

test('performance mode toggles and 256 resolution forces reduced frame pressure', async ({ page }) => {
  await page.goto(appUrl);
  await page.locator('#performanceModeBtn').click();
  await expect(page.locator('#performanceModeBtn')).toContainText('On');
  await page.selectOption('#resolutionSelect', '256');
  await expect(page.locator('#performanceNote')).toContainText('256×256');
});

test('theme toggle and pause autosave expose state', async ({ page }) => {
  await page.goto(appUrl);
  await page.locator('#themeToggle').click();
  await expect(page.locator('#themeToggle')).toContainText('Light');
  await page.locator('#runPause').click();
  await expect(page.locator('#hAutosave')).toContainText('saved');
});

test('exported JSON is valid and includes field arrays', async ({ page }) => {
  await page.goto(appUrl);
  const state = await page.evaluate(() => serializeState());
  expect(state.version).toBe('V9.1.1');
  expect(state.field.u.length).toBe(state.resolution * state.resolution);
  expect(state.integrity.trajectoryLiveLimit).toBe(100);
  expect(state.integrity.trajectoryArchiveLimit).toBe(50);
});
