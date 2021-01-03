import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


interface SecurityType {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'lib-SecretSettings',
    templateUrl: './SecretSettings.component.html',
    styleUrls: ['./SecretSettings.component.css']
})
export class SecretSettingsComponent implements OnInit {
    constructor(private API: ApiService) { }

    securityTypes: SecurityType[] = [
        {value: 'none', viewValue: 'None'},
        {value: 'wep', viewValue: 'WEP'},
        {value: 'wpa', viewValue: 'WPA'},
        {value: 'wpa2', viewValue: 'WPA2'},
        {value: 'wpa3', viewValue: 'WPA3'}
    ];

    interfaces: string[] = [
        "wlan0",
        "wlan1",
        "wlan2"
    ];


    saveOpenAP(): void {
        console.log("saveOpenAP");
    }


    saveManagementAP(): void {
        console.log("saveManagementAP");
    }


    savePineAP(): void {
        console.log("savePineAP");
    }


    ngOnInit() {
    }
}
