import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    utente!: Auth | null;
    userNameDetails: string | undefined;
    userSurnameDetails: string | undefined;
    userUsernameDetails: string | undefined;
    userEmailDetails: string | undefined;
    userImageUrl: string | undefined;

    constructor(private authSrv: AuthService) {}

    //recupero dati dell'utente loggato
    ngOnInit(): void {
        // this.authSrv.user$.subscribe((_utente) => {
        //     this.utente = _utente;
        // });
        const userDetails = localStorage.getItem('kakUser');

        if (userDetails) {
            const userDataDetails = JSON.parse(userDetails);
            this.userNameDetails = userDataDetails.name;
            this.userEmailDetails = userDataDetails.email;
            this.userSurnameDetails = userDataDetails.surname;
            this.userUsernameDetails = userDataDetails.username;
            this.userImageUrl = userDataDetails.avatarUrl;
        } else {
            console.log('No kakUser data found in local storage');
        }
    }
}
