import { tab } from '@testing-library/user-event/dist/tab'
import React from 'react'

export const Comment = () => {
    const tabCom=[{name:"amin",comment:"cest bien"},
    {name:"ali",comment:"bien"},
    {name:"ahmed",comment:"not bien "}]
  return (
    <div className='comm'>
        {tabCom.map(com=>(<div>
            <h3>{com.name}</h3>
            <h4>{com.comment}</h4>
        </div>

        )
        )

        }



    </div>
  )
}
