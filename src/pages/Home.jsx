import React, { useState } from 'react';
import 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\CSS\\Homecss.css';
import Todolist from '../TodoList/Todolist';

function Home() {
  const [showTodo, setShowTodo] = useState(false);

  const handleOpenTodo = () => {
    setShowTodo(true);
  };

  const handleCloseTodo = () => {
    setShowTodo(false);
  };

  return (
    <>
      {/* Sliding Image */}
      <Imageslider />
      <button 
        style={{top:'57px', position:'fixed', right:'0px', zIndex:'1008', cursor:'pointer', width:'92px'}} 
        onClick={handleOpenTodo}>
        Todolist
      </button>
      {showTodo && <Todolist onClose={handleCloseTodo} />}
      {/* Three Cards shows */}
      <Cards />
      {/* This show our gallery */}
      <h1 className="ourgallery" style={{textAlign:"center", width:'100%', paddingTop:'33px'}}>Our Gallery</h1>
      <Gallery />
      <Gallery />
      {/* What we will provide you */}
      <h1 style={{textAlign:"center", width:'100%', paddingTop:'33px'}}>What We Provide You</h1>
      <ProvideYou />
    </>
  );
}

export default Home;

function Imageslider() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function Cards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"3px"}}>
      <div className="col">
        <div className="card h-100">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: "center"}}>Exercise</h5>
            <p className="card-text" style={{textAlign: "center"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: "center"}}>Nutrition</h5>
            <p className="card-text" style={{textAlign: "center"}}>This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: "center"}}>Meditation</h5>
            <p className="card-text" style={{textAlign: "center"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"3px"}}>
      <div className="col">
        <div className="card h-100">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
}

function ProvideYou() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{color:'white'}}>Community Environment</h5>
            <p style={{color:'white'}}>Join our vibrant community to connect with like-minded individuals, share experiences, and support each other in your fitness journey.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{color:'white'}}>Connecting People</h5>
            <p style={{color:'white'}}>We provide a platform that fosters connections between people, allowing you to build relationships and find workout buddies or accountability partners.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/Images/motivation.jpg`} className="d-block w-100" style={{height:'1012px'}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{color:'white'}}>Continuous Motivation</h5>
            <p style={{color:'white'}}>Stay motivated with our regular updates, challenges, and inspiring content designed to keep you focused and energized on your fitness goals.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/Images/chance.jpg`} className="d-block w-100" style={{height:'1012px'}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{color:'white'}}>Creator Chance</h5>
            <p style={{color:'white'}}>As a creator, you have the chance to showcase your expertise, share your knowledge, and contribute to our community's growth.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" style={{height:'1012px'}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{color:'white'}}>Exclusive Resources</h5>
            <p style={{color:'white'}}>Gain access to exclusive resources, including workout plans, nutrition guides, and expert advice, to enhance your fitness journey.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" style={{height:'1012px'}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{color:'white'}}>Personal Development</h5>
            <p style={{color:'white'}}>We believe in holistic wellness, offering resources and support for your personal development, mental well-being, and overall growth.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
