import React from 'react'

const Thumbnail = ({item}) => (
    <div className="col-md-3 col-sm-6 hero-feature">
        <div className="thumbnail">
            <img src={item.img} alt=""/>

            <div className="caption">
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <hr />

                <div className="margin-btm-5">
                    <a href={"/game/" + item.id} className="btn btn-app"><i className="fa fa-gamepad" aria-hidden="true"></i> Play</a>
                </div>
                <div>
                    <a href={"/editor/worksheet/" + item.id} className="btn btn-app-secondary"><i className="fa fa-wrench" aria-hidden="true"></i> Edit</a>
                </div>
            </div>
        </div>
    </div>
)

export default Thumbnail
