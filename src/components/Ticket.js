import React from "react";
import PropTypes from 'prop-types';
import '../stylesheets/form.css'
import { addTicket } from "../api/TicketsApi";


const Ticket = (props) =>
{
    var listOfSeats;

    
    
    function BuyTicket(e)
    {
        e.preventDefault();
        listOfSeats = props.seatsList()
        if(
            document.getElementById(props.idS+"firstname-alert").innerHTML === "" &&
            document.getElementById(props.idS+"lastname-alert").innerHTML === "" &&
            document.getElementById(props.idS+"email-alert").innerHTML === ""
        )
        {

            const firstname = document.getElementById(props.idS+"firstname").value;
            const lastname = document.getElementById(props.idS+"lastname").value;
            const email = document.getElementById(props.idS+"email").value;
            const price = document.getElementById(props.idS+"discount").value;

            console.log("f, l, e, p ", firstname, lastname, email, price)

            console.log("leng", listOfSeats.length)

            

            if(firstname && lastname && email && listOfSeats.length !== 0)
            {
                addTicket(props.idS,firstname,lastname,email,price, listOfSeats);
                document.getElementById(props.idS+"success-alert").innerHTML = "Ticket bought successfully!"
            }
            
        }
    }

    function CheckDate(date)
    {
        let today = new Date();
        today.setHours('00')
        today.setMinutes('00')
        today.setSeconds('00')
        today.setMilliseconds('00')

        let selectedYear = date.slice(0,4)
        let selectedMonth = date.slice(5,7)
        let selectedDay = date.slice(8,10)

        let selectedDate = new Date(selectedYear, selectedMonth-1, selectedDay)

        if(selectedDate < today)
        {
            document.getElementById(props.idS+"date-alert").innerHTML =  "You cannot select a date earlier than today!";
        }
        else
        {
            document.getElementById(props.idS+"date-alert").innerHTML =  "";
            CheckTime(document.getElementById(props.idS+"movieTime").value);
        }
    }

    function CheckTime(time)
    {
        let today = new Date();

        let todayHour = parseInt(today.getHours())
        //let todayMinutes = parseInt(today.getMinutes())
        let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        let selectedHour = parseInt(time.slice(0,2))
        let selectedMinutes = parseInt(time.slice(3))

        let dateValue = document.getElementById(props.idS+"movieDate").value;

        if(selectedMinutes !== 0)
        {
            document.getElementById(props.idS+"time-alert").innerHTML =  "Showings only take place on full hours!";
        }
        else if(selectedHour < 10 || selectedHour > 20)
        {
            document.getElementById(props.idS+"time-alert").innerHTML =  "Showings only take place between 10 a.m. adn 8 p.m.!";
        }
        else if(dateValue === todayDate)
        {
            if(selectedHour<todayHour)
            {
                document.getElementById(props.idS+"time-alert").innerHTML =  "Select later hour!";
            }           
        }
        else
        {
            document.getElementById(props.idS+"time-alert").innerHTML =  "";
        }
    }

    function CheckName(name, id_prefix)
    {  
        const element_id = props.idS+id_prefix+"name-alert";
        let info = id_prefix[0].toUpperCase() + id_prefix.slice(1) + "name";

        if(name === "")
        {
            document.getElementById(element_id).innerHTML = info + " cannot be empty!";
        }
        else
        {
            document.getElementById(element_id).innerHTML = "";
        }

    }

    function CheckEmail(email)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email === "")
        {
            document.getElementById(props.idS+"email-alert").innerHTML = "Email addres cannot be empty!";
        }
        else if (!email.match(mailformat))
        {
            /* The match() method retrieves the result of matching a string against a regular expression. */
            document.getElementById(props.idS+"email-alert").innerHTML = "Wrong email format!";
        }
        else
        {
            document.getElementById(props.idS+"email-alert").innerHTML = "";
        }
    }

    return(
        <div className="form-content"> 
            <h1>Ticket</h1>
            {/* Zrobić, żeby wyświetlało tu się miejsce i nazwa filmu!!! */}
            <p>Buy a ticket for <b>{props.title}</b> </p>
            
            <form>
                {/* DATE AND TIME INPUTS */}
                <div className="form-row col-md-6">
                        <div className="form-group col-md-6">
                            <label for="movieDate">Date</label>
                            <input type="date" className="form-control" id={props.idS+"movieDate"} onChange={e => CheckDate(e.target.value)} value={props.date} disabled/>
                            <div className="alert" id={props.idS+"date-alert"}></div>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="movieTime">Time</label>
                            <input type="time" className="form-control" id={props.idS+"movieTime"} step="3600" onChange={e => CheckTime(e.target.value)} value={props.time} disabled/>
                            <div className="alert" id={props.idS+"time-alert"}></div>
                        </div>
                    </div> 

                {/* FIRST AND LASTNAME INPUTS */}
                <div className="form-row col-md-6">
                    <div className="form-group col-md-5">
                        <label for="firstname">Firstname</label>
                        <input type="text" className="form-control" id={props.idS+"firstname"} placeholder="Firstname..." onChange={e => CheckName(e.target.value, "first")}/>
                        <div className="alert" id={props.idS+"firstname-alert"}></div>
                    </div>
                    <div className="form-group col-md-5">
                        <label for="lastname">Lastname</label>
                        <input type="text" className="form-control" id={props.idS+"lastname"} placeholder="Lastname..." onChange={e => CheckName(e.target.value, "last")}/>
                        <div className="alert" id={props.idS+"lastname-alert"}></div>
                    </div>
                </div>
                
                {/* EMAILS INPUT */}
                <div className="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id={props.idS+"email"} aria-describedby="emailHelp" placeholder="Enter email..." onChange={e => CheckEmail(e.target.value)}/>
                    <div className="alert" id={props.idS+"email-alert"}></div>
                </div>
                
                {/* DISCOUNT SELECT */}
                <div className="form-group col-md-6">
                    <label for="Discount">Discount</label>
                        <select id={props.idS+"discount"} className="form-control" defaultValue="20">
                            <option value="20" selected>Normal - 20 PLN</option>
                            <option value="16">Concessionary - 16 PLN</option>
                        </select>                   
                </div>

                <button type="submit" className="btn btn-primary" onClick={e=>BuyTicket(e)}>Buy</button>
                <div className="alert success" id={props.idS+"success-alert"}></div>
            </form>
               
            
        </div>
    );
}

Ticket.propTypes =
{
    movieDate: PropTypes.instanceOf(Date).isRequired,
    movieTime: PropTypes.instanceOf(Date).isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Ticket;