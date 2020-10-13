import React from 'react';
import { Images, Video, Audio } from '../../components';

const DashBoared = (props) => {

	return (
		<div>
			<center><h2><i> DashBoared </i></h2>
			<Images path="images/hampta1.jpg" height= {200} width= {600} altText="Img1" text="Hampta valley"/>
			<Images path="images/hampta2.jpeg" height={200} width={600} altText="Img2" text="Chikka" />
			<Images path="images/hampta3.jpeg" height={200} width={600} altText="Img3" text="Balu ka gera" />
			<Images path="images/hampta4.jpeg" height={200} width={600} altText="Img4" text="Valley Pass" />
			<Images path="images/hampta5.jpg" height={200} width={600} altText="Img5" text="Chandratal Lake" />
			<div>
				<h2><b><i>Vlogs</i></b></h2>
				<h3>Hampta pass trek</h3>
				<Video url="https://www.youtube.com/watch?v=Be1crA8hwRc" />
				<br/><br/><br/>
				<Video url="https://www.youtube.com/watch?v=z88Ujqrlyqg" />
			</div>
			<br/><br/>
			<div>
			<h2><b><i>AudioURL</i></b></h2>
				<Audio url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" />
			</div>
			</center>
		</div>
	)
};

export default DashBoared;