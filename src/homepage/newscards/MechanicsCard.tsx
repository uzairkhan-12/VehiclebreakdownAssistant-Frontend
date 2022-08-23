import React from 'react';
import './NewsCards.css'
import MechCard1 from '../../assets/images/MechCard1.jpg'
import MechCard2 from '../../assets/images/mechCard2.jpg'
import MechCard3 from '../../assets/images/mechCard3.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';

const MechanicCards = () => {
  return <div >
    <div className='container'>
      <div className='row'>
        {/* <h5 className='newscardsournewsheading'>// our mechanics</h5> */}


        <div className='row headingnewscardsdiv'>
          <div className='col-lg-6 col-sm-6 col-xs-12'>

            <h1 className=' headingnewscards'>Our Mechanics</h1>
          </div>
          <div className='col-lg-6 col-sm-6 col-xs-12 onlyforfloatbtnallnews'>
            {/* <button className=' btnheadingnewscards'>All News</button> */}

          </div>
        </div>


      </div>
      <br />
      <div className='row'>
        <div className='col-lg-4 col-sm-12 col-md-6 col-xs-12'>
          <div className="card newscardsdiv">
            <div className='newscardspicdiv'>
              <img className="card-img-top pic1newscards" src={MechCard1} alt="Card image cap" />

            </div>
            <div className="card-body">
              <h5 className="card-title mt-3 cardsheadingnewscards">Ali Khan</h5>
              <p className="card-text">Experience : 2 Years</p>
              <p className="card-text">Mechanic type : Car Mechanic</p>
              <p className="card-text">Contact Number : +92 311 34 23 983</p>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Electrician</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Wheel Alignment</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Dunter</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Puncturer</span>

            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-12 col-md-6 col-xs-12'>
          <div className="card newscardsdiv">
            <div className='newscardspicdiv'>
              <img className="card-img-top pic1newscards" src={MechCard2} alt="Card image cap" />

            </div>
            <div className="card-body">
              <h5 className="card-title cardsheadingnewscards">Juma Khan</h5>
              <p className="card-text">Experience : 2 Years</p>
              <p className="card-text">Mechanic type : Bike Mechanic</p>
              <p className="card-text">Contact Number : +92 311 34 23 983</p>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Lock Specialist</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Decorator</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Puncterer</span>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-12 col-md-6 col-xs-12'>
          <div className="card newscardsdiv">
            <div className='newscardspicdiv'>
              <img className="card-img-top pic1newscards" src={MechCard3} alt="Card image cap" />

            </div>
            <div className="card-body">
              <h5 className="card-title mt-3 cardsheadingnewscards">Gul Khan</h5>
              <p className="card-text">Experience : 5 Years</p>
              <p className="card-text">Mechanic type : Bus Mechanic</p>
              <p className="card-text">Contact Number : +92 313 23 15 281</p>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>CNG Mechanic</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Electrician</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Dunter</span>
              <span className="badge bg-secondary" style={{ marginRight: 4 }}>Poshing Maker</span>

            </div>
          </div>
        </div>
      </div>

    </div>

  </div>;
};

export default MechanicCards;
