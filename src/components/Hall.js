import React from "react";
import { Component } from "react/cjs/react.production.min";
import '../stylesheets/Hall.css';

/*
 * This component shows seating in single cinema hall 
 */

// Renderowanie miejsc po wierszu i ilości miejsc w wierszu
//jedno miejsce ma id, należy do jakiejś sali i ma status Zarezerwowane lub nie
const Hall = props =>
{
    var reservedSeats = new Array(0);

    function NextChar(x)
    {
        return String.fromCharCode(x.charCodeAt(0) + 1);
        /* Solution: https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters */
    }
console.log(props.reservedList)
    function ReserveSeat(id)
    {  
        var element = document.getElementById(id);
        if(!reservedSeats.includes(element.innerHTML))
        {           
            element.classList.add("chosenSeat");
            reservedSeats.push(element.innerHTML);
        }
        else
        {
            let removeIndex = reservedSeats.indexOf(element.innerHTML)
            element.classList.remove("chosenSeat");
            reservedSeats.splice(removeIndex,1)
        }
        props.list(reservedSeats);
        console.log(reservedSeats)
    }


     function RenderSingleRow(rowName, amountOfSeats)
    {
        const seats = [];

        for(let i = 1; i <= amountOfSeats; i++)
        {
            let idSeat = props.idS+rowName+i
            let content = rowName+i
            if(props.reservedList.includes(content))
            {
                seats.push(
                    <div className="single-seat reservedSeat" id={idSeat} >
                    {content}
                </div>
                );
            }
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
        /* przekazywanie do renderRows tablicy z iloscia miejsc 
        w danym rzedzie,
         a liczba rzedow to dlugosc tablicy */
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
                
            </div>
        );
    

}

export default Hall;