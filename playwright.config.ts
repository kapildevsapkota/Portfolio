import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  use: {
    browserName: 'chromium',
    headless: true,
  },
  reporter: 'list',
});