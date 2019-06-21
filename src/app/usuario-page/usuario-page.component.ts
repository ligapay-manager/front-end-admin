import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lpa-usuario-page',
  templateUrl: './usuario-page.component.html',
  styleUrls: ['./usuario-page.component.css']
})
export class UsuarioPageComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(params.get('id'));
    });
  }

}
