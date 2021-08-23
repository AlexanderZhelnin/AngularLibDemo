import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [
    MyLibComponent,
    ItemComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
