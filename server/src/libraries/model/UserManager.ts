import { User } from "../interfaces/User.interface";
import { Email } from "./Email";
import axios from "axios";
import { TokenManager } from "./TokenManager";
import { Gender, TokenType } from "./Types";

export abstract class UserManager implements User {
  userId: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  userName: string;
  email: Email;
  isLocked?: boolean;
  tokenState: TokenManager;

  constructor(
    userId: number,
    firstName: string,
    lastName: string,
    gender: Gender,
    userName: string,
    email: Email
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.userName = userName;
    this.email = email;
    this.isLocked = true;
    this.tokenState = new TokenManager();
  }

  /**
   * A private method that generates a random string of a specified length.
   *
   * @param length - A number representing the desired length of the random string.
   *
   * @returns A string of random characters of the specified length.
   */
  private _generateRandomString(length: number): string {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  /**
   * A public asynchronous method that sends a verification email to the user.
   *
   * GET verifyEmail
   * @returns A Promise that resolves to void when the email has been sent successfully.
   */
  public async sendVerificationEmail(): Promise<void> {
    try {
      const email = this.email.value;
      const token = this._generateRandomString(6);
      this.tokenState.setToken('VerifyEmail', token, 5 * 60 * 1000);
      const response = await axios.get(
        `http://yourserver.com/verifyEmail?email=${email}&token=${token}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * A public asynchronous method that sends a forgot password email to the user.
   *
   * GET forgotPasswordEmail
   * @returns A Promise that resolves to void when the email has been sent successfully.
   */
  public async sendForgotPasswordEmail(): Promise<void> {
    try {
      const email = this.email.value;
      const response = await axios.get(
        `http://yourserver.com/forgotPasswordEmail?email=${email}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * A method that verifies a user provided token against the stored token.
   * 
   * @param id A TokenType enum representing the type of token to verify
   * @param token The user provided token to verify against the stored token
   * 
   * @returns A boolean representing whether the token is valid
   */
  public verifyToken(id: TokenType, token: string): boolean {
    return this.tokenState.getToken(id) === token;
  }
}
