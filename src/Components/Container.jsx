import React from "react";
import logo from "../assets/Images/Solid_lines.png"


const Container = () => {
  return (
  <div className="main-container">
    <div className="inner-container">
      <img src={logo} alt="" />
      <h1>It's a delight to have you <br/> onboard</h1>
      <p>
        Help us know you better.<br/>(This is how we optimize Wobot as per your
        business needs)
      </p>

      <form>
  <div className="form-group">
    <label className="con-label con-label1" htmlFor="cName">Company name</label>
    <input type="text" className="form-control" id="cName" placeholder="e.g. Example Inc"/>
  </div>


  <div className="form-group">
  <label className="con-label con-label2" htmlFor="select1" >Industry</label>
  <select className="custom-select form-control" id="select1" >
    <option value="select">Select</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>


<div className="form-group">
  <label className="con-label con-label3" htmlFor="cselect" >Company size</label>
<div id="cselect">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
  <label className="btn btn-primary select-btns" htmlFor="btnradio1">1-20</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
  <label className="btn btn-primary select-btns" htmlFor="btnradio2">21-50</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
  <label className="btn btn-primary  select-btns" htmlFor="btnradio3">51-200</label>


  <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
  <label className="btn btn-primary select-btns" htmlFor="btnradio4">201-500</label>


  <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off"/>
  <label className="btn btn-primary select-btns" htmlFor="btnradio5">500+</label>
</div>
</div>

        <a href="/" className="btn btn-primary sub-btn form-control">Get Started</a>

        </form>

        </div>
    </div>
  );
};

export default Container;
