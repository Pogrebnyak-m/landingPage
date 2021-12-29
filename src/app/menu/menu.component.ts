import { Component, OnInit } from '@angular/core';
/*import * as bootstrap from 'bootstrap';*/

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*const offcanvasNavbar = document.getElementById('offcanvasExample');
    const openOffcanvas = document.getElementById('OpenMenu');

    if (offcanvasNavbar && openOffcanvas != null) {
      const bsOffcanvasNavbar = new bootstrap.Offcanvas(offcanvasNavbar);

      openOffcanvas.addEventListener('click', function () {
        //e.preventDefault();
        //e.stopPropagation();
        bsOffcanvasNavbar.toggle();
      });
    };*/
  }

}
