

import { retirementPage } from './retirement.page';
import { formData } from './retirement.data';

const Retire: retirementPage = new retirementPage();
const form = formData;


export class Retirementfunction {

    public async openURL() {
        try {
            await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
        }

        catch (error) {
            console.error('Unable to launch the URL', error);
            fail(error);
        }
    }

    public async mandatorydetails() {
        try {
            await Retire.age.waitForDisplayed();
            await Retire.Calculatebtn.click();
            expect((await Retire.mandatoryfields.getText())).toContain(form.mandatoryfields); //Please fill out all required fields
        }
        catch (error) {
            console.error('Error while filling the form', error);
            fail(error);
        }
    }


    public async formDetails() {
        try {
            await Retire.age.setValue(form.age);
            await Retire.retireage.setValue(form.retirementAge);

            browser.keys('Tab');
            await Retire.currincome.setValue(form.income); //What is your current annual income?
            browser.keys('Tab');
            browser.keys('Tab');
            await Retire.spouseincome.setValue(form.spouse); //What is your spouse's annual income? 
            browser.keys('Tab');
            browser.keys('Tab');
            await Retire.currretirementsavings.setValue(form.retirementsavings); //What is your current retirement savings balance?
            browser.keys('Tab');
            browser.keys('Tab');
            await Retire.currannsavings.setValue(form.retirementcontribution);  //How much are you currently saving each year for retirement? 
            browser.keys('Tab');
            browser.keys('Tab');
            await Retire.savingsrates.setValue(form.annualretirementcontribution); //What is the rate of increase in your savings each year?


            await Retire.yesradio.click();
            await Retire.maritalstatus.isDisplayed();
            expect((await Retire.maritalstatuslabel.getText())).toContain(form.label1); //What is your marital status?
            await Retire.Marriedlabel.click();

            await Retire.SSOlabel.isDisplayed();
            expect((await Retire.SSOlabel.getText())).toContain(form.SSOLabel); //Social Security override amount

            await Retire.Calculatebtn.click();

            await Retire.Resultstext.waitForDisplayed();
            expect((await Retire.congratulations.getText())).toContain(form.Congratulations);

            await Retire.editinfo.click();
            await Retire.age.waitForDisplayed();

        }
        catch (error) {
            console.error('Error while filling the form', error);
            fail(error);
        }
    }


    public async negativescenarios() {
        expect(Retire.age.setValue(form.randomtext)).not.toContain(form.randomtext);
        expect(Retire.retireage.setValue(form.randomtext)).not.toContain(form.randomtext);
    }

    public async updateform() {
        try {

            await Retire.age.setValue(form.updateage);
            await Retire.retireage.setValue(form.updateretirementAge);

            await Retire.Calculatebtn.click();

            await Retire.Resultstext.waitForDisplayed();

        }
        catch (error) {
            console.error('Error while updating the form', error);
            fail(error);
        }
    }

}