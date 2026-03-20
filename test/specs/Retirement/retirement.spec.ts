import { Retirementfunction } from './retirement.function';

describe('1. Retirement Test', () => {

    const retire = new Retirementfunction();

    it('should fill retirement form', async () => {
        await retire.openURL();
        await retire.mandatorydetails();
        await retire.formDetails();
        await retire.negativescenarios();
        await retire.updateform();
    });

});