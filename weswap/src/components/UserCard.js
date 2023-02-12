import React, { Component } from "react";

const data = [{'name':'Prachi','gender':'female','age':'23','pronouns':'she/her','ehtnicity':'asian','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU'},
{'name':'Akshata','gender':'female','age':'22','pronouns':'she/her','ehtnicity':'american','religion':'christian','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU'},
{'name':'Sisira','gender':'female','age':'23','pronouns':'she/her','ehtnicity':'latino','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'},
{'name':'Vishal','gender':'male','age':'21','pronouns':'he/him','ehtnicity':'asian','religion':'jain','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'},
{'name':'Prachi','gender':'female','age':'23','pronouns':'she/her','ehtnicity':'asian','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU'},
{'name':'Akshata','gender':'female','age':'22','pronouns':'she/her','ehtnicity':'american','religion':'christian','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU'},
{'name':'Sisira','gender':'female','age':'23','pronouns':'she/her','ehtnicity':'latino','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'},
{'name':'Vishal','gender':'male','age':'21','pronouns':'he/him','ehtnicity':'asian','religion':'jain','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'},
];

class UserCards extends Component {
  state = {
    data : [],
    per: 9,
    page: 1,
    total_pages: null
  };
/*
  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }
*/
  render() {
    return (
      <div className="clearfix">
        <div className="row">
          {/*{this.dataset.map(dataset => (*/}
          {Array.from({ length: data.length }).map((_, i) => (
            <div className="col-md-4 animated fadeIn" key={data[i].name}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data[i].image}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data[i].name +
                      " " +
                      data[i].name}
                    </h5>
                  <p className="card-text">
                    {data[i].age +
                      ", " +
                      data[i].gender}
                    <br />
                    <span className="phone">{data[i].religion}</span>
                  </p>
                </div>
              </div>
            </div>))}
            {/*))}*/}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </div>
    );
  }
}

export default UserCards;
