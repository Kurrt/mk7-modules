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
        {value: 'none', viewValue: 'None - RECOMMENDED'},
        {value: 'psk2+tkip+ccmp', viewValue: 'WPA2 Personal (psk2+tkip+ccmp)'},
        {value: 'psk2+tkip+aes', viewValue: 'WPA2 Personal (psk2+tkip+aes)'},
        {value: 'psk2+tkip', viewValue: 'WPA2 Personal (psk2+tkip)'},
        {value: 'psk2+ccmp', viewValue: 'WPA2 Personal (psk2+ccmp) - RECOMMENDED'},
        {value: 'psk2+aes', viewValue: 'WPA2 Personal (psk2+aes)'},
        {value: 'psk2', viewValue: 'WPA2 Personal (psk2)'},
        {value: 'psk+tkip+ccmp', viewValue: 'WPA Personal (psk+tkip+ccmp)'},
        {value: 'psk+tkip+aes', viewValue: 'WPA Personal (psk+tkip+aes)'},
        {value: 'psk+tkip', viewValue: 'WPA Personal (psk+tkip)'},
        {value: 'psk+ccmp', viewValue: 'WPA Personal (psk+ccmp)'},
        {value: 'psk+aes', viewValue: 'WPA Personal (psk+aes)'},
        {value: 'psk', viewValue: 'WPA Personal (psk)'},
        {value: 'psk-mixed+tkip+ccmp', viewValue: 'WPA/WPA2 Personal (psk-mixed+tkip+ccmp)'},
        {value: 'psk-mixed+tkip+aes', viewValue: 'WPA/WPA2 Personal (psk-mixed+tkip+aes)'},
        {value: 'psk-mixed+tkip', viewValue: 'WPA/WPA2 Personal (psk-mixed+tkip)'},
        {value: 'psk-mixed+ccmp', viewValue: 'WPA/WPA2 Personal (psk-mixed+ccmp)'},
        {value: 'psk-mixed+aes', viewValue: 'WPA/WPA2 Personal (psk-mixed+aes)'},
        {value: 'psk-mixed', viewValue: 'WPA/WPA2 Personal (psk-mixed)'},
        {value: 'wep+open', viewValue: 'WEP Open'},
        {value: 'wep+shared', viewValue: 'WEP Shared'}
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
