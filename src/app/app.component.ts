import { TestComponent } from './test/test.component';
import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('testShadow', { read: ViewContainerRef })
  targetShadow: ViewContainerRef;

  @ViewChild('testLight', { read: ViewContainerRef })
  targetLight: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addShadow() {
    const cmpFactory = this.componentFactoryResolver.resolveComponentFactory( TestComponent);
    this.targetShadow.createComponent(cmpFactory);
  }
  addLight() {
    const cmpFactory = this.componentFactoryResolver.resolveComponentFactory( TestComponent);
    this.targetLight.createComponent(cmpFactory);
  }
}
