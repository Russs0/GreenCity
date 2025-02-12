import * as Location from "expo-location";

export const getAddressByLatLong = async (latitude, longitude)=>{
    let response = await Location.reverseGeocodeAsync({latitude, longitude});
    if (response.length > 0) {
        const {city, street, name, district} = response[0];
        return `${city ? city : ''} ${district} ${street ? street : ''} ${name.length <= 4 ? name : ''} `;
    }
    return 'Address not found'
}
