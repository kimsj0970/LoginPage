'use client'

import GetAll from "@/pages/api/back/GetAll"

export default function DBgetbutton(){
    
    return(
    <div>
        <button onClick={GetAll}>버튼</button>
    </div>
    )
    }