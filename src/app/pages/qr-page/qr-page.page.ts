import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.page.html',
  styleUrls: ['./qr-page.page.scss'],
})
export class QrPagePage implements OnDestroy {

  qrString= "https://github.com/Cordobo/angularx-qrcode"
  scannedResult: any;
  content_visibility = '';

  constructor(private alertController: AlertController,private router: Router) { } // Inyecta AlertController
  
  async checkPermission(): Promise<boolean> {
  try {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      // the user granted permission
      return true;
    } else {
      // Handle the case where permission is not granted
      return false;
    }
  } catch (e) {
    console.log(e);
    // Handle any errors that occur during the permission check
    return false; // You can return a default value or handle the error appropriately
  }
}

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      // document.querySelector('body').classList.add('scanner-active');
      // this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      // document.querySelector('body').classList.remove('scanner-active');
      // this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    // document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
      this.stopScan();
  }


  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Seguro que quieres darle acceso a la App "Roomaid" a tu cámara?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Manejar la acción de cancelar aquí
          },
        },
        {
          text: 'OK',
          handler: () => {
            // Manejar la acción OK aquí
          },
        },
      ],
    });

    await alert.present();
  }

  navigateTohome() {
    this.router.navigate(['tabs/settings'])
  }
}
