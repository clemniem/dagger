import {Component} from '@angular/core';

@Component({
  selector: 'dagger-tagger',
  templateUrl: './tagger.component.html',
  styleUrls: ['./tagger.component.css']
})
export class TaggerComponent {

  private swipeCoord?: [number, number];
  private swipeTime?: number;

  // https://stackoverflow.com/questions/42592156/what-is-the-best-way-to-implement-swipe-navigation-in-angular-2
  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;
      console.log(direction);

      if ((duration < 1000 && (Math.abs(direction[0]) > 30 || Math.abs(direction[1]) > 30)) && true) {
        // Math.abs(direction[0]) > Math.abs(direction[1] * 3))
        let swipe;
        if (Math.abs(direction[0]) >= Math.abs(direction[1])) {
          swipe = direction[0] > 0 ? 'right' : 'left';
        } else {
          swipe = direction[1] < 0 ? 'up' : 'down';
        }
        // Do whatever you want with swipe
        console.log(swipe)
      }
    }
  }




}
