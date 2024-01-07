import UIActions from '../helpers/UIActions';
import UIElementActions from '../helpers/UIElementActions';

export default class LandingPage {
  inputTheFirstName(arg0: string) {
    throw new Error('Method not implemented.');
  }
  inputFirstName(arg0: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private web: UIActions) {}

  private readonly _LOGIN_BUTTON: string = '#login-button';

  public async navigateToHomePage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/');
  }

  public async inputUsername(username: string): Promise<void> {
    await this.web.fill('#user-name', username);
  }

  public async inputPassword(password: string): Promise<void> {
    await this.web.fill('#password', password);
  }

  public async clickLoginButton(): Promise<void> {
    await this.web.click(this._LOGIN_BUTTON);
  }


}
