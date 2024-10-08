const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (x) => x * Math.PI / 180;
    const R = 6371; // Earth's radius in km

    //Haversine formula, 
    //which is used to calculate the great-circle distance 
    //between two points on the surface of a sphere, given their latitude and longitude.
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const Distance = R * c
    const roundDistance = parseFloat(Distance.toPrecision(5));
    return roundDistance;
};

module.exports = calculateDistance;