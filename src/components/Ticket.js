import React from "react";
import PropTypes from 'prop-types';
import '../stylesheets/form.css'


const Ticket = (props) =>
{
    var listOfSeats;

    //dodać funkcję, która zatrzyma w razie czego submit
    function BuyTicket()
    {
        listOfSeats = props.seatsList()
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
            document.getElementById("date-alert").innerHTML =  "You cannot select a date earlier than today!";
        }
        else
        {
            document.getElementById("date-alert").innerHTML =  "";
            CheckTime(document.getElementById("movieTime").value);
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

        let dateValue = document.getElementById("movieDate").value;

        if(selectedMinutes !== 0)
        {
            document.getElementById("time-alert").innerHTML =  "Showings only take place on full hours!";
        }
        else if(selectedHour < 10 || selectedHour > 20)
        {
            document.getElementById("time-alert").innerHTML =  "Showings only take place between 10 a.m. adn 8 p.m.!";
        }
        else if(dateValue === todayDate)
        {
            if(selectedHour<todayHour)
            {
                document.getElementById("time-alert").innerHTML =  "Select later hour!";
            }           
        }
        else
        {
            document.getElementById("time-alert").innerHTML =  "";
        }
    }

    function CheckName(name, id_prefix)
    {  
        const element_id = id_prefix+"name-alert";
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
            document.getElementById("email-alert").innerHTML = "Email addres cannot be empty!";
        }
        else if (!email.match(mailformat))
        {
            /* The match() method retrieves the result of matching a string against a regular expression. */
            document.getElementById("email-alert").innerHTML = "Wrong email format!";
        }
        else
        {
            document.getElementById("email-alert").innerHTML = "";
        }
    }

    return(
        <div className="form-content"> 
            <h1>Ticket</h1>
            {/* Zrobić, żeby wyświetlało tu się miejsce i nazwa filmu!!! */}
            <p>Buy a ticket for <b>{props.title}</b> </p>
            

                {/* DATE AND TIME INPUTS */}
                <div className="form-row col-md-6">
                        <div className="form-group col-md-6">
                            <label for="movieDate">Date</label>
                            <input type="date" className="form-control" id="movieDate" onChange={e => CheckDate(e.target.value)} value={props.date} disabled/>
                            <div className="alert" id="date-alert"></div>
                        </div>

                        <div className="form-group col-md-4">
                            <label for="movieTime">Time</label>
                            <input type="time" className="form-control" id="movieTime" step="3600" onChange={e => CheckTime(e.target.value)} value={props.time} disabled/>
                            <div className="alert" id="time-alert"></div>
                        </div>
                    </div> 

                {/* FIRST AND LASTNAME INPUTS */}
                <div className="form-row col-md-6">
                    <div className="form-group col-md-5">
                        <label for="firstname">Firstname</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Firstname..." onChange={e => CheckName(e.target.value, "first")}/>
                        <div className="alert" id="firstname-alert"></div>
                    </div>
                    <div className="form-group col-md-5">
                        <label for="lastname">Lastname</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Lastname..." onChange={e => CheckName(e.target.value, "last")}/>
                        <div className="alert" id="lastname-alert"></div>
                    </div>
                </div>
                
                {/* EMAILS INPUT */}
                <div className="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email..." onChange={e => CheckEmail(e.target.value)}/>
                    <div className="alert" id="email-alert"></div>
                </div>
                
                {/* DISCOUNT SELECT */}
                <div className="form-group col-md-6">
                    <label for="Discount">Discount</label>
                        <select id="discount" className="form-control" defaultValue="20">
                            <option value="20" selected>Normal - 20 PLN</option>
                            <option value="16">Concessionary - 16 PLN</option>
                        </select>                   
                </div>

                <button type="submit" className="btn btn-primary" onClick={e=>{BuyTicket()}}>Submit</button>
            
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