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
    
    function NextChar(x)
    {
        return String.fromCharCode(x.charCodeAt(0) + 1);
        /* Solution: https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters */
    }

     function RenderSingleRow(rowName, amountOfSeats)
    {
        const seats = [];

        for(let i = 1; i <= amountOfSeats; i++)
        {
            seats.push(
                <div className="single-seat">
                    {rowName}{i}
                </div>
            );
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
                <h2>Sala {props.id}</h2>
                <div className="render-rows">
                    
                    {RenderRows(props.rowsAmount, props.seatsAmount)}
                    
                </div>
                
            </div>
        );
    

}

export default Hall;