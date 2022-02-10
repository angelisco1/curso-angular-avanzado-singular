import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiUniversalService } from '../api-universal.service';
import { TokenService } from '../token.service';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup
  isLoggedIn: boolean = false
  datosUniversal$!: Observable<any>

  constructor(private apiUniversal: ApiUniversalService, private tokenService: TokenService) {
    this.formLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.tokenService.tokenEvent$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn
      this.datosUniversal$ = this.apiUniversal.getDatos()
    })
  }

  login() {
    const datosForm = this.formLogin.value
    this.apiUniversal.login(datosForm)
      .subscribe((resp) => {
        const { token } = resp
        const payload: any = jwtDecode(token)
        console.log({payload})
        this.tokenService.payloadEvent$.emit(payload.nombre)
        this.tokenService.setToken(token)
      })
  }

  logout() {
    this.tokenService.removeToken()
  }

}
