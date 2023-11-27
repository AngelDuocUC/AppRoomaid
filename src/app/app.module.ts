import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment'

import { GiphyService } from './giphy.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},GiphyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
