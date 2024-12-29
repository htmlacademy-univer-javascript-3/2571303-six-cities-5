import { Point } from 'leaflet';
import { useRef } from 'react';

type MapComponentProps = {
  city: string;
  points: Point[];
}

function MapComponent({ city, points }: MapComponentProps) {

  const mapRef = useRef(null);
  return (
    
  );
}

export default MapComponent;
