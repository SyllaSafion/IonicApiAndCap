import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Plugins } from '@capacitor/core';
const { Geolocation, Network } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http:HttpClient) {}

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    
  }
  async getNetwork(){
    const staus = await Network.getStatus();
    console.log('network status', status)
  }


  ionViewWillEnter(){
    console.log('hsjn')
    this.getCurrentPosition();
    this.getNetwork()
    const URL = ('https://api.chucknorris.io/jokes/random');
     

      this.http.get(URL).subscribe((data)=>{
        console.log(data)

      })
    
  }

}
