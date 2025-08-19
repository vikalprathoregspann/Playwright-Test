import{ test as base, expect } from '@playwright/test';
import {SignupPage} from '../pages/SignupPage';

export const test = base.extend({


SignupPage : async ({ page }, use) => {
    await use(new SignupPage(page));

}

})
export { expect } // Export expect to use in tests
