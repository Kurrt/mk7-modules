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

    module_name: string = 'SecretSettings';
    interfaces: string[] = [];


    loading = {
        'settings': true,
        'interfaces': true,
        'managementAP': true,
        'openAP': true,
        'pineAP': true
    }

    saveOpenAP(): void {
        console.log("saveOpenAP");
    }


    saveManagementAP(): void {
        console.log("saveManagementAP");
    }


    savePineAP(): void {
        console.log("savePineAP");
    }

    loadSettings(): void {
        this.makeAPICall('load_settings', (response) => {
            console.log(response);
            this.settingsLoaded();
        });
    }

    loadInterfaces(): void {
        this.makeAPICall('load_interfaces', (response) => {
            this.interfaces = response;
            this.interfacesLoaded();
        });
    }

    makeAPICall(action: string, callback): void {
        return this.API.request({
            module: this.module_name,
            action: action
        }, (response) => {
            if (response) {
                if (response.error !== undefined)
                    this.handleError(response.error);
                else
                    callback(response);
            } else {
                this.handleError('No response from the module. (Call: '+action+')');
            }
        });
    }

    handleError(error: string): void {
        console.log(error);
    }

    settingsLoaded(): void {
        this.loading.settings = false;
        this.loading.managementAP = false;
        this.loading.openAP = false;
    }

    interfacesLoaded(): void {
        this.loading.interfaces = false;
        this.loading.pineAP = false;
    }


    ngOnInit() {
        this.loadSettings();
        this.loadInterfaces();
    }
}
