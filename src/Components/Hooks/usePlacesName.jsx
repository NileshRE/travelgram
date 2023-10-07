import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNewPlaces } from '../../Utils/plcesSlice';
import { Api_key} from '../../Utils/constants';
import { addPics } from '../../Utils/plcesSlice';
import {Unsplash_key} from '../../Utils/constants';

var requestOptions = {
    method: 'GET',
  };

const usePlacesName = () => {

    const dispatch = useDispatch();
    const newPlaces = useSelector((store)=>store.places.newPlaces);

    const getPlaceDetails = async()=>{
        const url=`https://api.geoapify.com/v2/places?categories=tourism&filter=place:5198bca6accb825340593e7f9c3358533e40f00103f901257cda1100000000920308446568726164756e&limit=20&apiKey=${Api_key}`;
        const data = await fetch(url, requestOptions)
        const json = await data.json();
        const names = json?.features?.map((feature) => feature?.properties?.name);
        dispatch(addNewPlaces(names))
    
        const picsList = [];
        for (const name of names){
      const picsUrl = `https://api.unsplash.com/search/photos?&query=${name}&client_id=${Unsplash_key}`;
      const data2 = await fetch(picsUrl);
      const json2 = await data2.json();
      const locs = json2?.results?.map((result) => result?.urls?.regular);
      picsList.push(locs[0])
      
        }
        dispatch(addPics(picsList))
  }

        useEffect(()=>{
           !newPlaces && getPlaceDetails();
          },[]);
        }

export default usePlacesName


  