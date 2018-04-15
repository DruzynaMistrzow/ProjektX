
export default class Utils {

    static measureDistance(oldCoords, newCoords) {
        const lat1 = oldCoords.coords.latitude;
        const lon1 = oldCoords.coords.longitude;
        const lat2 = newCoords.coords.latitude;
        const lon2 = newCoords.coords.longitude;
        const R = 6378.137;
        const dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
        const dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return parseInt(d * 1000);
    }
}