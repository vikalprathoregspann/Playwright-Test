import { test } from "@playwright/test";
import { SignupPage } from "../pages/SignupPage";

test("Fill signup form on automationtesting.in", async ({ page }) => {
 let signupPage = new SignupPage(page);
  await signupPage.launch();
  await signupPage.enterEmailAndSubmit("vikalprathore@gspann.com");

  await signupPage.fillPersonalDetails(
    "Vikalp",
    "Rathore",
    "Swarnkar colony",
    "vikalprathore@gspann.com",
    "9691397060"
  );

  await signupPage.selectGenderAndHobby();
  await signupPage.selectLanguagesAndSkills();
  await signupPage.selectCountry();
  await signupPage.selectDOB("2001", "October", "7");
  await signupPage.setPassword("123456789");

  await signupPage.submitForm();

  await page.waitForTimeout(2000); // ✅ assertion placeholder


  
})

