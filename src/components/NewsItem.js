import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl,newsUrl,author ,date} = props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://images.livemint.com/img/2021/11/03/600x338/LatentView_1635908393746_1635908400808.JPG":imageUrl} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                        <h5 className="card-title">{ title}...</h5>
                        <p className="card-text">{ description }...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
