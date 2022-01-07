import Hall from './Hall';
import Ticket from './Ticket';

import '../stylesheets/Showings.css';
import { useParams } from 'react-router-dom';

function Showings (props)
{
    const idMovie = useParams().idMovie;
    var specificShowings = new Array(0);
    var listOfShowings = props.showings;

        if(idMovie)
        {
            for(let i=0;i< props.showings.length; i++)
            {
                if(props.showings[i].idMovie == idMovie)
                {
                    specificShowings.push(props.showings[i]);
                }
                
            }
            listOfShowings = specificShowings;
        }    
        

    function ShowBuyDetails(id)
    {
        var x = document.getElementById(id)
        x.style.visibility = "visible";  
             
    }

    function HideBuyDetails(id)
    {
        var x = document.getElementById(id)
        x.style.visibility = "hidden";
    }

//wyszukiwanie, sortowanie po dacie i godzinie
    if(listOfShowings.length === 0)
        {
            return(
            <div className='empty'>There isn't any avaible showings!</div>
            );
            
        }
        else
        {
            return(
                <div className="showings-table">
                    <table className="table">
                        <thead className="thead">
                            <tr>
                            <th scope="col">Movie</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
        
                        <tbody className="tbody">
                            {listOfShowings.map((showing) =>
                            {
                                return(
                                    <tr key={showing.id}>
                                        {props.movies.map((movie) =>
                                        {
                                            if(showing.idMovie === movie.id)
                                            {
                                                return(
                                                    <th scope="row" key ={showing.id}>{movie.title}</th>
                                                );
                                            }
                                            return null;
                                        })}
        
                                    <td>{showing.sDate}</td>
                                    <td>{showing.sHour}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={e =>ShowBuyDetails(showing.id)}>
                                            Buy ticket
                                        </button>
        
        
                                        <div className="buy-details"  id={showing.id}>
                                        <div className="buy-details-card">
        
                                            <button className="close-details-button" onClick={e => HideBuyDetails(showing.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                                </svg>
                                            </button>
                                            
                                            <div className="hall">
                                                {props.halls.map((hall)=>
                                                {
                                                    if( showing.idHall === hall.id )
                                                    {
                                                        return(
                                                            <div>
                                                                <Hall id = {showing.idHall} rowsAmount={hall.rowsAmount} seatsAmount={hall.seatsAmount}/>
                                                            </div>
                                                            
                                                        );
                                                    }
                                                })}
                                                
                                            </div> 
        
                                            <div className="order-ticket">
                                                {props.movies.map((movie) =>
                                                {
                                                    if(showing.idMovie === movie.id)
                                                    {
                                                        return(
                                                            <div>
                                                                <Ticket title = {movie.title} date = {showing.sDate} time ={showing.sHour}/>
                                                            </div>
                                                            
                                                        );
                                                    }
                                                    return null;
                                                })}
                                                
                                            </div>
        
                                        </div>
                                    </div>
                                            
                                    </td>
                                
                                </tr> 
                                    );
                            }
                            
                            )}
                            
                        </tbody>
                    </table>
                </div>
        
            );
        }
    

}
export default Showings;