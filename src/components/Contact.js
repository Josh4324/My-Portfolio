import React, {useRef,useState,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar';

const Contact = () => {
    const mapRef = useRef(null)
    const markerRef = useRef(null)
    const formRef = useRef(null)
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaDQzMjQiLCJhIjoiY2puZHgyZHJuMGJteDN3bzRiNnE2dXNqcSJ9.jgYBsnUesMUwUsPsb3dG6Q';

    const [status, setStatus] = useState('') 
   
      
    useEffect(() => {
        const  marker = {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [3.4544673, 6.6052842]
            },
            properties: {
              name: 'Joshua Adesanya',
              title: 'Front End Developer',
              description: 'Lagos, Nigeria'
            }
          }
          
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/josh4324/ck6aquu370tc71io0helaaa32',
            center: [3.4544673, 6.6052842,],
            zoom: 10
            });

            // make a marker for each feature and add to the map
        new mapboxgl.Marker(markerRef.current)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML('<h4 class="pop">' + marker.properties.name + '<h4 class="pop">' + marker.properties.title + '</h4>' + '<h5 class="pop">' + marker.properties.description + '</h5>'))
            .addTo(map);

        return () => {
           
        };
    }, []);

    const submit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS");
        } else {
            form.reset();
            setStatus("ERROR")
        }
        };
        xhr.send(data);
    }
    return (
        <div>
                <div className="contact1">
                    <div className="c1">
                        <h1 className="ch">Contact Me</h1>
                        <p>I am interested in freelance opportunities.
                        However if you have other request or question, 
                        contact me using the form below or my social media handless
                        </p>
    
                        <form onSubmit={submit} action="https://formspree.io/mgekywra" method="POST"  ref={formRef}>
    
                            <div>
                                <div className="fbox">
                                    <div><label htmlFor="name">Name <span className="red">*</span></label></div>
                                    <input type="text" className="input" name="name" id="name" placeholder="Name" />
                                </div>
    
                                <div className="fbox">
                                    <div><label htmlFor="email">Email <span className="red">*</span></label></div>
                                    <input type="text" className="input" placeholder="Email" name="email" id="email" />
                                </div>
                            </div>
                            
                            <div className="fbox">
                                <div><label htmlFor="subject">Subjet <span className="red">*</span></label></div>
                                <input type="text" className="input" placeholder="Subject"  />
                            </div>
                            
                            <div className="fbox">
                                <div><label htmlFor="message">Message <span className="red">*</span></label></div>
                                <textarea name="message" className="input" id="message" cols="30" rows="5" placeholder="Message"></textarea>
                            </div>
    
                            { status === "SUCCESS" ? <p className="submit"> Submitted Successfully </p> : <button className="but">Submit</button> }
                            {status === "ERROR" && <p className="error">Ooops! There was an Error.</p>}
                        </form>
                        <div className="social-contact">
                            <a href="https://www.facebook.com/adesanyajoshua"><FontAwesomeIcon className="fab1" icon={faFacebookSquare} /></a>
                            <a href="https://twitter.com/josh_my_man"><FontAwesomeIcon className="fab1" icon={faTwitterSquare} /></a>
                            <a href="https://www.linkedin.com/in/joshuaadesanya/"><FontAwesomeIcon className="fab1" icon={faLinkedinIn} /></a>
                            <a href="https://github.com/Josh4324"><FontAwesomeIcon className="fab1" icon={faGithubSquare} /></a>
                        </div>
                    </div>
    
                    <div className="map none">
                        <div ref={mapRef} className="mapContainer"></div>
                        <div className="marker" ref={markerRef}></div>
                    </div>
                </div>
                
               <NavBar></NavBar>
        </div>
    );
}

export default Contact;
