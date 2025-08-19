export class SignupPage {
  

  constructor(page) {
    this.page = page;

    this.emailInput = page.getByRole("textbox", { name: "Email id for Sign Up" });
    this.logoLink = page.getByRole("link", { name: "logo" });
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.address = page.locator("textarea");
    this.email = page.locator('input[type="email"]');
    this.phone = page.locator('input[type="tel"]');
    this.genderMale = page.getByRole("radio", { name: "Male", exact: true });
    this.hobbyCheckbox = page.locator("#checkbox1");
    this.languageDropdown = page.locator("#msdd");
    this.skillsDropdown = page.locator("#Skills");
    this.countryIndia = page.getByRole("treeitem", { name: "India" });
    this.yearDropdown = page.locator("#yearbox");
    this.monthDropdown = page.locator('select[placeholder="Month"]');
    this.dayDropdown = page.locator("#daybox");
    this.password = page.locator("#firstpassword");
    this.confirmPassword = page.locator("#secondpassword");
    this.submitBtn = page.getByRole("button", { name: "Submit" });
  }

  // 👉 Methods
  async launch() {
    await this.page.goto("https://demo.automationtesting.in/");
  }

  async enterEmailAndSubmit(email) {
    await this.emailInput.fill(email);
    await this.emailInput.press("Enter");
  }

  async fillPersonalDetails(first, last, addr, mail, phone) {
    await this.logoLink.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.address.fill(addr);
    await this.email.fill(mail);
    await this.phone.fill(phone);
  }

  async selectGenderAndHobby() {
    await this.genderMale.check();
    await this.hobbyCheckbox.check();
  }

  async selectLanguagesAndSkills() {
    await this.languageDropdown.click();
    await this.page.getByText("French").click();
    await this.skillsDropdown.selectOption("Java");
  }

  async selectCountry() {
    await this.countryIndia
  }

  async selectDOB(year, month, day) {
    await this.yearDropdown.selectOption(year);
    await this.monthDropdown.selectOption(month);
    await this.dayDropdown.selectOption(day);
  }

  async setPassword(pass) {
    await this.password.fill(pass);
    await this.confirmPassword.fill(pass);
  }

  async submitForm() {
    await this.submitBtn.click();
  }
}
