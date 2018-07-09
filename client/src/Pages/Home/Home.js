import React, {Component} from "react";
import API from "./../../utils/API"

class Home extends Component {
    state = {
        articles: [],
        q: "",
        start_year: "",
        end_year: ""
    }

    componentDidMount(){
        this.getArticles();
    }

    // my methods
    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
        .then(res =>
            this.setState({
                articles: res.data,
            })
        )
        .catch(err => console.log(err));
    }

    clickEventHandler = (articleId) => {
        console.log("you clicked save article!\nArticle ID: ", articleId)
    }

    render(){
        return (
            <div className="container">
                {this.state.articles.map(article => (
                    <div className="card col-12" key={article._id}>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-10">
                                <h5 className="card-title">{article.headline.main}</h5>
                                <p className="card-text">{article.snippet}</p>
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-end">
                                <button onClick={()=>this.clickEventHandler(article._id)} className="btn btn-primary">Save Article</button>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};

export default Home;
