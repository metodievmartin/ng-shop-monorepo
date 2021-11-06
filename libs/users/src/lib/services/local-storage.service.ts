import { Injectable } from '@angular/core';

const TOKEN = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setToken(data: string) {
    localStorage.setItem(TOKEN, data);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }

  isValidToken() {
    const token = this.getToken();
    if (token) {
      const tokenDecoded = JSON.parse(atob(token.split('.')[1]));
      return !this._tokenExpired(tokenDecoded.exp);
    }

    return false;
  }

  private _tokenExpired(expiration: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration;
  }

  getUserIdFromToken(): string {
    const token = this.getToken();
    if (token) {
      const tokenDecoded = JSON.parse(atob(token.split('.')[1]));
      return tokenDecoded.id;
    }

    return '-1';
  }
}
