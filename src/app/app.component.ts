import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { NgxCameraComponent, CameraImage } from 'ngx-camera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'camera-flip';

  videoWidth: 640;
  videoHeight: 480;

  @ViewChild('ngxCam', { static: true})
  ngxCam: NgxCameraComponent;

  @ViewChild('canvas', { static: true})
  canvas: ElementRef;

  capturedImage = null;

  ngOnInit(): void {
    console.log();
  }

  start(): void {
  }

  async switchCamera(): Promise<void> {
    await this.ngxCam.switchCamera.toPromise();
  }

  screenshot(): void {
    this.ngxCam.takeSnapshot();
  }

  onScreenshot(image: CameraImage): void {
    this.capturedImage = image.imageAsBase64;
  }

  stop(): void {
    this.ngxCam.stopMediaTracks();
  }

  takeScreenshot(): void {
  }

}
