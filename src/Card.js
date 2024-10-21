import './style.css'

export default function Card({name}){
    return (
        <div class="card">

            <div class="imgBox">
                <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-casual-shoes-png-image_2402400.jpg" alt="mouse corsair" class="mouse"/>
            </div>
        
            <div class="contentBox">
            <h3>Mouse Corsair M65</h3>
            <h2 class="price">61.<small>98</small> €</h2>
            <a href="#" class="buy">Buy Now</a>
            </div>
        
        </div>
  )
}