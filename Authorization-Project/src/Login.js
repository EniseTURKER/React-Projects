import React from 'react';


export default class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      authorized: false,
      counter: 3,
      timer: 5,
      wait: false
    }
  }


  checkAuthorize = () => {

    const input = document.querySelector(".input")

    if (input.value) {

      if (this.props.user.password === input.value) {

        this.setState({ authorized: true })

      } else {

        alert("Yanlış Giriş yaptınız!!! \nKalan Hakkınız : " + this.state.counter)
        this.setState({ counter: --this.state.counter })

        input.value = ""
        input.focus()

        //-----------------------------------------------------------------

        if (this.state.counter === 0) {

          input.disabled = true
          this.setState({ wait: true })

          const time = setInterval(() => this.setState({ counter: --this.state.timer }), 1000);

          //-----------------------------------------------------------------

          setTimeout(() => {
            
            clearInterval(time)
            
            this.setState({ counter: 3, timer: 5, wait: false })
            
            input.disabled = false            
            input.focus()

          }, 5000);

        }
      }
    }
  }

  render() {

    let contact = (
      <div>
        <div className="top">
          <h3 className="name">{this.props.user.name}</h3>
          <img className="circle-img" src={this.props.user.imgURL} alt="" />
        </div>
        <div className="bottom">
          <p>📧 {this.props.user.mail} </p>
          <p>📞 {this.props.user.phone} </p>
        </div>
      </div>
    );

    let login = (

      <form className="form-control" action="#" onSubmit={this.checkAuthorize}>

        <input type="password" className="input" placeholder="Password" />
        <button type="submit" className="btn">Submit</button>

      </form>

    );


    return (
      <div className="card">

        <h3 className="heading">{this.state.wait ? this.state.timer + " Saniye Bekleyiniz..." : "Enter the Password"}</h3>

        {this.state.authorized ? contact : login}

      </div>
    )
  }
}