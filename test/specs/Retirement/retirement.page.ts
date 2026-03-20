import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
export class retirementPage {
    get age() { return $(`//input[@id='current-age']`); }
    get retireage() { return $(`//input[@id='retirement-age']`); }
    get currincome() { return $(`//input[@id='current-income']`); }
    get spouseincome() { return $(`//input[@id='spouse-income']`); }
    get currretirementsavings() { return $(`//input[@id='current-total-savings']`); }
    get currannsavings() { return $(`//input[@id='current-annual-savings']`); }
    get savingsrates() { return $(`//input[@id='savings-increase-rate']`); }
    get yesradio() { return $(`(//label[contains(text(),'Yes')])[1]`); }
    get noradio() { return $(`(//label[contains(text(),'NO')])[1]`); }
    get maritalstatus() { return $(`//fieldset[@id='marital-status-toggle-group']`); }
    get maritalstatuslabel() { return $(`//legend[@id='marital-status-label']`); }
    get Marriedlabel() { return $(`//label[contains(text(),'Married')]`); }
    get SSOverideamt() { return $(`//input[@id='social-security-override-container']`); }
    get SSOlabel() { return $(`//label[contains(text(),'Social Security override amount')]`); }
    get Calculatebtn() { return $(`(//button[contains(text(),'Calculate')])[1]`); }

    get Resultstext() { return $(`//h3[contains(text(),'Results')]`); }
    get reschart() { return $(`//canvas[@role='img']`); }
    get congratulations() { return $(`//p[contains(text(),'Congratulations')]`); }
    get editinfo() { return $(`//button[contains(text(),'Edit info')]`); }

    get mandatoryfields() { return $(`(//p[contains(text(),'Please fill out all required fields')])[2]`); }

}

