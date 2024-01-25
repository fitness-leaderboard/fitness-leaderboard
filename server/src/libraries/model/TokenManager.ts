import { TokenType } from "./Types";

export class TokenManager {
  private token : Map<string, string>;

  constructor() { 
    this.token = new Map<string, string>();
  }

  setToken(id: TokenType, token: string, timeout: number | null): void {
    this.token.set(id, token);
    console.log(`Token ${id} with value ${token} will expire in ${timeout ? timeout/1000 : 'null'} seconds`);

    if(timeout) {
      setTimeout(() => {
        this.clearToken(id);
        console.log('Token cleared after 5 minutes');
      }, timeout);
    }
  }

  hasToken(id: TokenType): boolean {
    return this.token.has(id);
  }

  getToken(id: TokenType): string | undefined {
    if(!this.hasToken(id)) {
      throw new Error(`Token ${id} does not exist`);
    }
    return this.token.get(id);
  }

  clearToken(id: TokenType): void {
    this.token.delete(id);
  }

  isEmpty(): boolean {
    return this.token.size === 0;
  }
}