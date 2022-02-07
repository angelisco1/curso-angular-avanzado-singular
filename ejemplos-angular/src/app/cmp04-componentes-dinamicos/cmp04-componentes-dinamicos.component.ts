import { Component, OnInit, ViewChild } from '@angular/core';
import { AcordeonComponent } from '../cmp02-transclusion/acordeon/acordeon.component';
import { ModalComponent } from '../cmp03-viewchild/modal/modal.component';
import { AudioComponent } from './audio/audio.component';
import { HostDirective } from './host.directive';
import { VideoComponent } from './video/video.component';

interface IMedia {
  src: string,
  titulo: string,
  tipo: 'audio' | 'video'
}

@Component({
  selector: 'app-cmp04-componentes-dinamicos',
  templateUrl: './cmp04-componentes-dinamicos.component.html',
  styleUrls: ['./cmp04-componentes-dinamicos.component.css']
})
export class Cmp04ComponentesDinamicosComponent implements OnInit {
  mediaItems: Array<IMedia> = [
    { titulo: 'Arbolitos pasando', src: 'assets/videos/video1.mp4', tipo: 'video' },
    { titulo: 'Mujer conduciendo', src: 'assets/videos/video2.mp4', tipo: 'video' },
    { titulo: 'Commercial Violins', src: 'assets/audios/audio1.mp3', tipo: 'audio' },
    { titulo: 'Ordinary Miracle', src: 'assets/audios/audio2.mp3', tipo: 'audio' },
  ]
  @ViewChild(ModalComponent) modal!: ModalComponent
  @ViewChild(HostDirective) host!: HostDirective

  constructor() { }

  ngOnInit(): void {
  }

  mostrarModal(item: IMedia): void {
    const vcr = this.host.viewContainerRef
    vcr.clear()
    const componentClass = item.tipo === 'video' ? VideoComponent : AudioComponent
    const componentRef = vcr.createComponent(componentClass)
    componentRef.instance.src = item.src
    this.modal.abrir()
  }

}
