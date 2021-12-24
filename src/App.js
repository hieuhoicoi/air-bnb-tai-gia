import React from "react"
import Navbar from "./compo/Navbar"
import Hero from "./compo/Hero"
import Card from "./compo/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.img}
                rating={item.stats.rate}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.numLeft}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
             <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}