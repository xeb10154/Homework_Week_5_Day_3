const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const allStarts = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return allStarts;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const allEnds = this.journeys.map((journey) => {
    return journey.endLocation;
  });

  return allEnds;
};

Traveller.prototype.getModesOfTransport = function () {
  const allTransport = this.journeys.map((journey) => {
    return journey.transport;
  });
  return allTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyByTrans = this.journeys.filter((journey) => {
    return journey.transport === transport
  });

  return journeyByTrans;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyByDist = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return journeyByDist;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueTransport = [];
  this.journeys.map ((journey) => {
    if(!uniqueTransport.includes(journey.transport)){
      uniqueTransport.push(journey.transport);
    };
  });
  return uniqueTransport;
};


module.exports = Traveller;
