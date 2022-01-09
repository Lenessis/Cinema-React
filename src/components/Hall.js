import React from "react";
import '../stylesheets/Hall.css';

/*
 * This component shows seating (avaible and reserved) in single cinema hall 
 */

const Hall = props =>
{
    // customer list of seats
    var reservedSeats = new Array(0);

    // changing numbers to letters method
    function NextChar(x)
    {
        return String.fromCharCode(x.charCodeAt(0) + 1);
        /* Solution: https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters */
    }

    /* Reserve your seat method  */
    function ReserveSeat(id)
    {  
        var element = document.getElementById(id);
        if(!reservedSeats.includes(element.innerHTML))
        {           
            element.classList.add("chosenSeat");
            reservedSeats.push(element.innerHTML);
            document.getElementById(props.idS+"seats-alert").innerHTML = "";
        }
        else
        {
            
            let removeIndex = reservedSeats.indexOf(element.innerHTML)
            element.classList.remove("chosenSeat");
            reservedSeats.splice(removeIndex,1)
            if(reservedSeats.length === 0)
            {
                document.getElementById(props.idS+"seats-alert").innerHTML = "Choose your seats!";
            }
        }
        props.list(reservedSeats);
    }


     function RenderSingleRow(rowName, amountOfSeats)
    {
        const seats = [];

        for(let i = 1; i <= amountOfSeats; i++)
        {
            let idSeat = props.idS+rowName+i
            let content = rowName+i

            // rendering reserved seats on specific showing
            if(props.reservedList.includes(content))
            {
                seats.push(
                    <div className="single-seat reservedSeat" id={idSeat} >
                    {content}
                </div>
                );
            }

            // rendering avaible seatings on specific showing
            else
            {
                seats.push(
                    <div className="single-seat" id={idSeat} onClick={e=>{ReserveSeat(idSeat)}}>
                        {content}
                    </div>
                );
            }
        }            

        return seats;
    }

    function RenderRows(amountOfRows, amountOfSeats)
    {
        const rows = [];

        for(let i = 'A', j = 1; j <= amountOfRows; j++)
        {
            rows.push(
                <div className="row">{RenderSingleRow(i, amountOfSeats)}</div>
            );
            i = NextChar(i);
        }

        return rows;
    }

        return(
            <div className="hall">
                <h2>Hall {props.id}</h2>
                <div className="render-rows">
                    
                    {RenderRows(props.rowsAmount, props.seatsAmount)}
                    
                </div>
                <div className="alert" id={props.idS+"seats-alert"}></div>               
            </div>
        );
}

export default Hall;