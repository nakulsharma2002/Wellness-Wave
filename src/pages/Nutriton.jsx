import React, { useState } from 'react'
// import apple from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\apple.jpg'
// import banana from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\banana.jpg'
// import grapes from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\grapes.jpg'
// import orange from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\orange.jpg'
// import pineapple from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\pineapple.jpg'
// import strawberry from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\Images\\strawberry.jpg'
import { nutritionPlan } from '../Information/Nutrition_plan'


function Nutriton() {
  let [nutritiontrue,setnutritiontrue]=useState(false);

  return (
    <>
    {/* image */}
    <Main/>


    {/* Dropbox */}
    <h1 style={{'margin':'auto','textAlign':'center' ,'paddingTop':'33px','backgroundColor':'antiquewhite'}}>BMI FAQ</h1>
    <Dropbox/>



    {/* Gallery*/}
    <Gallery/>


    {/* Form */}
    <h1 style={{'margin':'auto','textAlign':'center' ,'paddingTop':'43px',paddingBottom:'23px',backgroundColor:'aliceblue'}}>Get your Personalized plan </h1>
    <Form/>
    
    
    
   
    
    </>
  )
}

export default Nutriton

function Main(){
    return(
        <div class="card bg-dark text-white">
        <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img" style={{'height':'700px'}}alt="..."/>
        <div class="card-img-overlay">
    <h5 class="card-title" style={{'margin':"auto",'maxWidth':'998px',"textAlign":"center","paddingTop":"503px" ,'color':'yellow','fontSize':'34px'}}>Nutrition Plan</h5>
    <p class="card-text"   style={{'margin':"auto",'maxWidth':'998px',"textAlign":"center","paddingTop":"12px"}}>Unlock Your Ultimate Nutrition Plan Tailored to Your BMI. Discover Your Category and Dive into a World of Health!</p>

  </div>
</div>
    )
}


function Gallery(){
    return(
      <>
   <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
    <div class="carousel-inner" style={{height:'768px'}}>
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" alt="..." style={{height:'780px'}}/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'white'}}>Protein: 0.3 grams per 100 grams</h5>
          <h5 style={{color:'white'}}>Carbohydrates: 14 grams per 100 grams</h5>
          <p style={{color:'white'}}>Health Benefits: Rich in fiber and vitamin C, promotes heart health, and aids in weight management.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={`${process.env.PUBLIC_URL}/Images/orange.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'white'}}>Protein: 0.9 grams per 100 grams</h5>
          <h5 style={{color:'white'}}>Carbohydrates: 12 grams per 100 grams</h5>
          <p style={{color:'white'}}>Health Benefits: High in vitamin C, boosts the immune system, and improves skin health.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/Images/banana.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'white'}}>Protein: 1.3 grams per 100 grams</h5>
          <h5 style={{color:'white'}}>Carbohydrates: 23 grams per 100 grams</h5>
          <p style={{color:'white'}}>Health Benefits: High in potassium, good for heart health, and helps in muscle function and digestion.</p>
        </div>
      </div>
      <div class="carousel-item" >
        <img src={`${process.env.PUBLIC_URL}/Images/strawberry.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'black'}}>Protein: 0.8 grams per 100 grams</h5>
          <h5 style={{color:'black'}}>Carbohydrates: 8 grams per 100 grams</h5>
          <p style={{color:' white'}}>Health Benefits: Rich in antioxidants, supports heart health, and helps regulate blood sugar.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/Images/grapes.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'black'}}>Protein: 0.6 grams per 100 grams</h5>
          <h5 style={{color:'black'}}>Carbohydrates: 18 grams per 100 grams</h5>
          <p style={{color:'black'}}>Health Benefits: Contain antioxidants, support heart health, and have anti-inflammatory properties.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/Images/pineapple.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'black'}}>Protein: 0.5 grams per 100 grams</h5>
          <h5 style={{color:'black'}}>Carbohydrates: 13 grams per 100 grams</h5>
          <p style={{color:'black'}}>Health Benefits: Rich in vitamin C and bromelain, aids digestion, and reduces inflammation.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      </>
    )
}
function Dropbox(){
    return(
    <div style={{'backgroundColor':'antiquewhite',height:'431px',paddingTop:'73px'}}>
    <div class="accordion accordion-flush" id="accordionFlushExample" style={{maxWidth: "923px",margin: "auto"}}>
    <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingOne" style={{margin:"auto",maxWidth:'976px' ,fontSize:'34px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is BMI and why does it matter?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">BMI stands for Body Mass Index, a measure of body fat based on height and weight. It matters because it helps assess health risks.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingTwo" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How can I calculate my BMI?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin: "auto",maxWidth: "923px"}} >You can calculate your BMI by dividing your weight in kilograms by your height in meters squared.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingFour" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      
        How does BMI affect my nutrition plan?

      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin: "auto",maxWidth: "923px"}} >Your BMI category influences the type and amount of nutrients you need, guiding the creation of a personalized nutrition plan.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingThree" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        What does my BMI category mean?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin: "auto",maxWidth: "923px"}}>Your BMI category indicates whether you are underweight, normal weight, overweight, or obese, providing insight into your health status.</div>
    </div>
  </div>
</div>
</div>
    )
}


