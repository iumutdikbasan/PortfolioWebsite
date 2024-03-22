import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  project = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('İbrahim Umut Dikbasan - Portfolio')
  }
  ngOnInit(): void {
    this.project = this.projectService.GetProjects();
  }
}
