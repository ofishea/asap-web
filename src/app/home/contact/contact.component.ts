import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tab1Button = document.getElementById("tab1Button") as HTMLButtonElement;
    const tab2Button = document.getElementById("tab2Button") as HTMLButtonElement;
    const tab1Content = document.getElementById("tab1") as HTMLDivElement;
    const tab2Content = document.getElementById("tab2") as HTMLDivElement;

    // Show tab content as block on mobile and grid on desktop by default
    if (window.innerWidth <= 600) {
      tab1Content.style.display = "block";
      tab2Content.style.display = "none"; // Hide tab 2 content on mobile
    } else {
      tab1Content.style.display = "grid";
      tab2Content.style.display = "none"; // Initially hide tab 2 content on load
    }

    // Show tab content as grid when Tab 1 button is clicked, and hide tab content 2
    tab1Button.addEventListener("click", () => {
      tab1Button.classList.add("active");
      tab2Button.classList.remove("active");
      tab1Content.style.display = "grid";
      tab2Content.style.display = "none"; // Hide tab 2 content when tab 1 is active

      if (window.innerWidth <= 600) {
        tab1Content.style.display = "block"; // Display tab content as block on mobile
        tab2Content.style.display = "none";  // Hide tab content 2 on mobile
      } else {
        tab1Content.style.display = "grid";  // Display tab content as grid on desktop
        tab2Content.style.display = "none";  // Hide tab content 2 on desktop
      }
    });

    // Show tab content as grid when Tab 2 button is clicked, and hide tab content 1
    tab2Button.addEventListener("click", () => {
      tab1Button.classList.remove("active");
      tab2Button.classList.add("active");
      tab1Content.style.display = "none"; // Hide tab 1 content when tab 2 is active
      tab2Content.style.display = "grid";

      if (window.innerWidth <= 600) {
        tab1Content.style.display = "none";  // Hide tab content 1 on mobile
        tab2Content.style.display = "block"; // Display tab content as block on mobile
      } else {
        tab1Content.style.display = "none";  // Hide tab content 1 on desktop
        tab2Content.style.display = "grid";  // Display tab content as grid on desktop
      }
    });

    // Listen for window resize events
    window.addEventListener("resize", () => {
      // Delay execution to ensure smoother updates
      setTimeout(() => {
        handleScreenWidthChange();
      }, 100);
    });

    // Function to handle screen width changes
    function handleScreenWidthChange() {
      if (window.innerWidth <= 600) {
        if (tab1Button.classList.contains("active")) {
          tab1Content.style.display = "block"; // Display tab content 1 as block on mobile
          tab2Content.style.display = "none";  // Hide tab content 2 on mobile
        } else if (tab2Button.classList.contains("active")) {
          tab1Content.style.display = "none";  // Hide tab content 1 on mobile
          tab2Content.style.display = "block"; // Display tab content 2 as block on mobile
        }
      } else {
        if (tab1Button.classList.contains("active")) {
          tab1Content.style.display = "grid";  // Display tab content as grid on desktop
          tab2Content.style.display = "none";  // Hide tab content 2 on desktop
        } else if (tab2Button.classList.contains("active")) {
          tab1Content.style.display = "none";  // Hide tab content 1 on desktop
          tab2Content.style.display = "grid";  // Display tab content as grid on desktop
        }
      }
    }

    // Initial setup based on screen width
    handleScreenWidthChange();
  }
}