function Form() {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [heightFoot, setHeightFoot] = useState('');
  const [heightInch, setHeightInch] = useState('');
  const [weight, setWeight] = useState('');
  const [phone, setPhone] = useState('');
  const [bmi, setBmi] = useState(null);
  const [nutritiontrue, setNutritiontrue] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length >= 8 && phone.length === 10) {
      let foot = parseInt(heightFoot);
      let inch = parseInt(heightInch);
      let weights = parseInt(weight);
      let Inches = (foot * 12) + inch;
      let meter = Inches * 0.0254;
      let bmi = weights / meter ** 2;
      console.log(bmi);
      setBmi(bmi);
      setNutritiontrue(true);
      setUname('')
      setPassword('')
      setHeightFoot('')
      setHeightInch('')
      setWeight('')
      setPhone('')
      
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ height: '430px', backgroundColor: 'aliceblue' }}>
          <div style={{ display: "flex", width: '100%', margin: 'auto', maxWidth: '1071px' }}>
            <div className="form-floating mb-3" style={{ width: '740px' }}>
              <input
                type="email"
                onChange={(event) => setUname(event.target.value)}
                className="form-control"
                id="floatingInput"
                value={uname}
                style={{ fontSize: '31px', textAlign: 'center', paddingBottom: '30px', color: 'black', borderRadius: '34px' }}
                placeholder='@gmail.com'
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3" style={{ width: '740px' }}>
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                id="floatingPassword"
                value={password}
                style={{ fontSize: '31px', textAlign: 'center', paddingBottom: '30px', borderRadius: '34px', color: 'black' }}
                placeholder='Password'
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>

          <div style={{ display: "flex", width: '100%', margin: 'auto', maxWidth: '1071px' }}>
            <div className="form-floating mb-3" style={{ width: '740px' }}>
              <input
                type="number"
                onChange={(event) => setHeightFoot(event.target.value)}
                className="form-control"
                id="floatingHeightFoot"
                value={heightFoot}
                style={{ fontSize: '31px', textAlign: 'center', paddingBottom: '30px', color: 'black', borderRadius: '34px' }}
                placeholder='Height (Feet)'
              />
              <label htmlFor="floatingHeightFoot">Height (Feet)</label>
            </div>
            <div className="form-floating" style={{ width: '740px' }}>
              <input
                type="number"
                onChange={(event) => setHeightInch(event.target.value)}
                className="form-control"
                id="floatingHeightInch"
                value={heightInch}
                style={{ fontSize: '31px', textAlign: 'center', paddingBottom: '30px', borderRadius: '34px', color: 'black' }}
                placeholder='Height (Inches)'
              />
              <label htmlFor="floatingHeightInch">Height (Inches)</label>
            </div>
          </div>

          <div className="form-floating mb-3" style={{ width: '1085px', margin: 'auto', maxWidth: '1150px', borderRadius: '34px', paddingBottom: '24px' }}>
            <input
              type="number"
              onChange={(event) => setWeight(event.target.value)}
              className="form-control"
              id="floatingWeight"
              value={weight}
              style={{ fontSize: '31px', textAlign: 'center', paddingBottom: '26px', borderRadius: '63px' }}
              placeholder='Weight (KG)'
            />
            <label htmlFor="floatingWeight">Weight (KG)</label>
          </div>

          <div className="form-floating mb-3" style={{ width: '1085px', margin: 'auto', maxWidth: '1150px', borderRadius: '34px' }}>
            <input
              type="number"
              onChange={(event) => setPhone(event.target.value)}
              className="form-control"
              id="floatingPhone"
              value={phone}
              style={{ fontSize: '31px', textAlign: 'center', paddingBottom: '26px', borderRadius: '63px' }}
              placeholder='Phone'
            />
            <label htmlFor="floatingPhone">Phone</label>
          </div>

          <div style={{ fontSize: '31px', textAlign: 'center', paddingBottom: '30px', borderRadius: '34px', paddingTop: '23px' }}>
            <button type="submit" className="btn btn-primary btn-lg" style={{ fontSize: '23px', height: '42px', borderRadius: '34px', paddingBottom: '44px' }}>
              Calculate BMI & Get Plan
            </button>
          </div>
        </div>
      </form>

      {nutritiontrue && (
        <div>
          <p>Your BMI is: {bmi.toFixed(2)}</p>
          {nutritionPlan.map((v, i) => (
            <NutritionPlan key={i} items={v} />
          ))}
        </div>
      )}
    </>
  );
}

function NutritionPlan({ items }) {
  return (
    <>
    <div className="card" style={{margin:'auto',maxWidth:'935px',width:'100%',textAlign:'center',fontSize:'24px',boxShadow:'2px 3px 5px black',paddingBottom:'34px',background:'linear-gradient(45deg, white, #ea6464, #ea6464, #ea6464, #EA6467, #ea6464, transparent)',borderBottom:'12px solid black',borderRadius:'280px'}}>
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'34px'}}>{items.type_breakfast}</h5>
        <p className="card-text" style={{fontSize:'23px'}}>{items.first_meal}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group">{items.list1}</li>
        <p className="list-group-item">{items.para1}</p>
        <li className="list-group">{items.list2}</li>
        <p className="list-group-item">{items.para1}</p>
        <li className="list-group">{items.list3}</li>
        <p className="list-group-item">{items.para3}</p>
      </ul>
    </div>
    <div style={{paddingBottom:"42px"}}>

    </div>
    </>
  );
}