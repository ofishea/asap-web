import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private router: Router) {}

  navigateToAbt() {
    this.router.navigate(['/home'], { fragment: 'abt' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('abt');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // Adjust the delay as needed
    });
  }
  navigateToFaq() {
    this.router.navigate(['/home'], { fragment: 'faq' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('faq');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // Adjust the delay as needed
    });
  }

  navigateToCnt() {
    this.router.navigate(['/home'], { fragment: 'contact' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Adjust the delay as needed
    });
  }

  ngOnInit() {}

}
