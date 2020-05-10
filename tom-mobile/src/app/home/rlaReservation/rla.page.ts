
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from 'src/app/models/rlaModels/Region';
import { SousRegion } from 'src/app/models/rlaModels/SousRegions';
import { Transport } from 'src/app/models/rlaModels/Transport';
import { DistributionPrincipale } from 'src/app/models/rlaModels/DistributionPrincipale';
import { DistributionSecondaire } from 'src/app/models/rlaModels/DistributionSecondaire';
import { element } from 'protractor';

@Component({
  selector: 'app-rla',
  templateUrl: './rla.page.html',
  styleUrls: ['./rla.page.scss'],
})

export class RlaPage implements OnInit {

  tbColor = "primary"
  private baseUrl = 'http://192.168.1.7:8888/springboot-crud-rest/api/test/rg';
  regions: Observable<Region[]>;
  selectedRegion:Region;
  selectedSousRegion:SousRegion;
  sousRegions:SousRegion[];
  transports:any
  dPrincipales:any
  dSecondaires: any;
  trmap= new Map<number,number[]>();
  dpmap= new Map<number,number[]>();
  dsmap= new Map<number,number[]>();
  trValues:number[]
  dpValues:number[]
  dsValues:number[]
  tr:Transport
  hideTrKeys=true
  hideTrValues=true
  hideDpKeys=true
  hideDpValues=true
  btFill="solid"  
  hideDsKeys=true;
  hideDsValues=true;
  hide=true
  myTkButtonFills=[];
  myTrButtonFills=[];
  myTvButtonFills=[];
  myDpButtonFills=[];
  myDpkButtonFills=[];
  myDpvButtonFills=[];
  myDsButtonFills=[];
  myDskButtonFills=[];
  myDsvButtonFills=[];


  constructor(private http: HttpClient) {
  }
  getRegionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  ngOnInit() {
    this.regions = this.getRegionList();
    this.regions.forEach(element => {
      console.log(element)
    });
  }

  getSelectedRegion(){
    console.log(this.selectedRegion);
    this.sousRegions=this.selectedRegion.srprincipales
  }

 getSelectedSousRegion(){
    console.log(this.selectedSousRegion);
    this.transports=this.selectedSousRegion.transports
    this.dPrincipales=this.selectedSousRegion.dPrincipales
    this.dSecondaires=this.selectedSousRegion.dSecondaires
    this.hide=false
    for(var i in this.selectedSousRegion.transports ){
      this.myTrButtonFills.push('outline')
    }
    for(var j in this.selectedSousRegion.dPrincipales){
      this.myDpButtonFills.push('outline')
    }
    for(var k in this.selectedSousRegion.dSecondaires){
      this.myDsButtonFills.push('outline')
    }
   
    console.log(this.myTrButtonFills)
    
    
  }
  InitTr(){
    
  }
 
  getSelectedTransport(t :Transport,i:number) {
      console.log(t)
      this.trmap=t.trMap
      this.trValues=null
      console.log(this.trmap)
      this.hideTrKeys=false
      this.myTrButtonFills[i] = 'solid'
      for(var x in t.trMap){
      this.myTkButtonFills.push('outline')  
    }
    this.myTkButtonFills.push('outline') 
    //this.myTkButtonFills.push('outline')  
    this.myTkButtonFills.forEach(element=>{
      if(!(this.myTrButtonFills[i]===element)){
        this.myTrButtonFills.fill('outline')
        this.myTrButtonFills[i]='solid' }
  
    })
     
      console.log(this.myTkButtonFills)
  }
  getSelectedTrKey(key :number) {
    console.log(key)
    this. trValues=this.trmap[key] ;
    console.log(this.trValues)
    this.hideTrValues=false
    this.myTkButtonFills[key] = 'solid'
    this.trValues.forEach(element => {
      this.myTvButtonFills.push('outline')
    });
    this.myTvButtonFills.push('outline')
  this.myTkButtonFills.forEach(element=>{
    if(!(this.myTkButtonFills[key]===element)){
      this.myTkButtonFills.fill('outline')
      this.myTkButtonFills[key]='solid' }

  })
   
   
}
getSelectedTrValue(v:number){
  console.log(v)
  this.myTvButtonFills[v] = 'solid'
  this.myTvButtonFills.forEach(element=>{
    if(!(this.myTvButtonFills[v]===element)){
      this.myTvButtonFills.fill('outline')
      this.myTvButtonFills[v]='solid' }

  })
   
}
getSelectedDp(dp:DistributionPrincipale,i:number){
  console.log(dp)
  this.dpmap=dp.dpMap
  this.dpValues=null
  this.hideDpKeys=false
  this.myDpButtonFills[i] = 'solid'
// set all the keys Button of Distributions principale to outline
  for(var x in this.dpmap){
    this.myDpkButtonFills.push('outline')  
  }
  this.myDpkButtonFills.push('outline') 
// after click refresh the fill of Distribution principales names 
  this.myDpButtonFills.forEach(element=>{
    if(!(this.myDpButtonFills[i]===element)){
      this.myDpButtonFills.fill('outline')
      this.myDpButtonFills[i]='solid' }

  })
  
}
getSelectedDpKey(key:number){
  this.dpValues=this.dpmap[key] ;
  this.hideDpValues=false

  this.myDpkButtonFills[key] = 'solid'
    this.dpValues.forEach(element => {
      this.myDpvButtonFills.push('outline')
    });
    this.myDpvButtonFills.push('outline')
  this.myDpkButtonFills.forEach(element=>{
    if(!(this.myDpkButtonFills[key]===element)){
      this.myDpkButtonFills.fill('outline')
      this.myDpkButtonFills[key]='solid' }

  })
  
}
getSelectedDpValue(v:number){
  console.log(v)
  this.myDpvButtonFills[v] = 'solid'
  this.myDpvButtonFills.forEach(element=>{
    if(!(this.myDpvButtonFills[v]===element)){
      this.myDpvButtonFills.fill('outline')
      this.myDpvButtonFills[v]='solid' }

  })
}

getSelectedDs(ds:DistributionSecondaire,i:number){
  console.log(ds)
  this.dsmap=ds.dsMap
  this.dsValues=null
  this.hideDsKeys=false
  this.myDsButtonFills[i] = 'solid'
      for(var x in ds.dsMap){
      this.myDskButtonFills.push('outline')  
    }
    this.myDskButtonFills.push('outline') 
    //this.myTkButtonFills.push('outline')  
    this.myDsButtonFills.forEach(element=>{
      if(!(this.myDsButtonFills[i]===element)){
        this.myDsButtonFills.fill('outline')
        this.myDsButtonFills[i]='solid' }
      })

  
}
getSelectedDsKey(key:number){
  this.dsValues=this.dsmap[key] ;
  this.hideDsValues=false

  this.myDskButtonFills[key] = 'solid'
    this.dsValues.forEach(element => {
      this.myDsvButtonFills.push('outline')
    });
    this.myDsvButtonFills.push('outline')
  this.myDskButtonFills.forEach(element=>{
    if(!(this.myDskButtonFills[key]===element)){
      this.myDskButtonFills.fill('outline')
      this.myDskButtonFills[key]='solid' }

  })
   
}
getSelectedDsValue(v:number){
  console.log(v)
  this.myDsvButtonFills[v] = 'solid'
  this.myDsvButtonFills.forEach(element=>{
    if(!(this.myDsvButtonFills[v]===element)){
      this.myDsvButtonFills.fill('outline')
      this.myDsvButtonFills[v]='solid' }

  })
}





}