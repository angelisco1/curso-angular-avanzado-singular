import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private swPush: SwPush, private http: HttpClient) {
    this.pedirPermisoNotificaciones()
  }

  private pedirPermisoNotificaciones() {
    this.swPush.requestSubscription({
      serverPublicKey: 'BLw4jvUjSb_irjEeAXwVf0Nn0rZ0wlcjjUM15Ze5TAnJzz6MAzWIpCANnivGli2FWgCYx3OUI1Ey7gMl3VhofwA'
    })
      .then((suscripcion: PushSubscription) => {
        console.log(suscripcion)
        // this.http.post()
      })
  }


}
