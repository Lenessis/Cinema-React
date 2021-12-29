/* tabela z dostępnymi seansami np:
data; godzina; film; sala
 29.10.22; 16:00; harry potter; sala 1
 */

import react, { useState } from "react";

import Hall from './Hall';
import Ticket from './Ticket';

import '../stylesheets/Showings.css';

const Showings = (props) =>
{
    let [idHall] = useState();

    function ShowBuyDetails(id)
    {
        var x = document.getElementById("test-box")
        x.style.visibility = "visible";
        idHall = id;
        
    }

    function HideBuyDetails()
    {
        var x = document.getElementById("test-box")
        x.style.visibility = "hidden";
        idHall = null;
    }

    //test code
    return(
        <div className="showings-table">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Movie</th>
                    <th scope="col">Date</th>
                    <th scope="col">Hour</th>
                    <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    {props.showings.map((showing) =>
                    {
                        return(
                            <tr>
                                {props.movies.map((movie) =>
                                {
                                    if(showing.idMovie === movie.id)
                                    {
                                        return(
                                            <th scope="row">{movie.title}</th>
                                        );
                                    }
                                })}

                            <td>{showing.sDate}</td>
                            <td>{showing.sHour}</td>
                            <td>
                                <button className="btn btn-primary" onClick={e =>ShowBuyDetails(showing.idHall)}>
                                    Buy ticket
                                </button>
                            </td>
                        </tr> 
                            );
                    }
                    
                    )}
                    
                </tbody>
            </table>


            {/* --- HIDDEN DETAILS BOX --- */}
            <div className="buy-details"  id="test-box"> {/*id={props.id}*/}
                <div className="buy-details-card">

                    <button className="close-details-button" onClick={e => HideBuyDetails()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </button>
                    
                    <div className="hall">
                        <Hall id = {idHall}/>
                    </div>

                    <div className="order-ticket">
                        <Ticket />
                    </div>

                </div>
            </div>

        </div>

    );

}
export default Showings;