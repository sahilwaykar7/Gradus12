import {Component, ViewEncapsulation, ViewChild, HostListener, ElementRef} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-fullscreen',
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
    <button mat-icon-button class="full-screen">
        @if (toggle) {
            <mat-icon #compress>fullscreen_exit</mat-icon>
        } @else {
            <mat-icon #expand>fullscreen</mat-icon>
        } 
    </button> 
  `
})
export class FullScreenComponent { 
    toggle:boolean = false;
    @ViewChild('expand') private expand:ElementRef;
    @ViewChild('compress') private compress:ElementRef; 
   
    requestFullscreen(elem: any) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else {
            console.log('Fullscreen API is not supported.');
        }
    };

    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else {
            console.log('Fullscreen API is not supported.');
        }
    };

    @HostListener('click') getFullscreen(){
        if(this.expand){
            this.requestFullscreen(document.documentElement);
        }
        if(this.compress){
            this.exitFullscreen();
        }
    }

    @HostListener('window:resize') onFullScreenChange(){
        let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
                                document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        } else {
            this.toggle = false;          
        }
    }   

}