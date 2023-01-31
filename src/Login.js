import React,{useState} from 'react' 
import image from './1.png';
import image1 from './2.png';
import image2 from './3.png';
import image3 from './1.jpg';
import image4 from './2.jpg';
import image5 from './3.jpg';
import image6 from './4.webp';
import image8 from './7.jpeg';

// import pic from './src/2.png';
// import photo from '';

const Login=()=>{ 
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
	return(
	// <div className='container'>
    //     <div className='main'>
	// 	<form action="" onSubmit={submitThis}> 
	// 		<div> 
	// 			<label htmlFor="email">Email</label>
	// 			<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
	// 		</div> 
	// 		<div> 
	// 			<label htmlFor="passw">Password</label>
	// 		<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
	// 		</div>  
	// 		<button type="submit">Login</button>
	// 	</form>
    //     </div>
	// </div>
  <React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light abhi" >
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">MYSCHOOL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Web Development
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Web Development</a></li>
            <li><a className="dropdown-item" href="#">JavaScript</a></li>
            <li><a className="dropdown-item" href="#">HTML</a></li>
            <li><a className="dropdown-item" href="#">CSS</a></li>
            <li><a className="dropdown-item" href="#">React JS</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Paid course</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={image} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className='heading'>Skills for your future</h1>
        <p className='eat'>EAT SLEEP CODE REPEAT.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='heading'>Skills for your future</h1>
      <p className='eat'>EAT SLEEP CODE REPEAT.</p>
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='heading'>Skills for your future</h1>
      <p className='eat1' >EAT SLEEP CODE REPEAT.</p>
        {/* <h5>Third slide label</h5> */}
        {/* <p>Some representative placeholder content for the third slide.</p> */}
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
<div class="row row-cols-1 row-cols-md-3 ">
  <div class="col">
    <div class="card">
      <img src={image3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Fun fact: all websites use HTML — even this one. It’s a fundamental part of every web developer’s toolkit. HTML provides the content that gives web pages structure, by using elements and tags, you can add text, images, videos, forms, and more. Learning HTML basics is an important first step in your web development journey and an essential skill for front- and back-end developers.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">You’ll find learning CSS essential in styling websites. Web developers use it to build on basic HTML and add personality to plain text pages. This course helps you expand your coding foundation and gives you CSS interactive practice to start adding colors and background images or editing layouts so you can create your very own, unique stylized web pages.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">You interact with JavaScript code all the time — you just might not realize it. It powers dynamic behavior on websites (like this one) and plays an important role in many fields, like front- and back-end engineering, game and mobile development, virtual reality, and more. In this course, you’ll learn JavaScript fundamentals that will be helpful as you dive deeper into more advanced topics.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image6} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">With its adaptability and fast rendering, you’ll find the C programming language used everywhere, from web browsers to game development and operating systems to science and machine learning tools. This course will help you learn C basics and give you hands-on experience to create your own projects and work with computer memory.</p>
      </div>
    </div>
  </div>
<div class="col">
    <div class="card">
      <img src={image8} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This course is designed to be a comprehensive approach to Git, which means no prior knowledge or experience is required but students will emerge at the end with a very solid understanding and hands-on experience with Git and related source control concepts.</p>
      </div>
    </div>
  </div>
</div>
<footer class="site-footer">
      <div class="cont">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">WE<i> WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="">C</a></li>
              <li><a href="https://www.w3schools.com/html/">HTML</a></li>
              <li><a href="https://www.w3schools.com/CSS/">CSS</a></li>
              <li><a href="https://www.w3schools.com/javascript/">JavaScript</a></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
             
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="cont">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">ABHISHEK</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</React.Fragment>
)} 
export default Login   