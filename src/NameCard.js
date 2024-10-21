import { useState } from 'react'
import './style.css'

export default function NameCard({name,removeName}){
    const [isDie,setIsDie] = useState(false)

    function airCrash(){
        setIsDie(!isDie)
    }
    return (
        <div class="card" onMouseEnter={airCrash} onMouseLeave={airCrash} >

            <div class="imgBox">
                <img id='kobe' src={ !isDie ? "https://m.media-amazon.com/images/M/MV5BMDIyYjkzM2QtMDc5MS00OTExLTg2ZmUtZGM2MzJjNjNjODliXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAY6V_GaP1nyMs3Chxab3uYZDCdWM_KajHTJDekpvXdvEJX7EpG_SfZGWuJHBk1Fd7Lg&usqp=CAU"} alt="mouse corsair" class="mouse"/>
            </div>
        
            <div class="contentBox">
                <h3>{name}</h3>

                <button onClick={()=>{removeName(name)}} href="#" class="buy">Delete Now</button>
            </div>
        
        </div>
    )
}