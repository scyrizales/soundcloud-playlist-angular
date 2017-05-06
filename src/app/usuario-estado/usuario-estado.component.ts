import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'

@Component({
  selector: 'usuario-estado',
  templateUrl: './usuario-estado.component.html',
  styleUrls: ['./usuario-estado.component.css']
})
export class UsuarioEstadoComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }
}