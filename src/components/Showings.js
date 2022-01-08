import Hall from './Hall';
import Ticket from './Ticket';

import '../stylesheets/Showings.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTicketAction} from '../actions/actions'


function Showings (props)
{
    // --- Showing all or specific showings depends on params
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
 
     // --- Hiddenbox

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

    // --- List of seats
    var seatsList = new Array(0);
    var reservedSeatsList = new Array(props.showings.length);
    function ListOfSeats(list)
    {
        seatsList = list
    }

    function sendSeatsList()
    {
        return seatsList;
    }

    // counting previous reserved seats and adding them to the array to send it to Hall component
    function NumberOfReservedSeats(id)
    {
        let count = 0;
        var temp = new Array(0);
        for(let i = 0; i<props.tickets.length;i++)
        {
            if(id == props.tickets[i].idShowing)
            {
                for(let j = 0; j< props.tickets[i].seats.length; j++)
                {
                    temp.push(props.tickets[i].seats[j])
                    count++;
                }                               
            }
        }
        reservedSeatsList[id]=temp;
        return count;
    }
    
    //buy ticket
    const dispatch = useDispatch()
    function handleSaveTicket(idS, firstname, lastname, email, price, seats)
    {
        dispatch(createTicketAction(idS, firstname, lastname, email, price, seats));
    }

    // top 3
    function Top3()
    {
        let countArray = new Array(props.showings.length);
        let k= 0
        props.showings.map((showing)=>{

            countArray[k] =  new Array(2)
            countArray[k][1] = showing.id
            let count = 0;

            for(let i = 0; i<props.tickets.length;i++)
            {                
                
                if(showing.id == props.tickets[i].idShowing)
                {
                    for(let j = 0; j< props.tickets[i].seats.length; j++)
                    {
                        count++;
                    }                               
                }
                               
            }
            countArray[k][0] =count;
            k++;
        })
       // countArray.sort((a,b,x)=>a[x,0]>b[x,0])
       // countArray = countArray.slice(0,3)
        console.log("showings ticket", countArray)
        //return count;
    }
    Top3()

    if(listOfShowings.length === 0)
        {
            // If there is no showings for specific movie
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
                            <th scope="col">Seats</th>
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
                                        {NumberOfReservedSeats(showing.id)}
                                        /
                                        {props.halls.map((hall)=>
                                        {
                                            if(showing.idHall === hall.id)
                                            {
                                                return hall.rowsAmount*hall.seatsAmount;
                                            }
                                            return null;
                                        })}
                                    </td>
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
                                                                <Hall idS= {showing.id} id = {showing.idHall} rowsAmount={hall.rowsAmount} seatsAmount={hall.seatsAmount} list={ListOfSeats} reservedList={reservedSeatsList[showing.id]}/>
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
                                                                <Ticket idS = {showing.id} title = {movie.title} date = {showing.sDate} time ={showing.sHour} seatsList={sendSeatsList} addTicket={handleSaveTicket}/>
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