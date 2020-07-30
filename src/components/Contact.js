import { gsap } from "gsap";
import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import NavBar from "./NavBar";

const Contact = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const formRef = useRef(null);
  let conRef = useRef(null);
  let newMapRef = useRef(null);
  mapboxgl.accessToken =
    "pk.eyJ1Ijoiam9zaDQzMjQiLCJhIjoiY2tiemoyYmN2MGJ6ODJ2bXJmM25pbjN1dSJ9.veWU3GwQOzzf0OSAA_TRNg";

  useEffect(() => {
    const time4 = gsap.timeline();
    time4
      .from(conRef, {
        duration: 1,
        ease: "power",
        yPercent: 100,
      })
      .from(newMapRef, {
        duration: 2,
        ease: "power",
        opcaity: 0,
      });
    const marker = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [3.4544673, 6.6052842],
      },
      properties: {
        name: "Joshua Adesanya",
        title: "Front End Developer",
        description: "Lagos, Nigeria",
      },
    };

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/josh4324/ck6aquu370tc71io0helaaa32",
      center: [3.4544673, 6.6052842],
      zoom: 10,
    });

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(markerRef.current)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({
          offset: 25,
        }) // add popups
          .setHTML(
            '<h4 class="pop">' +
              marker.properties.name +
              '<h4 class="pop">' +
              marker.properties.title +
              "</h4>" +
              '<h5 class="pop">' +
              marker.properties.description +
              "</h5>"
          )
      )
      .addTo(map);

    return () => {};
  }, [conRef, newMapRef]);

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
        toast.success("Message Sent Successfully");
      } else {
        form.reset();
        toast.error("Error Sending Message ");
      }
    };
    xhr.send(data);
  };
  return (
    <div>
      <div className="contact1">
        <div ref={(el) => (conRef = el)} className="c1">
          <h1 className="ch"> Contact Me </h1>
          <p className="contactp">
            {" "}
            I am interested in freelance opportunities.However if you have other
            request or question, contact me using the form below or my social
            media handless{" "}
          </p>
          <form
            onSubmit={submit}
            action="https://formspree.io/mgekywra"
            method="POST"
            ref={formRef}
          >
            <div>
              <div className="fbox">
                <div>
                  {" "}
                  <label htmlFor="name">
                    {" "}
                    Name <span className="red"> * </span>
                  </label>{" "}
                </div>{" "}
                <input
                  type="text"
                  className="input"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="fbox">
                <div>
                  {" "}
                  <label htmlFor="email">
                    {" "}
                    Email <span className="red"> * </span>
                  </label>{" "}
                </div>{" "}
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
              </div>{" "}
            </div>
            <div className="fbox">
              <div>
                {" "}
                <label htmlFor="subject">
                  {" "}
                  Subjet <span className="red"> * </span>
                </label>{" "}
              </div>{" "}
              <input
                type="text"
                className="input"
                placeholder="Subject"
                id="subject"
                required
              />
            </div>
            <div className="fbox">
              <div>
                {" "}
                <label htmlFor="message">
                  {" "}
                  Message <span className="red"> * </span>
                </label>{" "}
              </div>{" "}
              <textarea
                name="message"
                className="input"
                id="message"
                cols="30"
                rows="5"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <button className="but">Submit</button>
          </form>
        </div>
        <div ref={(el) => (newMapRef = el)} className="map none">
          <div ref={mapRef} className="mapContainer"></div>
          <div className="marker" ref={markerRef}></div>
        </div>
      </div>
      <NavBar> </NavBar>
    </div>
  );
};

export default Contact;
