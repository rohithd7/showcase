import BasePage from './base.page'
import { faker } from '@faker-js/faker'

export default class ContactPage extends BasePage {
    constructor(page) {
        super(page)
    }

    firstNameTextArea = () => this.page.locator('[name="firstname"]').first()
    lastNameTextArea = () => this.page.locator('[name="lastname"]').first()
    companyNameTextArea = () => this.page.locator('[name="company"]').first()
    emailIdTextArea = () => this.page.locator('[name="email"]').first()
    noOfLocationsTextArea = () => this.page.locator('[name="number_of_locations"]').first()
    totalUnitsTextArea = () => this.page.locator('[name="units__c"]').first()
    phoneNumberTextArea = () => this.page.locator('[name="hubspot_phone_number"]').first()
    submitButton = () => this.page.locator('.hs-button.primary.large').first()

    submitForm = async () => {
        await this.navigateIfNecessary('what-you-get')
        await this.verifyTitle('Self-Storage Marketing: Fill Empty Units, Make More Money')
        await this.firstNameTextArea().fill(faker.person.firstName())
        await this.lastNameTextArea().fill(faker.person.lastName())
        await this.companyNameTextArea().fill(faker.company.name())
        await this.noOfLocationsTextArea().fill(faker.number.int({ min: 10, max: 100 }))
        await this.totalUnitsTextArea().fill(faker.number.int({ min: 10, max: 100, multipleOf: 10 }))
        await this.phoneNumberTextArea().fill(faker.phone.number({ style: 'national' }))
        await this.submitButton().click()
        await this.page.waitForNetworkIdle();
    }

    multipleFormSubmit = async (maxNo) => {

        for (let index = 1; index < maxNo; index++) {
            await this.submitForm()

        }
    }

}