import React, { Component } from 'react';
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';
import { Modal, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

import Particles from 'react-particles-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    items:[],
    id:uuid(),
    title: '',
    desc: '',
    editItem:false,
    modalShow: false,
    color:Math.floor(Math.random()*16777215).toString(16)
  }

  handleChange = (e) => {
    if(e.target.tagName === "INPUT") this.setState({title:e.target.value})
    else this.setState({desc:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title !== "") {
      const newItem = {
        id:this.state.id,
        title:this.state.title,
        desc:this.state.desc,
        color:'#' + Math.floor(Math.random()*16777215).toString(16)
      }

      const updatedItems = [...this.state.items, newItem]

      this.setState({
        items:updatedItems,
        title:'',
        desc:'',
        id:uuid(),
        editItem: false
      })
    } else {
      alert("Subject must not be empty")
    }
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItems
    })
  }

  handleClose() {
    this.setState({ modalShow: false });
  }

  handleShow() {
    this.setState({ modalShow: true });
  }

  render() {
      return (
        <>
          <div id="particles-js">
          <Modal show={this.state.modalShow}  onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ToDoInput 

                            title={this.state.title} 
                            desc={this.state.desc}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}/>
            </Modal.Body>
          </Modal>
          <div className="m-2">
            <Navbar className="justify-content-between">
              <button type="button" className="btn btn-primary text-capitalize m-1" onClick={this.handleShow}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <Navbar.Brand className="text-white">
                 <FontAwesomeIcon icon={faStickyNote} />
                {' To Do List'}
              </Navbar.Brand>
              <button type="button" className="btn btn-danger text-capitalize m-1" onClick={this.clearList}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </Navbar>
            <ToDoList items={this.state.items} handleDelete={this.handleDelete}/>
          </div>
          <Particles params={{
              "particles": {
                  "number": {
                      "value": 100,
                      "density": {"enable":false, "value_area":800}
                  },
                  "color":{"value":"#ffffff"},
                  "shape":{ "type":"star",
                            "stroke":{"width":0,"color":"#000000"},
                            "polygon":{"nb_sides":5},
                            "image":{"src":"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                            "width":100,"height":100
                            }
                          },
                  "opacity":{ "value":0.5,
                              "random":false,
                              "anim":{"enable":false,
                                      "speed":1,
                                      "opacity_min":0.1,
                                      "sync":false
                                    }
                            },
                  "size":{"value":4,
                          "random":true,
                          "anim":{"enable":false,
                                  "speed":40,
                                  "size_min":0.1,
                                  "sync":false
                                }
                          },
                  "line_linked":{ "enable":false,
                                  "distance":150,
                                  "color":"#ffffff",
                                  "opacity":0.4,
                                  "width":1},
                  "move":{"enable":true,
                          "speed":14,
                          "direction":"left",
                          "random":false,
                          "straight":true,
                          "out_mode":"out",
                          "bounce":false,
                          "attract":{ "enable":false,
                                      "rotateX":600,
                                      "rotateY":1200
                                  }
                          }
              },
              "interactivity":{
                "detect_on":"canvas",
                "events":{
                  "onhover":{
                    "enable":false,
                    "mode":"grab"
                  },
                  "onclick":{
                    "enable":true,
                    "mode":"repulse"
                  },
                  "resize":true
                },
                "modes":{
                  "grab":{
                    "distance":200,
                    "line_linked":{
                      "opacity":1
                    }
                  },
                  "bubble":{
                    "distance":400,
                    "size":40,
                    "duration":2,
                    "opacity":8,
                    "speed":3
                  },
                  "repulse":{
                    "distance":200,
                    "duration":0.4
                  },
                  "push":{
                    "particles_nb":4
                  },
                  "remove":{
                    "particles_nb":2
                  }
                }
              },
              "retina_detect":true
          }} className="absolute-position">
          </Particles>
        </div>
        </>
      );
  }
  
}

export default App;
