import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Layer, Map, Marker, icon, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  constructor() {}
  @Input()
  coordenada: any;
  @Output()
  coordenadas: EventEmitter<any> = new EventEmitter<any>();
  //ngOnInit
  ngOnInit(): void {
    const map = new Map('map').setView(
      [32.62157863541377, -475.42778778049984],
      13
    );
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const myIcon = icon({
      iconUrl: 'assets/marker-icon.png',
      iconSize: [65, 50],
      iconAnchor: [35, 49],
      popupAnchor: [-3, -76],
      shadowUrl: 'assets/marker-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
    });

    let myMarker: Marker<any>;
    let myCoord: any;
    let MarkerEdit: Marker<any>;
    map.on('click', (e) => {
      myCoord = e.latlng;
      this.coordenadas.emit(myCoord);
      if (myMarker) {
        map.removeLayer(myMarker);
        console.log(myMarker);
      }
      if (MarkerEdit) {
        map.removeLayer(MarkerEdit);
      }
      myMarker = marker([e.latlng.lat, e.latlng.lng], {
        icon: myIcon,
        riseOnHover: true,
      }).addTo(map);
    });
    if (this.coordenada) {
      MarkerEdit = marker([this.coordenada.lat, this.coordenada.lng], {
        icon: myIcon,
        riseOnHover: true,
      }).addTo(map);
    }
  }
}
