import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute} from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { RequestService } from '../../../services/app.request';
import { AngularFireDatabase } from 'angularfire2/database'; // Autenticación con google
import { AngularFireAuth } from 'angularfire2/auth'; // Autenticación con google
import * as firebase from 'firebase'; // Autenticación con google

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [RequestService, LoginService]
})

export class LoginComponent implements OnInit {


  authState: any = null;
  public cargador:boolean = false;
  public loaded:boolean = false;
  @Input() show;
  @Output() state = new EventEmitter;
  correo:string = '';

  constructor(
    private serviceLogin: LoginService,
    private serviceRequest: RequestService,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private loginService: LoginService,
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private route: ActivatedRoute
  ){    
      // this.afAuth.authState.subscribe((auth) => {
      //   this.authState = auth
      // });
   }
   
   ngOnInit(){

     setTimeout(
       ()=>{ this.loaded = true }
       ,1000);
     
    if(this.loginService.validateSession()){
      //this.router.navigate(['ejecutivo']);
      let data = this.loginService.getSession();
      if(data.idRol== 1){
        // this.router.navigate(['ejecutivo']);
      }else if(data.idRol== 2) {
        // this.router.navigate(['pmo']);
      }else if(data.idRol== 3){
        // this.router.navigate(['usuario']);
      }
      //this.document.body.classList.remove('login');
    }else{
      this.document.body.classList.add('login');
    }
   }
// // Returns true if user is logged in
//     get authenticated(): boolean {
//       return this.authState !== null;
//     }
//    // Returns current user data
//     get currentUser(): any {
//       return this.authenticated ? this.authState : null;
//     }
  
//     // Returns
//     get currentUserObservable(): any {
//       return this.afAuth.authState
//     }
  
//     // Returns current user UID
//     get currentUserId(): string {
//       return this.authenticated ? this.authState.uid : '';
//     }
  
//     // Anonymous User
//     get currentUserAnonymous(): boolean {
//       return this.authenticated ? this.authState.isAnonymous : false
//     }
  
//     // Returns current user display name or Guest
//     get currentUserDisplayName(): string {
//       if (!this.authState) { return 'Guest' }
//       else if (this.currentUserAnonymous) { return 'Anonymous' }
//       else { return this.authState['displayName'] || 'User without a Name' }
//     }


    login($event) {
      // const provider = new firebase.auth.GoogleAuthProvider()
      this.cargador = !this.cargador;
      this.state.emit($event)
      // return this.socialSignIn(provider);
    }
  
    // private socialSignIn(provider) {
    //   return this.afAuth.auth.signInWithPopup(provider)
    //     .then((credential) =>  {
    //         this.authState = credential.user
    //         this.updateUserData()
    //         if (!this.authState.emailVerified){
    //           //console.log("no se ha generado la autenticación");
    //         }else{
    //           //console.log(this.authState.email);
    //           //console.log(this.authState.displayName);
    //           this.serviceRequest.get('app.php',{ accion: 'login', correo: this.authState.email })
    //               .subscribe(
    //               (result) => {
    //                 //console.log(result);
    //                 switch (result.error) {
    //                   case 0:
    //                     break;
    //                   case 1:
    //                     break;
    //                   case 2: //Error 2: No es correo corporativo
    //                     break;
    //                   case 3: //Error 3: datos request incorrectos
    //                     break;
    //                   case 4: //Error 4: El usuario no existe se procede a crearlo
    //                       this.serviceRequest.get('app.php',{ accion: 'setCreaUsuario',correo: this.authState.email,nombre:this.authState.displayName})
    //                       .subscribe(
    //                       (result) => {
    //                         //this.toast.closeLoader();
    //                         switch (result.error) {
    //                           case 0:
    //                             // Error 1: Se crea el usuario
    //                             break;
    //                           case 1:
    //                             // Error 2: Problema al crear el registro
    //                             break;
    //                         }
    //                       },
    //                       (error) =>  {
    //                         //this.toast.closeLoader();
    //                         console.log(error)
    //                       });
    //                     break;
    //                   case 5: //Error 5: El usuario tiene asignado minimo un rol
    //                       this.document.body.classList.remove('login');
    //                       this.serviceLogin.setSession(result.data[0]);
    //                       //console.log(result.data[0]);
    //                       if(result.data[0].idRol== 1){ //Rol 1 Ejecutivo
    //                         window.location.href = "#ejecutivo";
    //                         this.router.navigate(['ejecutivo']);
    //                       }else if(result.data[0].idRol== 2){ //Rol 2 PMO
    //                         window.location.href = "#pmo";
    //                         this.router.navigate(['pmo']);
    //                       }else if(result.data[0].idRol== 3){ //Rol 3 Usuario
    //                         window.location.href = "#usuario";
    //                         this.router.navigate(['usuario']);
    //                       }
    //                     break;
    //                   case 6: //Error 6:El usuario no tiene un rol asignado
    //                     break;
    //                 }
    //               },
    //               (error) =>  {
    //                 console.log(error)
    //               });
    //         }
            
    //     })
    //     .catch(error => console.log(error));
    // }
    
   
    // //// Helpers ////
    // private updateUserData(): void {
    // // Writes user name and email to realtime db
    // // useful if your app displays information about users or for admin features
    //   let path = `users/${this.currentUserId}`; // Endpoint on firebase
    //   let data = {
    //                 email: this.authState.email,
    //                 name: this.authState.displayName
    //               }
  
    //   this.db.object(path).update(data)
    //   .catch(error => console.log(error));
  
    // }

}
