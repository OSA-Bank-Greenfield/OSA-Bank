import React from 'react';
import './map.css'
import Iframe from 'react-iframe'


function Map() {
	return (
		<main>
			<div >
				<Iframe className="map" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8367838568947!2d10.18480071557484!3d36.8942526700989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb32a574f131%3A0x736d6f5853a1bd2e!2sRebootkamp!5e0!3m2!1sen!2stn!4v1593517854308!5m2!1sen!2stn" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"/>
				</div>
		</main>
	);
}

function loadScript(url) {
	var index = window.document.getElementsByTagName("script")[0];
	var script = window.document.createElement("script");
	script.src = url;
	script.async = true;
	script.defer = true;
	index.parentNode.insertBefore(script, index)
}

export default Map;
/**
 *  <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      defer
    ></script>
 */