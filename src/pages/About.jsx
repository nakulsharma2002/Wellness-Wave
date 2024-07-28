import React from 'react'
import { information } from '../About_information'

function About() {

  return (
    <>
    <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} style={{width:'100%',height:'600px'}} alt="..."/>
    
    
    {/* Our Servise */}
    <h1 style={{paddingTop:'23px',width:'100%',margin:'auto',textAlign:'center',paddingBottom:"23px"}}>Service</h1>
    
    {information.map((v)=>{
      return(
        <Servise items={v} key={v.id}/>
      )
    })} 


    {/* DropBox */}
    <h1 style={{paddingTop:'23px',width:'100%',margin:'auto',textAlign:'center',backgroundColor:'lightblue'}}>FAQ Question</h1>
    <Dropbox/>
    </>
  )
}

export default About

function Dropbox(){
    return(
    <div class="accordion accordion-flush" id="accordionFlushExample" style={{maxWidth: "923px",margin: "auto"}}>
    <div class="accordion-item" style={{margin:"auto" ,width:'871px'}}>
    <h2 class="accordion-header" id="flush-headingOne" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto" ,width:'871px'}}>
    <h2 class="accordion-header" id="flush-headingTwo" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin:"auto" ,width:'871px'}} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingThree" style={{margin:"auto" ,width:'871px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin:"auto" ,width:'871px'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    )
}



function Servise({items}){
  

  return(
    <>
    <div class="card mb-3"  >
      <div class="row g-0" id='rowcard'>
      <div class="col-md-4" id='columncard'>
        <img src={items.src} class="img-fluid rounded-start" alt="..." id='cardImage'/>
      </div>
      <div class="col-md-8" className='colmd'>
      <div class="card-body">
        <h3 class="card-title" style={{paddingTop:'23px',width:'100%',margin:'auto',textAlign:'center'}}>{items.title}</h3>
        <p class="card-text" style={{paddingTop:'23px',width:'100%',margin:'auto',textAlign:'center',maxWidth:'616px'}}>{items.description}</p>
        <ul style={{'paddingTop':'14px','maxWidth':'517px','width':'100%','margin':'auto','lineHeight':'2'}}>
          <li><span style={{'fontSize':"18px",'fontWeight':'700'}}>{items.bold1}</span> {items.para1}</li>
          <li><span style={{'fontSize':"18px",'fontWeight':'700'}}>{items.bold2} </span>{items.para2} </li>
          <li><span style={{'fontSize':"18px",'fontWeight':'700'}}>{items.bold3} </span>{items.para3}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </>
  )
}