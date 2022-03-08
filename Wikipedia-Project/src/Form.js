import React, { Component } from 'react'

export default class Form extends Component {

    state = { data: "" }

    render() {

        const handleSearch = (e) => {
            this.setState({ data: e.target.value })
        }

        const submitSearch = (e) => {
            e.preventDefault()
            this.props.handleData(this.state.data)
            this.setState({ data: "" })
        }


        console.log(this.state)
        console.log(this.props)

        return (
            <div>

                <form onSubmit={submitSearch}>

                    <input type="text" name="" id=""
                        onChange={handleSearch}
                        value={this.state.data}
                    />
                    <button>Submit</button>

                </form>

            </div>
        )
    }
}
