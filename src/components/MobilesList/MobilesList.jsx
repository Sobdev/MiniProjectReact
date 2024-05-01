import MobilesRow from "../MobilesRow/MobilesRow"
import MobilesData from './../Mobiles.json'
import { useState } from "react"
import './MobilesList.css'

const MobilesList = () => {
    const [mobiles, setMobiles] = useState(MobilesData)

    const [showMobiles, setShowMobiles] = useState(true)

    const handleMobilesShow = () => {
        setShowMobiles(!showMobiles)
    }

    const deleteMobile = mobileIdToDelete => {
        const filteredMobiles = mobiles.filter(eachMobile => eachMobile.id != mobileIdToDelete)
        setMobiles(filteredMobiles)
    }



    return (
        <div className="MobilesList">
            <h1>Mobiles List</h1>


            <button onClick={handleMobilesShow}>
                {
                    showMobiles ? "Hide Mobiles" : "Show Mobiles"
                }
            </button>

            <hr />

            {
                showMobiles && mobiles.map((eachMobile, index) => {
                    return (
                        <div key={index} className='MobileCard'>
                            <h3>{eachMobile.brand === 'Apple' ? "Eres Apple" : "No eres Apple"}</h3>
                            <p>{eachMobile.title}</p>
                            <p>{eachMobile.price}$</p>
                            <button className="btn-delete" onClick={() => deleteMobile(eachMobile.id)}>❌Delete❌</button>
                            <hr />
                        </div>
                    )

                })
            }

        </div>
    )
}

export default MobilesList