import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
      }, 50); // Adjust the delay as needed
    });
  }
  navigateToHd() {
    this.router.navigate(['/home'], { fragment: 'hd' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('hd');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // Adjust the delay as needed
    });
  }
}
