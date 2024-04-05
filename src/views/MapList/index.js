import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Map = React.lazy(() => import("../../components/Map"));
const LocationList = React.lazy(() => import("../../components/List"));

function MapList() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleAddLocation = (location) => {
    setLocations([...locations, location]);
    setSelectedLocation(location);
  };

  const handleRemoveLocation = (index) => {
    const updatedLocations = [...locations];
    updatedLocations.splice(index, 1);
    setLocations(updatedLocations);
  };

  const handleRevisitLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Container fluid>
      <Row className="mt-3">
        <Col xs={12} md={6}>
          <LocationList
            locations={locations}
            onRemove={handleRemoveLocation}
            onRevisit={handleRevisitLocation}
          />
        </Col>
        <Col xs={12} md={6}>
          <Map
            onClick={handleAddLocation}
            selectedLocation={selectedLocation}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MapList;
