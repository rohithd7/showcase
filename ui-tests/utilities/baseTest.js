import { test as baseTest } from '@playwright/test';
import pageFixtures from '../pages/page.fixture';
export const test = baseTest.extend({ ...pageFixtures });

export { expect, request, page } from '@playwright/test';
