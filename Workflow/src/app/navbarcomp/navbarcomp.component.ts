import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serv1Service } from '../services/serv1.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.scss'],
})
export class NavbarcompComponent  implements OnInit {
  inpvalu_array:number[]=[];
  @Input() val1=true;
  @Input() val2=true;
  @Input() val3=true;
   userInput!: string;
   Input!:number;
  //  selectedRule!:string;
   selectedValue!: string;
   selectedRule!:string;
   mapData: Map<number, object> = new Map<number, object>();

  constructor(private myserv1:Serv1Service, private alertcontroller:AlertController) { }
  items = this.myserv1.seritems;
  ngOnInit() {}

  onInpch()
  {
    console.log(this.userInput);
  }

  onInpch2()
  {
    console.log(this.Input);
  }

  onclick3()
  {
    console.log('Save');
  }
  

  async onclick4() {

    this.inpvalu_array.push(this.Input as number);
    const serArray = this.items;

    localStorage.setItem('serData',JSON.stringify(serArray));
    const mapArray = JSON.parse(localStorage.getItem('mapData') || '{}');

    this.mapData = new Map<number,object>(mapArray);
     this.items.forEach((item:number)=>{
         const temp = this.mapData.get(item);
         const a = Number((temp as any).discount);
         const type = Number((temp as any).discount_type);
         if(type==1)
         {
          this.Input = this.Input - ((a*0.01)*this.Input);
          this.inpvalu_array.push(this.Input);
         }
         else if(type==2)
         {
          this.Input = this.Input - a;
          this.inpvalu_array.push(this.Input);
         }
        });

    console.log(this.Input);
    //  this.myserv1.inpch_array = this.inpvalu_array;
    console.log(this.myserv1.inpch_array);
    localStorage.setItem('inpch_Data',JSON.stringify(this.inpvalu_array));



    const a = this.Input as unknown as string;
    const alert = await this.alertcontroller.create({
      header: 'Workflow Executed',
      message: 'Output is '+ a,
      buttons: [
        {
          text: 'Download',
          handler: () => {
            // Handle the redirect action here
            // Replace 'destination' with the URL of the page you want to redirect to
            window.location.href = 'page5';
          }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => {
            // Handle the dismiss action here
            // You can leave this blank if you don't need any specific action
          }
        }
      ]
    });
  
    await alert.present();
  }

  onOptionSelected(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log(value);
  }

}
