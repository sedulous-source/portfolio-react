import React from 'react';
import Images from '../../Images';

const BrandSection = () => {
  return (
    <section className="content-section brand-section frame-space-before-medium frame-space-after-medium">
      <div className="container">
        <h2 className="text-center mb-3">Brands I've Worked On</h2>
        <p className="lead text-center">Here is a list of our expertisation in developing websites for any platform.</p>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="brand-item">
                <img src={Images.t3Planet} alt="T3 Planet" title="T3 Planet" height="80" width="180" />
              <div className="brand-item__content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, perspiciatis.</p>
                <a className='btn btn-primary' href="https://t3planet.com/" target='_black'>Visit Website</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://www.cnty.com/" target='_black'>
              <img src={Images.centuryCasinos} alt="CenturyCasinos" title="CenturyCasinos" height="100" width="140" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://quivo.co/" target='_black'>
              <img src={Images.quivo} alt="Quivo" title="Quivo" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://helfen-hilft.ch/" target='_black'>
              <img src={Images.helfenHilft} alt="HelfenHilft" title="HelfenHilft" height="135" width="180" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://ribe.de/en/" target='_black'>
              <img src={Images.ribe} alt="RIBE" title="RIBE" height="100" width="117" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://www.csi-online.de/de/" target='_black'>
              <img src={Images.csiOnline} alt="CSIOnline" title="CSIOnline" height="100" width="117" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://www.block-menue.de/" target='_black'>
              <img src={Images.blockMenue} alt="BlockMenue" title="BlockMenue" height="100" width="100" />
            </a>
          </div>  
          <div className="col-md-4">
            <a className='brand-item' href="https://www.berghotel-maibrunn.de/" target='_black'>
              <img src={Images.berghotel} alt="Berghotel" title="Berghotel" height="100" width="150" />
            </a>
          </div>  
          <div className="col-md-4">
            <a className='brand-item' href="https://prodtest.bodyperformance.ch/" target='_black'>
              <img className='mw-100' src={Images.bodyPerformance} alt="BodyPerformance" title="BodyPerformance" height="135" width="180" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://www.bavc-automobilclub.de/de/" target='_black'>
              <img src={Images.bavc} alt="BAVC" title="BAVC" height="100" width="130" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://www.epoche-napoleon.net/" target='_black'>
              <img className='mw-100' src={Images.epocheNapoleon} alt="EpocheNapoleon" title="EpocheNapoleon" height="135" width="190" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://www.hohenlohe.plus/" target='_black'>
              <img src={Images.hohenlohe} alt="Hohenlohe" title="Hohenlohe" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://nitsantech.de/" target='_black'>
              <img src={Images.nitsan} alt="Nitsan" title="Nitsan" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://weikersheim.de/" target='_black'>
              <img src={Images.stadtWeikersheim} alt="StadtWeikersheim" title="StadtWeikersheim" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://demo.t3planet.com/?theme=t3-ngo" target='_black'>
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 204.6 49" style={{ enableBackground: "new 0 0 204.6 49" }}  xmlSpace="preserve"><g><g><path fill="#1761FF" d="M23.1,12.4V0c0.5,0.1,1.1,0.3,1.5,0.6l16.6,9.6c1.7,1,2.7,2.7,2.7,4.6V34c0,0.6-0.1,1.1-0.3,1.6L33,29.5V18.1L23.1,12.4L23.1,12.4z M11,18.1l9.9-5.7V0c-0.5,0.1-1.1,0.3-1.5,0.6L2.7,10.2C1,11.2,0,12.9,0,14.8V34c0,0.6,0.1,1.1,0.3,1.6L11,29.5V18.1L11,18.1z M22,37.1l-9.9-5.7L1.4,37.6c0.4,0.4,0.8,0.8,1.3,1l16.6,9.6c1.7,1,3.7,1,5.3,0l16.6-9.6c0.5-0.3,0.9-0.6,1.3-1l-10.7-6.2L22,37.1L22,37.1z"/><g><path d="M57.9,10.1h6v9.7h16.7v16.5h-6V24.5H63.9v11.8h-6V10.1z"/><path d="M91.5,14.7h-7.2v-4.6h20.4v4.6h-7.2v21.6h-6.1L91.5,14.7L91.5,14.7z"/><path d="M108.5,10.1h6v9.7h10.7v-9.7h6v26.2h-6V24.5h-10.7v11.8h-6V10.1z"/><path d="M137.1,10.1h6.1v26.2h-6.1V10.1z"/><path d="M148.8,26.1v-16h6.1v15.6c0,4.4,1.3,6.3,4.9,6.3s5.1-1.7,5.1-6.5V10.1h6.1v15.8c0,7.2-4.1,10.9-11.2,10.9S148.8,33.1,148.8,26.1L148.8,26.1z"/><path d="M176.5,10.1h8l6.2,16.3l6.1-16.3h7.8v26.2h-6V17.9l-7.4,18.4h-2l-7.4-18.4v18.4h-5.4L176.5,10.1L176.5,10.1z"/></g></g><rect x="74.4" y="10" width="6.1" height="6"/></g></svg>
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://t3reactbootstrap.vercel.app/" target='_black'>
              <img src={Images.t3ReactBootstrap} alt="T3ReactBootstrap" title="T3ReactBootstrap" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://demo.t3planet.com/live-typo3/t3-guru/" target='_black'>
              <img src={Images.t3Guru} alt="T3Guru" title="T3Guru" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://demo.t3planet.com/t3-bootstrap/" target='_black'>
              <img src={Images.t3Bootstrap} alt="T3Bootstrap" title="T3Bootstrap" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://demo.t3planet.com/t3-karma/" target='_black'>
              <img src={Images.t3Karma} alt="T3Karma" title="T3Karma" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://demo.t3planet.com/?theme=t3-ngo" target='_black'>
              <img src={Images.t3Ngo} alt="T3Ngo" title="T3Ngo" height="100" width="150" />
            </a>
          </div>
          <div className="col-md-4">
            <a className='brand-item' href="https://www.wolgast.de/" target='_black'>
              <img className='mw-100' src={Images.stadtWolgast} alt="StadtWolgast" title="StadtWolgast" height="120" width="190" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSection;