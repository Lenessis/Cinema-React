import React from "react";
import { Component } from "react/cjs/react.production.min";
import '../stylesheets/Hall.css';

/*
 * This component shows seating in single cinema hall 
 */

// Renderowanie miejsc po wierszu i ilości miejsc w wierszu
//jedno miejsce ma id, należy do jakiejś sali i ma status Zarezerwowane lub nie
class Hall extends Component
{
    /* Przekazywanie do hall sali z bazy danych z okreslonymi siedzeniami */
    hallName = " Sala C 204";
    NextChar(x)
    {
        return String.fromCharCode(x.charCodeAt(0) + 1);
        /* Solution: https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters */
    }

     RenderSingleRow = (rowName, amountOfSeats) =>
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

    RenderRows = (amountOfRows) =>
    {
        /* przekazywanie do renderRows tablicy z iloscia miejsc 
        w danym rzedzie,
         a liczba rzedow to dlugosc tablicy */
        const rows = [];

        for(let i = 'A', j = 1; j <= amountOfRows; j++)
        {
            rows.push(
                <div className="row">{this.RenderSingleRow(i, 10)}</div>
            );
            i = this.NextChar(i);
        }
        return rows;
    }

    render()
    {
        /* klikniecie na siedzenie wywołuje mechanizm kupowania biletu ?*/
        return(
            <div className="hall">
                <h2>{this.hallName}</h2>
                {this.RenderRows(5)}
            </div>
        );
    }

}

export default Hall;