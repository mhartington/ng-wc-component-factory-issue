import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [TestComponent],
  entryComponents: [TestComponent],
  exports: [TestComponent]
})
export class HomePageModule {}
