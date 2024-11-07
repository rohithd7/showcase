import ContactPage from "./marketingContact.page";

export default pageFixtures = {
    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page))
    }
}