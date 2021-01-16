import React from 'react'
import style from './CoronaPage.module.css'

const CoronaPage: React.FC = () => {
    return (
        <div className={style.corona}>
            <div className={style.block}>
                <h2 className={style.title}>
                    COVID-19
                </h2>
                <p>
                    The new coronavirus is a respiratory virus . It is transmitted mainly by
                    airborne droplets as a result of inhalation of droplets from the patient's airways, for example,
                    when
                    coughing or sneezing, as well as droplets of saliva or nasal discharge. It can also spread when a
                    sick
                    person touches any contaminated surface, such as a doorknob. In this case, infection occurs by
                    touching
                    the mouth, nose or eyes with dirty hands.
                </p>
                <p>
                    You can find up-to-date information on the website <a href='https://covid19.rosminzdrav.ru/'>RosMinzdrav</a>
                </p>
            </div>
        </div>
    )
}

export default CoronaPage