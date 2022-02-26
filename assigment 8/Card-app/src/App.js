import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';



export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 10,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
      axios
          .get(`https://jsonplaceholder.typicode.com/comments`)
          .then(res => {

              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map((pd) =>{return(
               <React.Fragment >
                  <div key={pd.id} className="card" style={{width: "28rem",backgroundColor:"dodgerblue",marginLeft:"30%",marginTop:"50px"}}>
  {/* <img src="https://cdn.pixabay.com/photo/2016/11/29/07/22/bible-1868070_960_720.jpg" className="card-img-top" alt="..."/> */}
  <div   className="card-body">
     
  <h5  className="card-title">{pd.id}</h5>
  <h5 className="card-title">{pd.name}</h5>

    <h5 className="card-title">{pd.email}</h5>

    <p className="card-text">{pd.body}</p>
  </div>
</div>

                  {/* <p>{pd.id}</p>
                  <p>{pd.name}</p>
                  <p>{pd.email}</p>
                  <p>{pd.body}</p> */}
                  <img src={pd.thumbnailUrl} alt=""/>
              </React.Fragment>)})

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                 
                  postData
              })
          });
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      return (
          <div>
              {this.state.postData}
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>

      )
  }
}
