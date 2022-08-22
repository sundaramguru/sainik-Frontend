import React, { useState, useEffect, useRef  } from 'react'
import axios from "axios";
import emailjs from 'emailjs-com';
import FormLabel from "../../view/FormLabel";
import ms from 'ms';
import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import FormInput from "../../view/FormInput";
// import TextField from '@material-ui/core/TextField';
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
// import DatePicker from 'react-date-picker';


const Form7c = () => {

const [Mail_Id, setMail_Id] = useState(localStorage.getItem('Mail_Id'));
const [message, setmessage] = useState('');
const [birthday, setbirthday]= useState('');
const [minDate, setminDate]= useState('');
const [maxDate, setmaxDate]= useState('');
const [enroll, setenroll]= useState('');
const componentRef = useRef();
const [name, setname] = useState('');
const [age, setage] = useState([]);
const [dob, setdob] = useState([]);
const [p_date, setp_date] = useState([]);
    const[checked, setchecked] = useState('false');
    const [Marital_Status, setMarital_Status] = useState(localStorage.getItem('Marital_Status'));
    const [Marriage_Date, setMarriage_Date] = useState(localStorage.getItem('Marriage_Date'));
    const [Spouse_Name, setSpouse_Name] = useState(localStorage.getItem('Spouse_Name'));
    const[visible,setVisible]=useState(false);
    const[visiible,setVisiible]=useState(false);


  useEffect(() => {
     const minsec = ms('5475d')
     const min_date = new Date(+new Date(birthday) - minsec);
     const max_date = new Date(+new Date(birthday) + minsec);

     setminDate(moment(min_date).format('YYYY-MM-DD'));
     setmaxDate(moment(max_date).format('YYYY-MM-DD'));
     console.log(min_date, max_date)

    }, [birthday]);


 const onEnrolld = (e) =>  {

 setenroll('');
    }

const onEnrolldChange = (e) =>  {

 setenroll(e.target.value);
    }


const PdfGenerate = (e) =>  {
var doc = new jsPDF('portrait`,'px`,'a4`,'false');
doc.setLineWidth(1);
doc.html(document.querySelector("#content"),{
callback: function(pdf){
pdf.save('a.pdf');
}
});
};



const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kgpr6mm`, 'mailid_template`, e.target, 'HaFC-IRHQSI8N8--K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

const capt = (e) => {
    var alpha = ['A`,'B`,'C`,'D`,'E`,'F`,'G`,'H`,'I`,'J`,'K`,'L`,'M`,'N`,'O`,'P`,'Q`,'R`,'S`,'T`,'U`,'V`,'W`,'X`,'Y`,'Z`,'a`,'b`,'c`,'d`,'e`,'f`,'g`,'h`,'i`,'j`,'k`,'l`,'m`,'n`,'o`,'p`,'q`,'r`,'s`,'t`,'u`,'v`,'w`,'x`,'y`,'z`,'1`,'2`,'3`,'4`,'5`,'6`,'7`,'8`,'9`,'0'];
    var a= alpha[Math.floor(Math.random()*62)];
    var b= alpha[Math.floor(Math.random()*62)];
    var c= alpha[Math.floor(Math.random()*62)];
    var d= alpha[Math.floor(Math.random()*62)];
    var e= alpha[Math.floor(Math.random()*62)];
    var f= alpha[Math.floor(Math.random()*62)];

    var sum = a+b+c+d+e+f;

setmessage(sum);
  }



function toggle(value){
  return !value;
}
  const handleClick=()=>{

    setchecked('toggle')

           }


const onSNameChange = (e) =>  {
 const a = /^[A-Z/ \b]+$/;

     if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
    {

        setSpouse_Name(e.target.value.toUpperCase());
    }

}


const MS = (e) =>  {

     if (Marital_Status === "Married")
    {
setname('yyyt')
        setVisiible(true)
    }
   else
   {
    setVisiible(false)
   }
}



return (
    <div className="center">
    <div class="wrapper fadeInDown ">

    <form onSubmit={sendEmail}>
<div  className = "box">
	  <div className="col-md-4 space">
	  <FormLabel text={"Name"} />
	  <input type="text" name="name"   />
      </div><br/><br/><br/>

      <div className="col-md-4 space">
      <FormLabel text={"Email"} />
	  <input type="text" name="Mail_Id" value={Mail_Id}  />
      </div><br/><br/><br/>

      <div className="col-md-4 space">
      <FormLabel text={"Message"} />
	  <input type="text" name="message"  value = {message}  onClick ={capt} />
      </div><br/><br/><br/>

      <div className="col-lg-12 space">
      <label htmlFor ="">Birthday {birthday} {minDate} {maxDate}</label><br/>
      <input type="date" onChange={e=>setbirthday(e.target.value)}   /> <br/> <br/>

      <label htmlFor ="">Birthday Leave</label><br/>
      <input type="date" min= {minDate} max = {maxDate} value={enroll} onChange = {onEnrolldChange} onKeyPress = {onEnrolld}/>
</div><br/><br/>

        <input type="submit" value="Send" />
        <br/> <br/> <br/>
        </div>


 {/* ######################### PDF ########################## */}

<div   className = "box"   style = {{textAlign : 'center'}}>
<button onClick = {PdfGenerate}> Download Pdf </button>

<div >
<div id = "content">
      <div className="col-lg-12 space">
      <FormLabel text={"Name"} />
      <input type="text" name="name" />
      </div><br/><br/><br/>

      <div className="col-lg-12 space">
      <FormLabel text={"Email"} />
      <input type="text" name="mail_Id"   />
      </div><br/><br/><br/>

      <div className="col-lg-12 space">
      <FormLabel text={"Date_Picker"} /><br/><br/><br/>

    {/* <Calendar value={dateState}  onChange={changeDate}/> */}
</div><br/><br/><br/>


{/*<TextField label="M-UI" />
*/}
</div>
</div>
<br/><br/><br/><br/>
</div>

{/* ######################### PDF ########################## */}

{/* ######################### PDF ########################## */}

<div>
        <FormLabel text={"Marital Status"} />
        <div className="col-lg-10 space">
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio"   name="Marital_Status"  value="Married"  onClick={MS}  />
            <label className="form-check-label" for="inlineRadio1">Married</label>
            </div>

            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio"  name="Marital_Status"  value="0"  onClick={()=> setVisible(true)}   />
            <label className="form-check-label" for="inlineRadio2">Single</label>
            </div>

            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio"  name="Marital_Status" value="0"  onClick={()=> setVisible(false)} />
            <label className="form-check-label" for="inlineRadio1">Divorced</label>
            </div>

            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="Marital_Status" value="0" onClick={()=> setVisible(false)}  />
            <label className="form-check-label" for="inlineRadio2">Widow/Widower</label>
            </div>
        </div>

   {/* {
     (() => {

     if(checked=='0')
            {
                 return(
                 <div>
                          <FormLabel text={"Marriage Date"} />
                          <div className="col-lg-4 space">
                          <input  disabled type="date"  class="fadeIn second formInput" name="Marriage_Date" value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} />
                          </div>

                          <FormLabel text={"Spouse Name"} />
                          <div className="col-lg-4 space">
                          <input  disabled type="text"  class="fadeIn second formInput" name="Spouse_Name" value={Spouse_Name} onChange={onSNameChange} />
                          </div>
                 </div>
                       )
            }
      else{
                 return(
                 <div>
                          <FormLabel text={"Marriage Date"} />
                          <div className="col-lg-6 space">
                          <input   type="date"  class="fadeIn second formInput" name="Marriage_Date" value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} />
                          </div>

                          <FormLabel text={"Spouse Name"} />
                          <div className="col-lg-6 space">
                          <input   type="text"  class="fadeIn second formInput" name="Spouse_Name" value={Spouse_Name} onChange={onSNameChange} />
                          </div>


                 </div>
                       )
          }

})()
} */}

{ visiible &&
            <div>
                          <FormLabel text={"Marriage Date"} />
                          <div className="col-lg-4 space">
                          <input   type="date"  class="fadeIn second formInput" name="Marriage_Date" value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} />
                          </div>

                          <FormLabel text={"Spouse Name"} />
                          <div className="col-lg-4 space">
                          <input   type="text"  class="fadeIn second formInput" name="Spouse_Name" value={Spouse_Name} onChange={onSNameChange} />
                          </div>

             </div>
            }

{ visible &&
            <div>
            <FormLabel text={"Marriage Date"} />
                          <div className="col-lg-4 space">
                          <input  disabled type="date"  class="fadeIn second formInput" name="Marriage_Date" value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} />
                          </div>

                          <FormLabel text={"Spouse Name"} />
                          <div className="col-lg-4 space">
                          <input  disabled type="text"  class="fadeIn second formInput" name="Spouse_Name" value={Spouse_Name} onChange={onSNameChange} />
                          </div>
            </div>
            }
</div>






{/* ######################### PDF ########################## */}

</form>
</div>
</div>

)
}

export default Form7c
