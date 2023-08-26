import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check if the fragment exists in the URL and scroll to it
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'abt') {
        const element = document.getElementById('abt');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment === 'faq') {
        const element = document.getElementById('faq');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment === 'contact') {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'hd') {
        const element = document.getElementById('hd');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
