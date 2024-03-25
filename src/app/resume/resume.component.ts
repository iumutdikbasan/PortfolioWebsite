import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer:Renderer2){
    this.titleService.setTitle('İbrahim Umut Dikbasan - Resume')
  }

  DownloadFile(){
      const link = this.renderer.createElement('a');
      link.setAttribute('target','_blank');
      link.setAttribute('href', 'https://drive.google.com/file/d/1wjyB1BSnmg7JuzJDCFgSbbB_PUJqck5p/view?usp=sharing');
      link.setAttribute('download','Jiumutdikbasan.pdf');
      link.click();
      link.remove();
      
  }
}
