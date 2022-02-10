import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenKey: string = 'jwt'
  tokenEvent$ = new EventEmitter<boolean>()
  payloadEvent$ = new EventEmitter<string>()

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
    // sessionStorage.setItem(this.tokenKey, token)
    this.tokenEvent$.emit(true)
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey)
    this.tokenEvent$.emit(false)
  }
}
