import axios from "axios";

// fetch photos
async function fetchPhotos(usersDate) {
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${usersDate}&page=1&api_key=9AcqhEqCIwq8of63KQPm53MbRUhOTnA3uquqcSxl`
    )
    .then(res => setPhotoData(res.data.photos))
    .catch(err => {
      console.log(err);
    });
}

export default fetchPhotos;
