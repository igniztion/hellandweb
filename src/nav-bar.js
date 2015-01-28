import {Behaviour} from 'aurelia-framework';

export class NavBar{
  static metadata() {return Behaviour.withProperty('router');}
}
