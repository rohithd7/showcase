import {test,expect} from '../utilities/baseTest'

test('[Create] Submit form in marketpage', async(contactPage)=>{
    const submitForm = await contactPage.submitForm()
})

test('[Create] Submit form given Number of time in marketpage', async(contactPage)=>{
    const submitForm = await contactPage.multipleFormSubmit(Math.floor(Math.random() * 10))
})