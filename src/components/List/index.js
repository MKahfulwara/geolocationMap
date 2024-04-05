import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const LocationList = ({ locations, onRemove, onRevisit }) => {
  return (
    <div style={{ height: "400px", overflowY: "auto", marginBottom: "20px" }}>
      <ListGroup className="scrollable-list">
        <h2>Locations</h2>
        {locations.map((location, index) => (
          <ListGroup.Item
            as="li"
            key={index}
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{`Lat: ${location.lat}, Lng: ${location.lng}`}</div>
              <Button
                variant="primary"
                onClick={() => onRevisit(location)}
                size="sm"
              >
                Revisit
              </Button>
              <Button
                variant="danger"
                onClick={() => onRemove(index)}
                size="sm"
              >
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default LocationList;
