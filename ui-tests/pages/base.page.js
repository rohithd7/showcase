import { page, expect } from '@playwright/test'

export default class BasePage {
    constructor(page) {
        this.page = page
    }
    navigateTo = async () => {
        await this.page.goto(url)
    }

    verifyTitle = async (expectedTitle) => {
        await expect(this.page).toHaveTitle(expectedTitle)
    }

    navigateIfNecessary = async (expectedPathUrl) => {
        const currentUrl = await this.page.url()
        if (!currentUrl.includes(expectedPathUrl)) {
            await this.navigateTo(`./${expectedPathUrl}`);
        }
    }
}