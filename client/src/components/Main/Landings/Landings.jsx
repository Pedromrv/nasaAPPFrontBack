import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import "./Landings.css";
import 'leaflet/dist/leaflet.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'

const Landings = () => {
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(
                    `http://localhost:3000/api/astronomy/landings/mass`
                );
                const data = await resp.data;
                const dataSliced = data.slice(0,10);
                setSearch(dataSliced);
                console.log(dataSliced);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
        </Marker>
    </MapContainer>
};

export default Landings;
