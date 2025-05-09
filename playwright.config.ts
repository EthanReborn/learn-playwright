import type { PlaywrightTestConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config: PlaywrightTestConfig = {
  testMatch: ["tests/alert.test.ts"],

  use: {
    headless: false, //actually displays the test instead of running in background
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  retries: 0,
  reporter: [
    ["dot"], 
    ["json", {
      outputFile: "jsonReports/jsonReport.json"
    }],
    ["html", {
      open: "always"
    }],
  ],

}

export default config;
