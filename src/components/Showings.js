/* tabela z dostępnymi seansami np:
data; godzina; film; sala
 29.10.22; 16:00; harry potter; sala 1
 */

import react from "react";

import Hall from './Hall';
import Ticket from './Ticket';

import '../stylesheets/Showings.css';

const Showings = () =>
{

    function ShowBuyDetails()
    {
        var x = document.getElementById("test-box")
        x.style.visibility = "visible";
        
    }

    function HideBuyDetails()
    {
        var x = document.getElementById("test-box")
        x.style.visibility = "hidden";
    }

    //test code
    return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <button className="btn btn-primary" onClick={e =>ShowBuyDetails()}>
                            Buy ticket
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
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
                        <Hall />
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